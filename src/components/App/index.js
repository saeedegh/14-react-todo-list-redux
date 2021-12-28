import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { Button, Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TasksList from "../TasksList/index";
import TaskModal from "../TaskModal/index";

function App() {
  const tasks = useSelector((state) => state.tasks);
  const [visible, setvisible] = useState(false);

  return (
    <div style={{ padding: "200px" }}>
      <Card
        title="tasks"
        extra={
          <Button onClick={() => setvisible(true)}>
            <PlusOutlined color="blue" />
          </Button>
        }
      >
        <TasksList tasks={tasks} />
      </Card>
      <TaskModal visible={visible} setvisible={setvisible} tasks={tasks} />
    </div>
  );
}

export default App;
