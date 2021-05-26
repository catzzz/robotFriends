import React, { Component } from "react";

export default class Card extends Component {
    constructor(props){
        super(props);
    }
  render() {
      const {name, email, id} = this.props
    return (
      <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
          <h1>Robots</h1>
        <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
        <div>
          <h2>{name}</h2>
          <p> {email}</p>
        </div>
      </div>
    );
  }
}
