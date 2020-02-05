import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import BtnInfo from './BtnInfo';

let container = null;

beforeEach( () => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach( () => {
  unmountComponentAtNode(container);
  container.remove();
});

it('renders without crashing', () => {
  act( () => {
    render(<BtnInfo></BtnInfo>, container);
  });
  expect((document.querySelector("[data-testId='btnInfo']")).textContent).toMatch("Plus d'information")


});