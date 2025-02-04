import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialItems = [
  { id: "1", name: "Sextant" },
  { id: "2", name: "Shaving Mirror" },
  { id: "3", name: "Water Rations" },
  { id: "4", name: "Fishing Kit" },
  { id: "5", name: "Flare Gun" },
  { id: "6", name: "Compass" },
  { id: "7", name: "First Aid Kit" },
  { id: "8", name: "Emergency Radio" },
  { id: "9", name: "Tarp" },
  { id: "10", name: "Survival Knife" },
  { id: "11", name: "Canned Food" },
  { id: "12", name: "Matches" },
  { id: "13", name: "Rope" },
  { id: "14", name: "Sunscreen" },
  { id: "15", name: "Binoculars" },
];

const DnD = () => {
  const [items, setItems] = useState(initialItems);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = [...items];
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

    setItems(reorderedItems);
  };

  return (
    <div className="app-container">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className="droppable-container">
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`draggable-item ${snapshot.isDragging ? "dragging" : ""}`}
                    >
                      {item.name}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DnD;
