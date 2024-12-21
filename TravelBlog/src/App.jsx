import React from "react";
import { Route, Switch } from "wouter";
import HomePage from "./views/HomePage"
import DetailedPage from "./views/DetailedPage"
import IdeasPage from "./views/IdeasPage"
import AboutMePage from "./views/AboutMePage"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/aboutme" component={AboutMePage} />
        <Route path="/form" component={IdeasPage} />
        <Route path="/:cityName" component={({ params }) => <DetailedPage selectedCity={params.cityName} />} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
