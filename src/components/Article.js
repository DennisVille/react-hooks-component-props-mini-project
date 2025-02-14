import React from "react";
const Article = ({index, title,date = "January 1, 1970",preview, minutes}) =>{
    let minutesFunc = function (mins){
        let emojiArray = [];
        if (mins < 30) {
            while(mins > 0){
                emojiArray.push('☕');
                mins -=5;
            }
        }else {
            emojiArray = ['🍱','🍱','🍱'];
            while (mins >30) {
                emojiArray.push('🍱');
                mins -= 10;
            }
        }
        return emojiArray;
    }
    let emojis = minutesFunc(minutes);
    console.log(emojis);
    return (
        <article key = {index}>
            <h3>{title}</h3>
            <div><small>{date}</small><span>{emojis} {minutes} minutes read</span></div>
            <p>{preview}</p>
        </article>
    )
}
export default Article;