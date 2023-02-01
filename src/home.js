/* eslint-disable no-lone-blocks */
/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState } from "react";
import "./App.css";
import Typewriter from "typewriter-effect";

function Home() {
  const [cal, setCal] = React.useState();
  const [firstStake, setFirstStake] = React.useState();
  const [secondStake, setSecondStake] = React.useState();
  const [thirdStake, setThirdStake] = React.useState();
  const [fourthStake, setFourthStake] = React.useState();
  const [labels, setLabels] = React.useState();
  const [downloads, setDownloads] = useState([]);
  const [downloads2, setDownloads2] = useState([]);
  const [instructions, setInstructions] = useState();
  const firstElement = downloads2.slice(0, 1);
  const firstSixElement = downloads.slice(0, 6);
  let nextElement = firstElement;
  nextElement++;

  const getDownloads = async () => {
    setTotal([]);
    setTotal2([]);
    setDownloads([]);
    setDownloads2([]);
    go();
    setInstructions("... Loading");
    const [response1, response2] = await Promise.all([
      fetch("https://puppeteer-vercel-master-eight.vercel.app/api"),
      fetch("https://puppeteer-vercel-master-eight.vercel.app/api2"),
    ]);
    const data1 = await response1.json();
    const data2 = await response2.json();
    console.log(data1);
    console.log(data2);
    setDownloads(data1);
    setDownloads2(data2);
    setInstructions("");
  };

  function go() {
    if (downloads.length < 2) {
      return null;
    } else {
      return (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Bet on")
              .callFunction(() => {
                {
                  findFrequentNumbers();
                  findFrequentNumbers2();
                }
              })
              .start();
          }}
        />
      );
    }
  }

  const findFrequentNumbers = () => {
    const frequencyMap = {};
    const frequentNumbers = [];

    for (let i = 0; i < downloads.length; i++) {
       if (!frequencyMap[downloads[i]]) {
        frequencyMap[downloads[i]] = 1;
      } else {
        frequencyMap[downloads[i]]++;
 
/* frequencyMap[downloads[i]] = (frequencyMap[downloads[i]] || 0 ) */
      if (frequencyMap[downloads[i]] > 2) {
        if (frequentNumbers.indexOf(downloads[i]) === -1) {
        frequentNumbers.push(downloads[i]);
        }
      }
    }
  }
console.log(frequentNumbers);
    setTotal(frequentNumbers);
  };

  const findFrequentNumbers2 = () => {
    const frequencyMap = {};
    const frequentNumbers = [];

    for (let i = 0; i < downloads.length; i++) {
       if (!frequencyMap[downloads[i]]) {
        frequencyMap[downloads[i]] = 1;
      } else {
        frequencyMap[downloads[i]]++;
 
/* frequencyMap[downloads[i]] = (frequencyMap[downloads[i]] || 0 ) */
      if (frequencyMap[downloads[i]] > 3) {
        if (frequentNumbers.indexOf(downloads[i]) === -1) {
        frequentNumbers.push(downloads[i]);
        }
      }
    }
  }
console.log(frequentNumbers);
    setTotal2(frequentNumbers);
  };


  const [total, setTotal] = useState([]);
  const [total2, setTotal2] = useState([]);

 

  // to calculate the capital

  //first receiving and storing the capital entered
  function cC(event) {
    setCal(event.target.value);
  }

  //calculating first stake
  function calculateCapital() {
    const label = Math.round(cal / 3);
    setFirstStake(Math.floor(label * 0.0167));
    setSecondStake(Math.floor(label * 0.0667));
    setThirdStake(Math.floor(label * 0.2167));
    setFourthStake(Math.floor(label * 0.6667));
    setLabels(label);
  }

  function logout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="header">
        <div className="logout" onClick={logout}>
          <p>logout?</p>
        </div>{" "}
        <div className="ifrme">
          {" "}
          <h1>
            Win Consistently On{" "}
            <span className="ja">
              49<span className="j">ja</span>{" "}
            </span>
            !!!{" "}
          </h1>
          <marquee behavior="scroll" direction="left" className="my-number">
            <h2>Contact On Whatsapp +2348101530401</h2>
          </marquee>
        </div>
      </div>

      <div className="mainbody3">
        <div className="mainbody4">
          <div className="body5">
            <div className="mainbody1-2">
              Last Draw : &nbsp;&nbsp;&nbsp;&nbsp;
            </div>{" "}
            <div className="draw">
              {/*  {instructions2} */}
              {firstElement}
            </div>
            <div className="body6">
              {firstSixElement.map((go, index) => {
                let style;
                if (
                  go === "1" ||
                  go === "4" ||
                  go === "7" ||
                  go === "10" ||
                  go === "13" ||
                  go === "16" ||
                  go === "19" ||
                  go === "22" ||
                  go === "25" ||
                  go === "28" ||
                  go === "31" ||
                  go === "34" ||
                  go === "37" ||
                  go === "40" ||
                  go === "43" ||
                  go === "46"
                ) {
                  style = {
                    backgroundColor: "red",
                  };
                } else if (
                  go === "2" ||
                  go === "5" ||
                  go === "8" ||
                  go === "11" ||
                  go === "14" ||
                  go === "17" ||
                  go === "20" ||
                  go === "23" ||
                  go === "26" ||
                  go === "29" ||
                  go === "32" ||
                  go === "35" ||
                  go === "38" ||
                  go === "41" ||
                  go === "44" ||
                  go === "47"
                ) {
                  style = {
                    backgroundColor: "blue",
                  };
                } else if (
                  go === "3" ||
                  go === "6" ||
                  go === "9" ||
                  go === "12" ||
                  go === "15" ||
                  go === "18" ||
                  go === "21" ||
                  go === "24" ||
                  go === "27" ||
                  go === "30" ||
                  go === "33" ||
                  go === "36" ||
                  go === "39" ||
                  go === "42" ||
                  go === "45" ||
                  go === "48"
                ) {
                  style = {
                    backgroundColor: "green",
                  };
                } else if (go === "49") {
                  style = {
                    backgroundColor: "#c9d916",
                    color: "black",
                  };
                }
                return (
                  <div className="mainbody7" style={style} key={index}>
                    {go}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mainbody4">
          <div className="body5">
            <div className="mainbody1-2">
              Upcoming Draw : &nbsp;&nbsp;&nbsp;&nbsp;
            </div>{" "}
            <div className="draw">
              {downloads2.length < 2 ? null : nextElement}
            </div>
          </div>
        </div>
        <button className="mainbody5" onClick={getDownloads}>
          Click To Start
        </button>
        <div className="mainbody1">
          {" "}
          <div className="instructions2">
            <div className="instructions3">{go()}</div>
            <div className="instructions4">
            {total2.map((go, index) => {
                console.log(go)
                let style;
                if (
                  go === "1" ||
                  go === "4" ||
                  go === "7" ||
                  go === "10" ||
                  go === "13" ||
                  go === "16" ||
                  go === "19" ||
                  go === "22" ||
                  go === "25" ||
                  go === "28" ||
                  go === "31" ||
                  go === "34" ||
                  go === "37" ||
                  go === "40" ||
                  go === "43" ||
                  go === "46"
                ) {
                  style = {
                    backgroundColor: "red",
                  };
                } else if (
                  go === "2" ||
                  go === "5" ||
                  go === "8" ||
                  go === "11" ||
                  go === "14" ||
                  go === "17" ||
                  go === "20" ||
                  go === "23" ||
                  go === "26" ||
                  go === "29" ||
                  go === "32" ||
                  go === "35" ||
                  go === "38" ||
                  go === "41" ||
                  go === "44" ||
                  go === "47"
                ) {
                  style = {
                    backgroundColor: "blue",
                  };
                } else if (
                  go === "3" ||
                  go === "6" ||
                  go === "9" ||
                  go === "12" ||
                  go === "15" ||
                  go === "18" ||
                  go === "21" ||
                  go === "24" ||
                  go === "27" ||
                  go === "30" ||
                  go === "33" ||
                  go === "36" ||
                  go === "39" ||
                  go === "42" ||
                  go === "45" ||
                  go === "48"
                ) {
                  style = {
                    backgroundColor: "green",
                  };
                } else if (go === "49") {
                  style = {
                    backgroundColor: "#c9d916",
                    color: "black",
                  };
                }

                return (
                  <p className="mainbody2" style={style} key={index}>
                    {go}
                  </p>
                );
              })}
             
            </div>
            <div className="instructions"> {instructions}</div>
          </div>
          <div>
            
          </div>
          <h3>
            <div className="draw">
              {/* {instructions2} {show2 === true? <h3>None, wait for Next</h3>: null} */}
            </div>
          </h3>
        </div>
        <div  className="instructions4">
        {total.map((go, index) => {
                console.log(go)
                let style;
                if (
                  go === "1" ||
                  go === "4" ||
                  go === "7" ||
                  go === "10" ||
                  go === "13" ||
                  go === "16" ||
                  go === "19" ||
                  go === "22" ||
                  go === "25" ||
                  go === "28" ||
                  go === "31" ||
                  go === "34" ||
                  go === "37" ||
                  go === "40" ||
                  go === "43" ||
                  go === "46"
                ) {
                  style = {
                    backgroundColor: "red",
                  };
                } else if (
                  go === "2" ||
                  go === "5" ||
                  go === "8" ||
                  go === "11" ||
                  go === "14" ||
                  go === "17" ||
                  go === "20" ||
                  go === "23" ||
                  go === "26" ||
                  go === "29" ||
                  go === "32" ||
                  go === "35" ||
                  go === "38" ||
                  go === "41" ||
                  go === "44" ||
                  go === "47"
                ) {
                  style = {
                    backgroundColor: "blue",
                  };
                } else if (
                  go === "3" ||
                  go === "6" ||
                  go === "9" ||
                  go === "12" ||
                  go === "15" ||
                  go === "18" ||
                  go === "21" ||
                  go === "24" ||
                  go === "27" ||
                  go === "30" ||
                  go === "33" ||
                  go === "36" ||
                  go === "39" ||
                  go === "42" ||
                  go === "45" ||
                  go === "48"
                ) {
                  style = {
                    backgroundColor: "green",
                  };
                } else if (go === "49") {
                  style = {
                    backgroundColor: "#c9d916",
                    color: "black",
                  };
                }

                return (
                  <p className="mainbody2" style={style} key={index}>
                    {go}
                  </p>
                );
              })}
        </div>
      </div>

      <div className="main">
        {" "}
        <h1>CAPITAL</h1>
        <div className="inputBox inputBoxs">
          {" "}
          <div>
            {" "}
            <button className="button calculate" onClick={calculateCapital}>
              Calculate
            </button>
          </div>
          <input
            type="text"
            required="required"
            className="input capital"
            onChange={cC}
          />{" "}
          <span>enter your capital</span>{" "}
        </div>
        <div className="percentage">
          <b> Involved:</b> <span className="design"> {labels}</span> <br />{" "}
          <br />
          First : <span className="design">{firstStake}</span> <br />
          Second : <span className="design"> {secondStake}</span> <br />
          Third : <span className="design"> {thirdStake}</span> <br />
          Fourth : <span className="design"> {fourthStake}</span> <br />
        </div>
      </div>

      <div className="footer">&copy; All Rights Reserved</div>
    </div>
  );
}

export default Home;
