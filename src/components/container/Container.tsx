"use client"
import React, { useState } from 'react';
import styles from './container.module.css';
import Calender from "../calender/Calender"
import Graph from "../graph/Graph"
import { SlCalender } from "react-icons/sl";
import { VscGraph } from "react-icons/vsc";
import { FaTableList } from "react-icons/fa6";

const Container: React.FC = () => {
  const [isCalenderVisible, setIsCalenderVisible] = useState(false);

  const toggleCalender = () => {
    setIsCalenderVisible(!isCalenderVisible);
  };

  return (
    <>
      <div className={`mx-auto w-80 mt-20 border border-white ${styles.container}`}>
        <div className="grid grid-cols-3">
          <button className={`${styles.button} hover:bg-gray-700 hover:text-white`}>
            Daily
          </button>
          <button className={`${styles.button} hover:bg-gray-700 hover:text-white`}>
            Monthly
          </button>
          <button className={`${styles.button} hover:bg-gray-700 hover:text-white`}>
            Yearly
          </button>
        </div>
        <SlCalender className={`${styles.calenderPopUp}`} onClick={toggleCalender} />
        <div className={`${styles.calender} ${isCalenderVisible ? styles.show : ''}`}>
          <Calender />
        </div>
        <Graph/>
        <div className="flex flex-row gap-0.5">
        <VscGraph className={`${styles.graphButton}`}/>
        <FaTableList className={`${styles.graphButton}`}/>
        </div>
 
      </div>
    </>
  );
};

export default Container;
