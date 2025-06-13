import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About componennt</h1>
      <User name={"Lalit Patel (function component)"} location={"Indore"} />
      <UserClass name={"Lalit Patel (class component)"} />
    </div>
  );
};
export default About;
