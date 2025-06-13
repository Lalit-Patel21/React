import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
    };
    console.log(props);
  }
  render() {
    const { name, location } = this.props;
    const { count, count1 } = this.state;
    return (
      <div className="user-card">
        <h1> Count: {count}</h1>
        <h1> Count1: {count1}</h1>
        <button
          onClick={() => {
            // never update state variable directly
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 1,
            });
          }}
        >
          Increase
        </button>
        <h2> Name : {name}</h2>
        <h3>Location : {location} </h3>
        <h3>Contact : lalitpatel@ </h3>
      </div>
    );
  }
}
export default UserClass;
