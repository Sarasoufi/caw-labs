import React from "react";
import { Draggable } from "@hello-pangea/dnd";

export default function TaskCard({ task, index, onMoveTask }) {
  // buttons to quickly change status (fallback to drag)
  const statusOrder = ["todo", "inprogress", "done"];

  const moveNext = () => {
    const currIdx = statusOrder.indexOf(task.status);
    if (currIdx < statusOrder.length - 1) onMoveTask(task.id, statusOrder[currIdx + 1]);
  };
  const movePrev = () => {
    const currIdx = statusOrder.indexOf(task.status);
    if (currIdx > 0) onMoveTask(task.id, statusOrder[currIdx - 1]);
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task-card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div className="task-actions">
            <button onClick={movePrev} aria-label="move previous">←</button>
            <span className="status-pill">{task.status}</span>
            <button onClick={moveNext} aria-label="move next">→</button>
          </div>
        </div>
      )}
    </Draggable>
  );
}
