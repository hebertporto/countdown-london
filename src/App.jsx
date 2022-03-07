import React from "react";
import { CountdownTimer } from "./components/CountdownTimer";
import roadTripImg from "./assets/images/road-trip.jpg";

import "./App.css";

function App() {
  const departureToLondonTimestamp = new Date(
    "29 March 2022 13:30:00 CST"
  ).getTime();
  return (
    <div className='main-container'>
      <h1>Porto's to London/ON</h1>
      <CountdownTimer targetDate={departureToLondonTimestamp} />
      <img src={roadTripImg} alt='Road trip' height='200' />
    </div>
  );
}

export default App;
