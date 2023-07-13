import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToList } from "../app/features/listSlice";

function InputBar() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  function addItem(title) {
    dispatch(
      addToList({
        id: crypto.randomUUID(),
        title,
        completed: false,
        quantity: 0,
      })
    );
  }

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => addItem(title)}>Add Item</button>
    </>
  );
}

export default InputBar;
