const INCREASE_CLASS = "INCREASE_CLASS";
const DECREASE_CLASS = "DECREASE_CLASS";

const initialState = {
  counterClass: 0,
};

export const increaseClassCounterAction = () => ({type: INCREASE_CLASS})
export const decreaseClassCounterAction = () => ({type: DECREASE_CLASS})

export const counterClassReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_CLASS:
      return {
        counterClass: state.counterClass + 1,
      };
    case DECREASE_CLASS:
      return {
        counterClass: state.counterClass - 1,
      };
    default:
      return state;
  }
};
