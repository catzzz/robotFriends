import CounterButton from './CounterButton';
import { create } from "react-test-renderer";
import React from 'react';
import {shallow} from 'enzyme'

it('expect to render CounterButton componet ',()=>{
    const mockColor = 'red';
    const app = create(<CounterButton color = {mockColor}/>);
    expect(app.toJSON()).toMatchSnapshot();
})

// it('correctly increment the counter',()=>{
//     const mockColor = 'red';
    
//     const wrapper = shallow(<CounterButton color = {mockColor}/>);
//     wrapper.find('[id="counter"]').simulate('click');
//     wrapper.find('[id="counter"]').simulate('click');
//     expect(wrapper.state()).toEqual({count:2});
// })
it('correnctly increments the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color= {mockColor}/>)

    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count: 1})
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count: 3})
    expect(wrapper.props().color).toEqual("red")
  });