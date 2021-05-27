// import React, { useState, useEffect } from "react";
// // import { robots } from "../robots";
// import {connect} from 'react-redux';
// import CardList from "../components/CardList";
// import SearchBox from "../components/SearchBox";
// import Scroll from "../components/Scroll";
// import "./App.css";
// import ErrorBoundry from "../components/ErrorBoundry";
// import {setSearchField} from '../actions';

// // const  mapStateToProps = state => {
// //   return {
// //     searchField: state.searchRobotsReducer.searchField
// //   }
// // }
// const mapStateToProps = (state) => {
//   return {
//     searchField: state.searchRobots.searchField
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSearchChange: (event) => dispatch(setSearchField(event.target.value))
//   }

// }
// const connector = connect(mapStateToProps, mapDispatchToProps)

//  function App(props) {

//   const [robots, setRobots] = useState([]);
//   const {searchField, onSearchChange} = this.props;
//   //const [searchfield, setSearchfield] = useState("");
//   // const [count, setCount] = useState(0);

// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//       setRobots(users);

//     }); // run effect once just like componentDidMount
// }, []); // Only run if count changes.

//   // const onSearchChange = (event) => {
//   //   setSearchfield(event.target.value);
//   // };

//   // const addCount = () =>{

//   //   setCount(count+1);
//   // }

//   const filteredRobots = robots.filter((robots) => {
//     return robots.name
//       .toLocaleLowerCase()
//       .includes(searchField.toLocaleLowerCase());
//   });
//   return !robots.length ? ( // if legth !== 0
//     <h1>Loading</h1>
//   ) : (
//     // else
//     <div className="tc">
//       <h1 className="f1"> RobotFriends</h1>
//       {/* <button onClick={addCount}>Click Me</button> */}
//       <SearchBox searchChange={onSearchChange} />
//       <Scroll>
//         <ErrorBoundry>
//           <CardList robots={filteredRobots} />
//         </ErrorBoundry>
//       </Scroll>
//     </div>
//   );
// }

// export default connector(App);

import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField,requestRobots } from "../actions";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

import "./App.css";

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {

  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error:state.requestRobots.error
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  
  return {
    
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
};

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          { isPending ? <h1>Loading</h1> :
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);
