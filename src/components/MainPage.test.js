import MainPage from "../components/MainPage";
import { create } from "react-test-renderer";
import React from "react";
import { shallow } from "enzyme";

let wrapper;
let app;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  app = create(<MainPage {...mockProps} />);
});

it("renders MainPage without crashing", () => {
  expect(app.toJSON()).toMatchSnapshot();
});

it("fileters Robots", () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "a",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filteredRobots()).toEqual([]);
});

it("fileters Robots correctly", () => {
  const filteredRobots = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
  ];
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
    ],
    searchField: "Leanne",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filteredRobots()).toEqual(filteredRobots);
});

it("fileters Robots correctly 2", () => {
  const filteredRobots = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
  ];
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
    ],
    searchField: "Xavier",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filteredRobots()).toEqual([]);
});
