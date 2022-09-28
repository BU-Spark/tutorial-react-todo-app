import React, { useState } from "react";
import "./App.css";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import { Card, Col, Row, Typography } from "antd";
import { AddTodoForm } from "./components/AddTodoForm";
import { ITodo } from "./todo.model";
// import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Array<ITodo>>([]);
  const handleFormSubmit = (todo: ITodo): void => {
    setTodos((todos) => [...todos, todo]);
  };

  const handleRemoveTodo = (todo: ITodo): void => {
    const index = todos.findIndex((elm) => elm.id === todo.id);
    setTodos((todos) => [
      ...todos.slice(0, index),
      ...todos.slice(index + 1, todos.length),
    ]);
  };

  const handleToggleTodoStatus = (todo: ITodo): void => {
    const index = todos.findIndex((elm) => elm.id === todo.id);
    const new_todos = [...todos];
    new_todos[index].completed = todo.completed ? false : true;
    setTodos(new_todos);
  };
  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>Hello World</Layout>
  );
}

export default App;
