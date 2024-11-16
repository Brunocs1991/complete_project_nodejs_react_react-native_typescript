import Person from "./Person";
const ExampleComponent = () => {
  return (
    <div>
      <h1>Welcome to my fritst app</h1>
      <Person name="John" age={25} />
      <br />
      <Person name="Jane" age={22} />
    </div>
  );
};

export default ExampleComponent;
