import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteFromList,
  updateItem,
  addQuantItem,
  subQuantItem,
} from "../app/features/listSlice";

function List() {
  const state = useSelector((state) => state.list);
  const dispatch = useDispatch();

  return (
    <div>
      {state.listArray.map((item) => (
        <li key={item.id}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={(e) => dispatch(updateItem(item.id))}
          />
          {item.title} {item.quantity}
          <button onClick={() => dispatch(addQuantItem(item.id))}>Add</button>
          <button onClick={() => dispatch(subQuantItem(item.id))}>Sub</button>
          <button onClick={() => dispatch(deleteFromList(item.id))}>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
}

export default List;
