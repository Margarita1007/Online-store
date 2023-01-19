import React from "react";
import Navigation from "../Navigation/Navigation";
import './about.css';
import imgAbout from "../../../assets/img/card16.jpg";

const About: React.FC = () => {
    return (
        <>
            <Navigation/>
            <div className="about_wrapper">
                <div className="about_img">
                    <img src={imgAbout}></img>
                </div>
                <div className="about_text_block">
                    <h1>Our story</h1>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, 
                    delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. 
                    Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt 
                    sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi 
                    modi porro eaque in libero minus unde sapiente consectetur architecto. 
                    Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. 
                    Ex, voluptate accusamus nesciunt totam vitae esse iste.
                    </p>
                </div>
            </div>
        </>

    )
}

export default About;