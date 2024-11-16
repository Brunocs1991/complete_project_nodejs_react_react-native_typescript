import Person from "./components/Person";

const App = () => {
  return (
    <div>
      <h1>Welcome to my fritst app</h1>
      <Person name="John" age={25} />
      <br />
      <Person name="Jane" age={22} />
    </div>
  );
};

export default App;
