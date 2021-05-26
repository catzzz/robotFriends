import React, { Component } from "react";
import { robots } from "../robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchfield: "",
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange(event) {
    this.setState({
      searchfield: event.target.value,
    });
    console.log(event.target.value);
  }
  render() {
    const { robots, searchfield } = this.state;
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
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}
