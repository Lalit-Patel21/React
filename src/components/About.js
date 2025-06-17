import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About Class componennt</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className=" text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <User name={"Lalit Patel (function component)"} location={"Indore"} />
        <UserClass name={"Lalit Patel (class component)"} />
      </div>
    );
  }
}
export default About;
