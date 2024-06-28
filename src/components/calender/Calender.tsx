"use client"
import React, { useState, useEffect } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import './Calender.css'; 

type ValuePiece = Date | null;
type Value = ValuePiece;

const Calender = () => {
    const [value, setValue] = useState<Value>(new Date());

    //to log the current date by default, value dependency automatically changes itself using useEffect
    useEffect(() => {
        if (value instanceof Date) {
            const day = value.getDate();
            const month = value.getMonth() + 1; // getMonth() is zero-based
            const year = value.getFullYear();
            console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        }
    }, [value]);

    //to log the date when user clicks on any date
    const handleDateChange: CalendarProps['onChange'] = (date) => {
        if (date instanceof Date) {
            setValue(date);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
        }
    };

    return (
        <Calendar onChange={handleDateChange} value={value} />
    );
}

export default Calender;
