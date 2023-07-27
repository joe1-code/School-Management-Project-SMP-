import React from "react";
import { Card } from "@mui/material";
import TextField from '@mui/material/TextField';
import Link from "@mui/material/Link";
import SchoolIcon from '@mui/icons-material/School';
import pic from "./class.png";
import "./classes.css";

function Classes(){

    const cardData = [
        {
            "title":"registered class",
            "classform":"form One"
        },
        {
            "title":"registered class",
            "classform":"form Two"
        },
        {
            "title":"registered class",
            "classform":"form Three"
        },
        {
            "title":"registered class",
            "classform":"form Four"
        }
        

        
    ]


    return(
        <div id="class-container">
            <h3 id="title">Registered Class</h3>
         <div id="card-div"> 
            {cardData.map((card, index)=>(
                
                <Card id="class-card" key={index}>
                    {/* <img src={pic} id="avt"/> */}
                 <SchoolIcon/>
                 <span>{card.classform}</span>
                </Card>
            ))}
         </div>
           
        </div>
    )
}

export default Classes;