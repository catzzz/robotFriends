import React, { Component } from "react";
import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: robots,
      searchfield: "",
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event){
    this.setState ({
        searchfield: event.target.value
    })
    console.log(event.target.value);



  }
  render() {
    const filteredRobots = this.state.robots.filter(robots => {
        return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
    })
    return (
      <div className="tc">
        <h1 className='f1'> RobotFriends</h1>
        <SearchBox searchChange = {this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
