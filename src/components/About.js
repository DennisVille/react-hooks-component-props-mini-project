import React from "react";
const About = (props) => {
    let {image = "https://via.placeholder.com/215Links to an external site.", about}= props;
    return(
        <aside>
            <img src = {image} alt = "blog logo"/>
            <p>{about}</p>
        </aside>
    )
} 
export default About;