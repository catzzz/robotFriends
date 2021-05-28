import Card from './Card';
import { create } from "react-test-renderer";
import React from 'react';

it('expect to render Card componet ',()=>{

    const app = create(<Card />);
    expect(app.toJSON()).toMatchSnapshot();
})
