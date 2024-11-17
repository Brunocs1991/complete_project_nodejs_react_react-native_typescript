import {useState} from "react";

const ExampleForm = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [userInfo, setUserInfo] = useState({name: "", age: "", email: ""});


  function handleSubmit(e) {
    e.preventDefault();
    setUserInfo({name: name, age: age, email: email});
    setName("");
    setAge("");
    setEmail("");
  }

  return (<div>
    <h1>Register User</h1>
    <form>
      <label htmlFor="name">Name:</label>
      <br/>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br/>
      <br/>
      <label htmlFor="age">Age:</label>
      <br/>
      <input
        type="number"
        id="age"
        name="age"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br/>
      <br/>
      <label htmlFor="email">Email:</label>
      <br/>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br/>
      <br/>
      <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
    </form>

    <div>
      <h2>User Info</h2>
      <p>Name: {userInfo.name}</p>
      <p>Age: {userInfo.age}</p>
      <p>Email: {userInfo.email}</p>
    </div>
  </div>);
};

export default ExampleForm;
