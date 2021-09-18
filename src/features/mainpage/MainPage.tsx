import React from "react";
import { Route, Switch } from "react-router";
import { Header } from "../header/Header";
import About from "../../pages/About";
import Resources from "../../pages/Resources";
import Contact from "../../pages/Contact";
import Main from "../../pages/Main";
import './MainPage.css';

export function MainPage() {
  return (
    <div className="main">
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  )
}