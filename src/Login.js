import React, { useEffect, useState } from "react";
import Axios from "axios";
import App from './App';
import RegisterForm from "./RegisterForm";
import {useNavigate, NavLink} from "react-router-dom";

function Login()
{
    const navigate = useNavigate();
    const [usname , Setusname] = useState("");
    const [passname , Setpassname] = useState("");

    const [userList , setulist] = useState([]);

    useEffect(() => {
        Axios.get("Required API Link").then((res) => {
            setulist(res.data);
        });
    } , []);

    const putdata = () => {
        let count=0;
          for(let i=0;i<userList.length;i++) {
            if(userList[i].username === usname)
            {
              if(userList[i].password === passname)
              {
                count=1;
              }
            }
            if(count===1){
              navigate("/App",{state: usname});
            }
            else
            {
              navigate("/Login");
            }
          };
      };

      <div className="outer">
        <div className="inner">
            <div className="upper">
                <div className="up"> Pass-Man </div>
            </div>
            <div className="nam">Login</div>
            <div className="nam1">Don't have an account? <NavLink to="/RegisterForm">Click here</NavLink></div>
            <input type="text" className="uname" placeholder="Enter Username" onChange={(event) => {
              Setusname(event.target.value);
            }}/>
            <input type="password" className="pass" placeholder="Enter Password" onChange={(event) => {
              Setpassname(event.target.value);
            }}/> 
            <button className="but" onClick={putdata}>Login</button>
        </div>
    </div>
};

export default Login;