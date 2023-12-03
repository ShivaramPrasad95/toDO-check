import { useEffect, useState } from "react";
import { MyContext } from "./MyContext";

function StatePovider({ children }) {
  const [tasks, setTasks] = useState([]);

  const localStore = localStorage.getItem("taskDummy");

  // onMount
  useEffect(() => {
    if (localStore) {
      setTasks(JSON.parse(localStore));
    }
  }, []);

  return (
    <div>
      <MyContext.Provider value={{ tasks, setTasks }}>
        {children}
      </MyContext.Provider>
    </div>
  );
}

export default StatePovider;
