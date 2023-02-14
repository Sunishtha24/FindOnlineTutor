import React from "react";
import Navbar from "../components/navbar";
import "../pages/home.css";

function Home(){
    return(
        <div>
            <Navbar/>
            <div className="wlcm">Welcome to Find Online Tutor!</div>
            <div className="boxf">
                <div className="inf">
                    <center><b>Don't let geography or schedule <br/> limit your learning potential.<br/> With Find Online Tutor,<br/> you can learn anywhere, anytime.<br/> Let's get started!</b></center>

                </div>
                <span className="compic">
                    <img src="../compic.png" />
                </span>
            </div>
            <div className="boxs">
                <div className="about"><center>About Us</center></div>
                <p className="p1">
                    Finding a reliable and effective online tutor has never been easier.<br/> We are an online platform that connects students with 
                    qualified and <br/>experienced tutors from all over the world. Our goal is to make learning<br/> accessible, convenient, and enjoyable 
                    for everyone.
                </p>
                <p className="p2">
                    Our platform offers a wide range of subjects, including Math, Science,<br/> English, Hindi, and many more. Whether you are 
                    looking to improve your <br/>grades, prepare for an exam, or learn a new skill, we have the right tutor for you.
                </p>
                <p className="p1">
                    Our tutors are carefully selected and trained to provide personalized<br/> attention and effective guidance. They are available 24/7 
                    to answer your<br/> questions and help you reach your goals. All of our tutors use our state-of-the-art<br/> virtual learning environment, 
                    which includes features such as video<br/> conferencing, interactive whiteboards, and more.
                </p>
                <p className="p2">
                    Join the thousands of students who have already improved their grades, <br/>confidence, and knowledge with our platform. Sign up now and 
                    start learning<br/> with one of our expert tutors.
                </p>
            </div>
        </div>
    );
}

export default Home;