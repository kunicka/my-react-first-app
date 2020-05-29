import React from "react";

function DaysOfInternCounting() {
    var internStart = new Date("May 24, 2020 00:59:59");
    var today = new Date();
    var todayDay = today.getDay();
    var diff = today.getTime() - internStart.getTime();
    var diffDays = Math.floor(diff/(1000*60*60*24));
    let todayDayPL;

    switch(todayDay) {
        case 1: todayDayPL = "Poniedziałek";
        break;
        case 2: todayDayPL = "Wtorek";
        break;
        case 3: todayDayPL = "Środa";
        break;
        case 4: todayDayPL = "Czwartek";
        break;
        case 5: todayDayPL = "Piątek";
        break;
        case 6: todayDayPL = "Sobota";
        break;
        default: todayDayPL = "Niedziela";
    }



    return (
        <div className="intern-days">
            <h1>Dzień Dobry Programistko!!
            </h1>
           
            <h3>Dziś jest {todayDayPL}. </h3> <h3>To Twój {diffDays} dzień Stażu programowania </h3>
        </div>

    )
}
export default DaysOfInternCounting