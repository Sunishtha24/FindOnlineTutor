import React, { useState, useEffect } from 'react';
import Studnav from "../components/studnav";
import axios from 'axios'
import "../pages/scat.css";

function Cplus(){
    const [books, setBooks] = useState([]);
      
    useEffect(() => {
    axios.get("http://localhost:3001/cp")
        .then((res)=>{
            setBooks(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, []);
  
    // console.log(books);
    return(
        <div>
            <Studnav/>
            {/* <h1>English Teachers:</h1> */}
            <div className="books">
                {books.map((teacher) => (
                <div key={teacher.id} className="book">
                    <img src="profile.png" className="pr"/>
                    <center><div className="name">Professor {teacher.Username}</div></center>
                    <button className='enr'>Enroll</button>
                </div>
                ))}
            </div>
            
        </div>
    );
}

export default Cplus;