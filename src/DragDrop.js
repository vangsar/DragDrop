import "./App.css";
import DraggableList from "react-draggable-list";
import React, { useRef, useState } from "react";

const data = Array(10)
  .fill(null)
  .map((item, index) => ({ id: index }));

const Item = ({ item, dragHandleProps }) => {
  const { onMouseDown, onTouchStart } = dragHandleProps;

  return (
    <div
      className="disable-select dragHandle"
      style={{
        border: "1px solid black",
        margin: "4px",
        padding: "10px",
        display: "flex",
        justifyContent: "start",
        background: "#fff"
      }}
      onTouchStart={(e) => {
        e.preventDefault();
        console.log("touchStart");
        e.target.style.backgroundColor = "blue";
        document.body.style.overflow = "hidden";
        onTouchStart(e);
      }}
      onMouseDown={(e) => {
        console.log("mouseDown");
        document.body.style.overflow = "hidden";
        onMouseDown(e);
      }}
      onTouchEnd={(e) => {
        e.target.style.backgroundColor = "black";
        document.body.style.overflow = "visible";
      }}
      onMouseUp={() => {
        document.body.style.overflow = "visible";
      }}
    >
      {item.id}
    </div>
  );
};

export default function DragDrop() {
  const [list, setList] = useState(data);

  const containerRef = useRef();

  const _onListChange = (newList) => {
    setList(newList);
  };

  return (
    <div
        ref={containerRef}
        style={{ touchAction: "pan-ydsdsd", background: "beiges" }}
      >
        <DraggableList
          itemKey="id"
          template={Item}
          list={list}
          onMoveEnd={(newList) => _onListChange(newList)}
          container={() => containerRef.current}
        />
        {/* {list.map((item) => (
          <Item item={item} />
        ))} */}
      </div>
  );
}
