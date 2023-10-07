// 初期値　reducerで言う第二引数
export const init = {
  loading: false,
  todo: {},
  error: false,
};

// reducerで言う第一引数　変数を更新する関数
export const todoSwitch = (state, action) => {
  switch (action.type) {
    case "START":
      return {
        loading: true,
        todo: {},
        error: false,
      };
    case "SUCCESS":
      return {
        loading: false,
        todo: action.payload,
        error: false,
      };
    case "ERROR":
      return {
        loading: false,
        todo: {},
        error: true,
      };
    default:
      return state;
  }
};
