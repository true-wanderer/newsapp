import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export class App extends Component {
  pageSize = 9;
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/general"
            element={
              <News
                key="genaral"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={this.pageSize}
                country="in"
                category="business"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
