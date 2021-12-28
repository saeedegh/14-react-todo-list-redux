import React from "react";
import { Modal, Form, Input, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/actions/tasks";

export default function Index({ visible, setvisible, tasks }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const add = (values) => {
    const { name, lastName, done } = values;
    dispatch(addTask({ id: tasks.length + 1, name, lastName, done }));
    form.resetFields();
    setvisible(false);
  };

  const onCloseModal = () => {
    form.resetFields();
    setvisible(false);
  };

  return (
    <Modal
      visible={visible}
      title="افزودن تسک"
      okText="ثبت"
      cancelText="انصراف"
      onOk={form.submit}
      onCancel={onCloseModal}
    >
      <Form form={form} onFinish={add}>
        <Form.Item
          name="name"
          label="نام"
          labelCol={{ span: 24 }}
          rules={[{ required: true }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label=" نام خانوادگی "
          labelCol={{ span: 24 }}
          rules={[{ required: true }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item name="done" valuePropName="checked">
          <Checkbox>انجام شده </Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
}
