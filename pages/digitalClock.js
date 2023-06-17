import { useEffect, useState } from "react";
import "../styles/digitalClock.css";

function DigitalClock() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
    ampm: "AM",
    hhOffset: 0,
    mmOffset: 0,
    ssOffset: 0,
    hhRotation: 0,
    mmRotation: 0,
    ssRotation: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const h = date.getHours();
      const m = date.getMinutes();
      const s = date.getSeconds();
      const ap = h >= 12 ? "PM" : "AM";

      const hours = h > 12 ? h - 12 : h;
      const minutes = m < 10 ? "0" + m : m;
      const seconds = s < 10 ? "0" + s : s;

      setTime({
        hours: hours < 10 ? "0" + hours : hours,
        minutes,
        seconds,
        ampm: ap,
        hhOffset: 440 - (440 * hours) / 12,
        mmOffset: 440 - (440 * m) / 60,
        ssOffset: 440 - (440 * s) / 60,
        hhRotation: hours * 30,
        mmRotation: m * 6,
        ssRotation: s * 6,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="time">
      {/* Hours */}
      <div className="circle" style={{ "--clr": "#ff2972" }}>
        <div className="dots" style={{ transform: `rotate(${time.hhRotation}deg)` }}></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" style={{ strokeDashoffset: time.hhOffset }}></circle>
        </svg>
        <div id="hours">
          {time.hours}
          <br />
          <span>Hours</span>
        </div>
      </div>

      {/* Minutes */}
      <div className="circle" style={{ "--clr": "#fee800" }}>
        <div className="dots" style={{ transform: `rotate(${time.mmRotation}deg)` }}></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" style={{ strokeDashoffset: time.mmOffset }}></circle>
        </svg>
        <div id="minutes">
          {time.minutes}
          <br />
          <span>Minutes</span>
        </div>
      </div>

      {/* Seconds */}
      <div className="circle" style={{ "--clr": "#04fc43" }}>
        <div className="dots" style={{ transform: `rotate(${time.ssRotation}deg)` }}></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" style={{ strokeDashoffset: time.ssOffset }}></circle>
        </svg>
        <div id="seconds">
          {time.seconds}
          <br />
          <span>Seconds</span>
        </div>
      </div>

      {/* AM/PM */}
      <div className="ap">
        <div id="ampm">{time.ampm}</div>
      </div>
    </div>
  );
}

export default DigitalClock;