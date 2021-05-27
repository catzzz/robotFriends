import React, { useState, useEffect } from "react";
// import { robots } from "../robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";

export default function App(props) {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
        
      }); // run effect once just like componentDidMount
  }, [count]); // Only run if count changes.

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const addCount = () =>{

    setCount(count+1);
  }

  const filteredRobots = robots.filter((robots) => {
    return robots.name
      .toLocaleLowerCase()
      .includes(searchfield.toLocaleLowerCase());
  });
  return !robots.length ? ( // if legth !== 0
    <h1>Loading</h1>
  ) : (
    // else
    <div className="tc">
      <h1 className="f1"> RobotFriends</h1>
      <button onClick={addCount}>Click Me</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}
