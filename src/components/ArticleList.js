import React from "react";
import Article from "./Article";
const ArticleList = ({posts}) => {
    let articlesArray = posts.map((post, index) => {
        return (
        <Article key = {index} title = {post.title} date = {post.date} preview = {post.preview} minutes = {post.minutes}/>
    )});
    return (
        <main>
             {articlesArray}   
        </main>
    )
}
export default ArticleList;