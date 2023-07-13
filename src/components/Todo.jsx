import React from "react";
import InputBar from "./InputBar";
import List from "./List";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addToList } from "../app/features/listSlice";
import { useEffect } from "react";

function Todo() {
  return (
    <div>
      <h1>TODO</h1>
      <InputBar></InputBar>
      <List></List>
    </div>
  );
}

export default Todo;
