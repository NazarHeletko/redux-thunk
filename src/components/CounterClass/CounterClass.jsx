import React from "react";
import { connect } from "react-redux";
import { decreaseClassCounterAction, increaseClassCounterAction } from "../../store/reducers/counterClassReducer";

class CounterClass extends React.Component {
  render() {
    return (
      <div className="item">
        <h4>Count: {this.props.counter}</h4>
        <button onClick={()=>this.props.dispatch(increaseClassCounterAction())}>Increase</button>
        <button onClick={()=>this.props.dispatch(decreaseClassCounterAction())}>Decrease</button>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    counter: store.counterClass.counterClass,
  };
}

export default connect(mapStateToProps)(CounterClass);
