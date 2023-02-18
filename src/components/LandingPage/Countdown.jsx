import React, { useState, useEffect } from "react";

function Countdown() {
  const [countdownDate, setCountdownDate] = useState(
    new Date("03/04/2023").getTime()
  );

  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    console.log(minutes);
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60));
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
        console.log(minutes);
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }
  };

  return (
    <div className="grid grid-flow-col gap-3 text-center auto-cols-max items:center countdown-container">
      <div className="flex flex-col p-3 bg-neutral rounded-box text-warning">
        <span className="countdown font-mono text-xl lg:text-6xl">
          <span style={{ "--value": days }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-3 bg-neutral rounded-box text-warning">
        <span className="countdown font-mono text-xl lg:text-6xl">
          <span style={{ "--value": minutes }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-3 bg-neutral rounded-box text-warning">
        <span className="countdown font-mono text-xl lg:text-6xl">
          <span style={{ "--value": hours }}></span>
        </span>
        mins
      </div>
      <div className="flex flex-col p-3 bg-neutral rounded-box text-warning">
        <span className="countdown font-mono text-xl lg:text-6xl">
          <span style={{ "--value": seconds }}></span>
        </span>
        secs
      </div>
    </div>
  );
}

export default Countdown;
