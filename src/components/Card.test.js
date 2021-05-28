import {shallow} from 'enzyme';
import Card from './Card';
import { create } from "react-test-renderer";
import React from 'react';
const app = create(<Card />);
it('expect to render Card componet ',()=>{
    expect(app.toJSON()).toMatchSnapshot();
})
