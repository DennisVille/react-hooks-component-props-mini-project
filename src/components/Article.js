import React from "react";
const Article = ({index, title,date = "January 1, 1970",preview}) =>{
    return (
        <article key = {index}>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}
export default Article;