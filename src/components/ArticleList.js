import React from "react";
import Article from "./Article";
const ArticleList = (props) => {
    let {postsArray} = props;
    let articlesArray = postsArray.map((post, index) => {
        return (
        <Article key = {index} title = {post.title} date = {post.date} preview = {post.preview}/>
    )});
    return (
        <main>
             {articlesArray}   
        </main>
    )
}
export default ArticleList;