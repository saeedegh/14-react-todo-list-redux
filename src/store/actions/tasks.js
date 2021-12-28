import { actionTypes } from "../../constatnt";

export function addTask(payload) {
  return {
    type: actionTypes.addTask,
    payload,
  };
}

export function deleteTask(payload) {
  return {
    type: actionTypes.deleteTask,
    payload,
  };
}

export function updateTask(payload) {
  return {
    type: actionTypes.updateTask,
    payload,
  };
}
