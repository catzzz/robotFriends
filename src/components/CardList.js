import React, { Component } from 'react'

import Card from './Card';
export default class CardList extends Component {
    

    render() {
        console.log("CardList render")
        const { robots } = this.props;
        const cardComponent = robots.map((robot,index) => {
            return <Card name ={robot.name} email={robot.email} id={robot.id} key={robot.id}/>
        });

        return (
            <div>
                {cardComponent}
            </div>
        )
    }
}
