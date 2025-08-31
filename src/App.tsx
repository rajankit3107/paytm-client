import { Heading } from "./components/Heading";
import { InputBox } from "./components/InputBox";
import { SubHeading } from "./components/SubHeading";

function App() {
  return (
    <>
      <Heading label="Sign up" />
      <SubHeading label="Enter your information to create an account" />
      <InputBox label="FirstName" placeholder="Enter your First name" />
    </>
  );
}

export default App;
