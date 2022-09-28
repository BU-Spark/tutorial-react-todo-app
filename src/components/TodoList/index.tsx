import React from "react";

import { List } from "antd";
import { ITodo } from "../../todo.model";
import { TodoItem } from "../TodoItem";

interface ITodoListProps {
  todos: ITodo[];
  onTodoRemoval: (todo: ITodo) => void;
  onTodoToggle: (todo: ITodo) => void;
}
// You need to write this component!
// It should render a list of todos 
// It also needs to handle individual actions on a particular todo

// export const TodoList: React.FC<ITodoListProps> = ({
//   todos,
//   onTodoRemoval,
//   onTodoToggle,
// }) => (
// );
