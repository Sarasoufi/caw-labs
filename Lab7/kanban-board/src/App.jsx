import React, { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import Column from "./components/Column";
import TaskForm from "./components/TaskForm";
import { initialTasks } from "./data/sampleTasks";

const columnsOrder = [
  { id: "todo", title: "To Do" },
  { id: "inprogress", title: "In Progress" },
  { id: "done", title: "Done" }
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  // helper: return tasks filtered by status
  const tasksByStatus = (status) => tasks.filter(t => t.status === status);

  // Add a new task
  const addTask = (title, description) => {
    const newTask = {
      id: `t${Date.now()}`,
      title,
      description,
      status: "todo"
    };
    setTasks(prev => [newTask, ...prev]);
  };

  // Move task by id to a new status (button fallback)
  const moveTaskTo = (taskId, newStatus) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
  };

  // DnD handler
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    // if dropped in same column, ignore
    if (destination.droppableId === source.droppableId) return;

    const newStatus = destination.droppableId;
    moveTaskTo(draggableId, newStatus);
  };

  return (
    <div className="app">
      <header>
        <h1>Kanban Board</h1>
      </header>

      <TaskForm onAdd={addTask} />

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="board">
          {columnsOrder.map(col => (
            <Column
              key={col.id}
              columnId={col.id}
              title={col.title}
              tasks={tasksByStatus(col.id)}
              onMoveTask={moveTaskTo}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
