import { actionTypes } from "../../constatnt";

const initialState = [
  { id: 1, name: "saeede", lastName: "gholizade", done: true },
];

export function tasks(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.addTask:
      return [...state, payload];

    case actionTypes.deleteTask:
      return state.filter((el) => el.id !== payload.id);

    case actionTypes.updateTask:
      const newState = state.map((obj) => {
        if (obj.id === payload.id) {
          return { ...obj, done: payload.checked };
        }

        return obj;
      });
      return newState;

    default:
      return state;
  }
}
