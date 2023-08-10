import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import News from "./News";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      language: "hi",
    };
  }
  changeLanguage = (data) => {
    this.setState({ language: data });
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar changeLanguage={this.changeLanguage} />
          <Routes>
            <Route
              path="/"
              element={<News language={this.state.language} q="all" />}
            />
            <Route
              path="/politics"
              element={<News language={this.state.language} q="Politics" />}
            />
            <Route
              path="/science"
              element={<News language={this.state.language} q="Science" />}
            />
            <Route
              path="/covid"
              element={<News language={this.state.language} q="Covid" />}
            />
            <Route
              path="/technology"
              element={<News language={this.state.language} q="Technology" />}
            />
            <Route
              path="/education"
              element={<News language={this.state.language} q="Education" />}
            />
            <Route
              path="/crime"
              element={<News language={this.state.language} q="Crime" />}
            />
            <Route
              path="/cricket"
              element={<News language={this.state.language} q="Cricket" />}
            />
            <Route
              path="/sport"
              element={<News language={this.state.language} q="Sport" />}
            />
            <Route
              path="/entertainment"
              element={
                <News language={this.state.language} q="Entertainment" />
              }
            />
            <Route
              path="/business"
              element={<News language={this.state.language} q="Business" />}
            />
            <Route
              path="/jokes"
              element={<News language={this.state.language} q="Jokes" />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}
