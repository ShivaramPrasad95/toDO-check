import { Box } from "@mui/material";
import Header from "./components/Header";
import Card from "./components/Card";
import AddTask from "./components/AddTask";
import { useState } from "react";

// CRUD

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "0",
      taskName: "Demo Title 1",
      description: "Remind me later",
      reminder: true,
    },
    {
      id: "1",
      taskName: "Demo Title 2",
      description: "Remind me later",
      reminder: true,
    },
    {
      id: "2",
      taskName: "Demo Title 3",
      description: "Remind me later",
      reminder: true,
    },
    {
      id: "3",
      taskName: "Demo Title 4",
      description: "Remind me later",
      reminder: true,
    },
  ]);

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
