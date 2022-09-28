import React, { useState } from "react";
import "./App.css";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import { Card, Col, Row, Typography } from "antd";
import { AddTodoForm } from "./components/AddTodoForm";
import { ITodo } from "./todo.model";
import { TodoList } from "./components/TodoList";

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
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Header>
        <Typography.Title level={2} style={{ color: "white", padding: "1rem" }}>
          Add a To-Do...
        </Typography.Title>
      </Header>
      <Content
        style={{
          display: "flex",
          alignContent: "space-between",
          flexDirection: "column",
          width: "100vw",
          textAlign: "center",
        }}
      >
        <Row style={{ width: "100vw" }}>
          <Col span={24}>
            <Card title="Create a new todo">
              <AddTodoForm onFormSubmit={handleFormSubmit} />
            </Card>
          </Col>

          <Col span={24}>
            <Card title="Todo List">
              <TodoList
                todos={todos}
                onTodoRemoval={handleRemoveTodo}
                onTodoToggle={handleToggleTodoStatus}
              />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
