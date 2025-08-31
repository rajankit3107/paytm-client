import { Button } from "./components/Button";
import { Heading } from "./components/Heading";
import { InputBox } from "./components/InputBox";
import { SubHeading } from "./components/SubHeading";

function App() {
  return (
    <>
      <Heading label="Sign up" />
      <SubHeading label="Enter your information to create an account" />
      <InputBox label="FirstName" placeholder="Enter your First name" />
      <Button label="sign up" onClick={() => alert("hey there")} />
    </>
  );
}

export default App;
