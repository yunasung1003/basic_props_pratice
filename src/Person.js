import React from "react";

function Person({ person }) {
  return (
    <div>
      Hello, my name is {person.firstname}. my age is {person.age}, i can{" "}
      {person.power}.
    </div>
  );
}
export default Person;
