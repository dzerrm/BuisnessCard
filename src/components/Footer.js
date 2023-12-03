import React from "react";
import github from "../img/github-logo.png";
import telegram from "../img/telegram-logo.png"

export default function Footer(){
    return(
        <div className="card--footer">
            <ul className="footer--logos">
                <li className="footer--link"> <a href="https://github.com/dzerrm"> <img src={github} alt="github profile link"/> </a> </li>
                <li className="footer--link"> <a href="https://t.me/dzerrm"> <img src={telegram} alt="telegram profile link"/> </a> </li>
            </ul>
        </div>
    )
}