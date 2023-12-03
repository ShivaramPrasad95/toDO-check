import { Box } from "@mui/material";
import Header from "../../src/components/Header";
import Card from "../../src/components/Card";
import AddTask from "../../src/components/AddTask";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../src/store/MyContext";

// CRUD

function App() {
  const { tasks, setTasks } = useContext(MyContext);

  // onUpdate
  useEffect(() => {
    localStorage.setItem("taskDummy", JSON.stringify(tasks));
    // unMount
    return () => {
      localStorage.setItem("taskDummy", JSON.stringify(tasks));
    };
  }, [tasks]);

  const [showText, setShowText] = useState("Add Task");
  const [btnClicked, setBtnClicked] = useState(false);

  const onDelete = (id) => {
    setTasks(tasks?.filter((task) => task.id !== id));
  };

  const onToggle = (id) => {
    setTasks(
      tasks?.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const btnToggle = () => {
    setBtnClicked(!btnClicked);
    setShowText(showText == "Add Task" ? "Discard" : "Add Task");
  };

  const addTask = (title, desc, reminder) => {
    const taskId = tasks?.length;
    const newTask = {
      id: taskId.toString(),
      taskName: title,
      description: desc,
      reminder: reminder,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <Box
      className="container"
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      minHeight={"80vh"}
    >
      <Header showAdd={showText} btnToggle={btnToggle}></Header>
      {btnClicked && <AddTask addTask={addTask}></AddTask>}
      {tasks?.map((task) => {
        return (
          <>
            <Card
              id={task.id}
              taskName={task.taskName}
              description={task.description}
              reminder={task.reminder}
              onDelete={onDelete}
              onToggle={onToggle}
            ></Card>
          </>
        );
      })}
    </Box>
  );
}

export default App;
