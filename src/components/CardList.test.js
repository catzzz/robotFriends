import CardList from './CardList';
import { create } from "react-test-renderer";
import React from 'react';

it('expect to render CardList componet ',()=>{
    const mockRobots = [
        {
            id:1,
            name:'Jimmy',
            username: 'John John',
            email:'jimmy@gmail.com'
        }
    ]
    const app = create(<CardList robots = {mockRobots}/>);
    expect(app.toJSON()).toMatchSnapshot();
})
