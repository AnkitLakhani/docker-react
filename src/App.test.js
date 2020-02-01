import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", done => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  done();
});

afterAll(done => {
  done();
});

//93r6BDbg/riHuZDRfSNnIQwnDmeYyA6SMDYqZU2r
