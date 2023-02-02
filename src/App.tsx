import React from "react";
import logo from "./bcblogo.jpeg";
import "./App.css";

function App() {
  return (
    <div className="">
      <header className="App-header">
        <img src={logo} className="App-logo App" alt="logo" />

        <h2 className="subheading">
          {" "}
          Uh oh! You've reached here by mistake trying to reach{" "}
          <a href="https://blockchainbets.club/">Blockchain Bets!</a>{" "}
        </h2>

        <div className="link-n-text-align">
        <p className="subheading"> 🔗 Important links to $BCB platform 🔗 </p>

          <ul >
            <ol>
              <a href="https://blockchainbets.app/">$BCB Main </a>
            </ol>
            <ol>
              <a href="https://blockchainbets.club/">$BCB Betting </a>
            </ol>
            <ol>
              <a href="https://staking.blockchainbets.app/">$BCB Staking </a>
            </ol>
          </ul>
        </div>
        <p className="subheading"> 🐣 Important links to $BCB socials 🐣 </p>
        <div>
          <ul>
            <dd>
              <a href="https://t.me/BCBerc20"> $BCB Telegram </a>
            </dd>
            <dd>
              <a href="https://twitter.com/BCBerc20"> $BCB Twitter </a>
            </dd>
          </ul>
        </div>

        <h2 className="subheading"> 👇 Follow the steps below to ensure your safety in crypto👇 </h2>
        <ul className="link-n-text-align">
          <dd>
            - Always bookmark the correct URL and only visit the bookmarked URL.{" "}
            <br /> Spelling mistakes happen.
          </dd>
          <br />
          <dd>
            - Never give access to a web-app that automaticaly tries to connect
            to your wallet. <br /> i.e. "give xyz app access to xyz coin"
          </dd>
        </ul>
      </header>
    </div>
  );
}

export default App;
