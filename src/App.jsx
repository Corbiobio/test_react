import React, { useState } from "react";
import Tweet from "./Tweet"

const tweet_content = [{
    id: 0,
    like: "5",
    content: "j'aime le chocolat",
    name: "jean"
}, {
    id: 1,
    like: "15",
    content: "j'aime le pain",
    name: "pate"
}, {
    id: 2,
    like: "55",
    content: "j'aime le sucre",
    name: "pote"
}, {
    id: 3,
    like: "51",
    content: "j'aime le bleu",
    name: "samir"
},
]
function App() {
    let [tweets, setTweets] = useState(tweet_content)

    function onDelete(tweet_id) {
        setTweets((curr) => curr.filter((tweets) => tweet_id !== tweets.id))
    }

    const submit_form = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const content = event.target.content.value

        const new_tweet = {
            id: tweets[tweets.length - 1]?.id + 1 ?? 0,
            like: 0,
            content: content,
            name: name
        }
        console.log(new_tweet);

        setTweets([...tweets, new_tweet])
    }

    return (
        <div>
            <form onSubmit={submit_form} action="post">
                <h2>new tweet</h2>
                <input type="text" placeholder="name" name="name" />
                <input type="text" placeholder="content" name="content" />
                <input type="submit" />
            </form>
            <div className="tweet_container">

                {tweets.map(tweet => {
                    return (
                        <Tweet key={tweet.id}
                            id={tweet.id}
                            like={tweet.like}
                            content={tweet.content}
                            name={tweet.name}
                            onDelete={(id) => {
                                onDelete(id)
                            }}
                        />
                    )
                })}
            </div>

        </div>
    )
}
export default App;