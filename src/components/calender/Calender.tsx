import Calendar from 'react-calendar';
import { useState } from 'react';
import "./Calender.css"

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calender= () => {
    const [value, onChange] = useState<Value>(new Date());
    console.log(value);
    return(
        <>
            <Calendar onChange={onChange} value={value} />
        </>
    )
}

export default Calender