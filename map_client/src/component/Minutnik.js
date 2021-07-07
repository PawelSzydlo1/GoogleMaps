import React, { useState, useEffect } from "react";
import { InfoModal } from "./InfoModal";
import "./component.css";
export function Minutnik({ setYourOrder }) {
  const [defaultTime, setDefaultTime] = useState(300000);
  const [minutes, setMinutes] = useState(Math.floor(defaultTime / 60 / 1000));
  const [seconds, setSeconds] = useState(
    (defaultTime - minutes * 60 * 1000) / 1000
  );
  const [statusOrder, setStatusOrder] = useState(false);
  const decrement = () => {
    setTimeout(() => {
      setDefaultTime(defaultTime - 1000);
    }, 1000);
  };

  useEffect(() => {
    if (defaultTime >= 0) {
      decrement();
      setMinutes(Math.floor(defaultTime / 60 / 1000));
      setSeconds(
        (defaultTime - Math.floor(defaultTime / 60 / 1000) * 60 * 1000) / 1000
      );
    } else {
      setStatusOrder(true);
    }
  }, [defaultTime]);

  return (
    <div className="minutnikDiv">
      <div>
        <p className=" mx-3 my-1 px-2">
          {minutes}:{seconds}
        </p>
      </div>

      {statusOrder ? (
        <div>
          <InfoModal setYourOrder={setYourOrder} />
          <button
            type="button"
            class=" btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Pay for the order
          </button>
        </div>
      ) : null}
    </div>
  );
}
