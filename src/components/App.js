import React from "react";
import "./App.css";
import Header from "./Header";
//import MainContent from "./MainContent";
import Footer from "./Footer";
import ToDoList from "./ToDoList";
import TickingClock from "./TickingClock";
import RulesList from "./RulesList";
import QuotesList from "./QuotesList"
import StatePlayground from "./StatePlayground";
import PropsPlayground from "./PropsPlayground";

function App() {
  return (
    <div className="mainPage">
      <TickingClock />
      <Header />
      <StatePlayground />
      <QuotesList/>
      <RulesList />
      <ToDoList />
      <PropsPlayground user={"Agnieszka"} place={"podwórko"} language={"React Hooks"}/>
      <Footer />
    </div>
  );
}

export default App;
