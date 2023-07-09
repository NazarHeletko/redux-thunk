const INCREASE_FUNC = "INCREASE_FUNC";
const DECREASE_FUNC = "DECREASE_FUNC";

const initialState = {
  counterFunc: 0,
};

export const increaseFuncCounterAction = () => ({type: INCREASE_FUNC})
export const decreaseFuncCounterAction = () => ({type: DECREASE_FUNC})

export const counterFuncReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_FUNC:
      return {
        counterFunc: state.counterFunc + 1,
      };
    case DECREASE_FUNC:
      return {
        counterFunc: state.counterFunc - 1,
      };
    default:
      return state;
  }
};
