import Hello from "./Hello";
import React from "react";
import Wrapper from "./Wrapper";
import Person from "./Person";
import Button from "./Button";

const name = "Joe";
const age = 20;

const name1 = "Jack";
const age1 = 17;

const person = {
  firstname: "SuperMan",
  age: 200,
  power: "fly"
};

function App() {
  return (
    <Wrapper>
      <Hello name="yuna" age="26" />
      <Hello name={name} age={age} />
      <Hello name={name1} age={age1} />
      <Person person={person} />

      {/* color ="red" 던져서 red 를 Button에서 받기 */}
      <Button color="red" />
    </Wrapper>
  );
}
export default App;
