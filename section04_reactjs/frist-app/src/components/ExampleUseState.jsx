import { useState } from "react";
const ExampleUseState = () => {
  const [student, setStudent] = useState("Nguyen Van A");

  function changeStudent(name) {
    setStudent(name);
  }

  return (
    <div>
      <h1>useState</h1>
      <h2>Hello: {student}</h2>
      <button onClick={() => changeStudent("Nguyen Van B")}>
        Change Student
      </button>
    </div>
  );
};

export default ExampleUseState;
