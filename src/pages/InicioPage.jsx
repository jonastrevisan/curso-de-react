import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import { v4 } from "uuid";
import Title from "../components/Title";
import { useEffect, useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "../components/Navbar";
import "../styles.css";
function InicioPage() {
  const [showNav, setShowNav] = useState(false);

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      // NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <Navbar show={showNav} />
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px] space-y-4">
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
          <Title>Gerenciador de Tarefas</Title>
          <AddTask onAddTaskSubmit={onAddTaskSubmit} />
          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            onDeleteTaskClick={onDeleteTaskClick}
          />
        </div>
      </div>
    </div>
  );
}
export default InicioPage;
