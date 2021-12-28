import React, { useState, useEffect } from "react";
import { CloseCircleFilled } from "@ant-design/icons";
import { Checkbox, Form, List } from "antd";
import { deleteTask, updateTask, filterTasks } from "../../store/actions/tasks";
import { useDispatch } from "react-redux";

export default function Index({ tasks }) {
  const dispatch = useDispatch();
  const [data, setData] = useState(tasks);

  const updateItem = (checked, id) => {
    dispatch(updateTask({ id, checked }));
  };

  const deleteItem = (item) => {
    dispatch(deleteTask(item));
  };

  const filterItem = (checked) => {
    console.log(tasks, "tasks");
    const newData = tasks.filter((el) =>
      checked ? el.done === checked : true
    );
    setData(newData);
  };
  useEffect(() => {
    setData(tasks);
  }, [tasks]);

  return (
    <List
      size="small"
      bordered
      header={
        <>
          <h2>filter :</h2>
          <Checkbox onChange={(e) => filterItem(e.target.checked)}>
            نمایش تسک های انجام شده
          </Checkbox>
        </>
      }
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Checkbox
              checked={item.done}
              onChange={(e) => updateItem(e.target.checked, item.id)}
            />,
            <CloseCircleFilled onClick={() => deleteItem(item)} />,
          ]}
        >
          {item.name} {item.lastName}
          <span>({item.done ? "انجام شده" : "انجام نشده"})</span>
        </List.Item>
      )}
    />
  );
}
