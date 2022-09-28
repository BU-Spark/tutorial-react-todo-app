import React from "react";
import { Form, Row, Col, Button, Input, DatePicker, notification } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import { Moment } from "moment";

import "./styles.less";
import { ITodo } from "../../todo.model";
import moment from "moment";

interface IAddTodoFormProps {
  onFormSubmit: (todo: ITodo) => void;
}

export const AddTodoForm: React.FC<IAddTodoFormProps> = ({ onFormSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    onFormSubmit({
      name: form.getFieldValue("name"),
      date: form.getFieldValue("date"),
    });

    form.resetFields();
  };

  const onChange = (params: any) => {
    const checkHoliday = async () => {
      const data = await fetch(
        "https://date.nager.at/api/v3/publicholidays/2022/US"
      );
      const holiday_list: Array<any> = await data.json();
      holiday_list.forEach((holiday) => {
        if (moment(holiday.date).isSame(params, "day")) {
          notification.open({
            message: "Holiday Warning",
            description: "The selected day is a holiday! Watch out (: ",
          });
        }
      });
    };
    checkHoliday();
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="horizontal"
      className="todo-form"
    >
      <Row gutter={20}>
        <Col xs={24} sm={24} md={17} lg={16} xl={16}>
          <Form.Item
            name={"name"}
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input placeholder="What needs to be done?" />
          </Form.Item>
        </Col>
        <Col xs={12} sm={12} md={8} lg={4} xl={4}>
          <Form.Item
            name={"date"}
            rules={[{ required: true, message: "This field is required" }]}
          >
            <DatePicker onChange={onChange} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={7} lg={4} xl={4}>
          <Button type="primary" htmlType="submit" block>
            <PlusCircleFilled />
            Add todo
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
