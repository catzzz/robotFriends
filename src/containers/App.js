import React, { useState, useEffect } from "react";
// import { robots } from "../robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";

export default function App() {

  useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {setRobots(users)}); // run effect once just like componentDidMount
      console.log(robots, searchfield);
  },[])
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = (event) => {
    // this.setState({
    //   searchfield: event.target.value,
    // });
    setSearchfield(event.target.value);

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
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  
}
