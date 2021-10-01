import React from "react";

const DAYS = ['L','M','X','J','V','S','D'];
export default function DaysOfWeek(props) {
    const daysofweek = props.daysofweek;
    const listDays = daysofweek.map((day)   => 
         <span  style={{marginLeft: '2px'}}>{DAYS[day]}</span>
    );
    return (
        <div className="item">{listDays}</div>
    );
}
