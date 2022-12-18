import React, { useState } from "react";
import users from "../users.json";
import App from "../App.css";

const UserBox = () => {
    //console.log(users);

    const random = Math.floor(Math.random() * users.length);
    const [index, setIndex] = useState(random);
    // const index = 1;

    const changeUser = () => {
        const newRandom = Math.floor(Math.random() * users.length);
        setIndex(newRandom);
    };

    const colors = [
        "#845EC2",
        "#D65DB1",
        "#FF6F91",
        "#FF9671",
        "#FFC75F",
        "#F9F871"
    ];
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`;

    return (
        
        <div className="user-box" style={{ color: colors[randomColor] }}>
            <div className="Container-title">
                <h1>
                    {users[index].name.title} {users[index].name.first}{" "}
                    {users[index].name.last}
                </h1>
            </div>
            <div className="Container-img">
                <img src={users[index].picture.large} alt="" />
            </div>
            <div className="Container-Data">
                <ul className="list">
                    
                    <li>
                        <i className="fa-solid fa-envelope"></i>
                        {users[index].email}
                    </li>
                    
                    
                    <li>
                        <i className="fa-solid fa-phone"></i>
                        {users[index].phone}
                    </li>
                    
                    
                    <li>
                        <i className="fa-solid fa-location-dot"></i>
                        {users[index].location.country} {users[index].location.state}{" "}
                        {users[index].location.city}
                    </li>
                
                </ul>
            </div>
            <div className="Container-Botton">
                <button onClick={changeUser}>
                    <i className="fa-solid fa-shuffle"></i>
                </button>
            </div>
        </div>
    );

};

export default UserBox;
