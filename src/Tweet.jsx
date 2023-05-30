import React from "react";

function Tweet({ id, name, content, like, onDelete }) {

    function onLike() {
        console.log({ like });
    }

    return (
        <div className="tweet">
            <button onClick={() => onDelete(id)} className="delete">🧨</button>
            <h2>{name}</h2>
            <p>{content}</p>
            <button onClick={onLike}>{like}❤️</button>
        </div>
    )
}
export default Tweet;