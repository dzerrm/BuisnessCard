import React from "react";

export default function MainContent(){
    return(
        <div>
            <h1 className="card--name">Alexander Novikov</h1>
            <p className="card--prof">Junior Front-end Developer</p>
            <p className="card--small-desc">Trying to do things</p>

            <div>
                <a href="mailto:novikov.alexander55@gmail.com"><button>Email</button></a>
                <a href="https://t.me/dzerrm"><button>Telegram</button></a>
            </div>

            <div className="content--alltext">

                <p className="content--section-name">About</p>
                <p className="content--text">Starting programmer without work expirience that is 
                making some projects and searching for job</p>

                <p className="content--section-name">Interests</p>
                <p className="content--text">
                    <ul>
                        <li>Game design</li>
                        <li>Roller skating</li>
                        <li>Tabletop games</li>
                        <li>Psychology</li>
                    </ul>
                </p>

            </div>
        </div>
    )
}