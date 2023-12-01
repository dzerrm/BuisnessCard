import React from "react";
import gosling from "../img/gosling.jpg";
import Footer from "./Footer";
import MainContent from "./MainContent";

export default function Card(){
    return(
        <div className="card" alt="person's image">
            <img src={gosling}></img>
            <MainContent />
            <Footer />
        </div>
    )
}