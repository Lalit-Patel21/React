import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }
  async componentDidMount() {
    console.log("component did Mount");
    // api calls
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unMount");
  }
  render() {
    const { name, location, avatar_Url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_Url} />
        <h2> Name : {name}</h2>
        <h3>Location : {location} </h3>
        <h3>Contact : lalitpatel@ </h3>
      </div>
    );
  }
}
export default UserClass;
