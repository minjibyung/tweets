import { useState, useRef } from "react"
import { ContainerTweet } from "./components/ContainerTweet/ContainerTweet"
import { Tweet } from "./components/Tweet/Tweet";

let tweets = [];

function App() {

const TA = useRef();
const [message, setMessage] = useState("Aquí verás tu Tweet actual")
const [counter, setCounter] = useState(255);
const [styleCounter, setStyleCounter] = useState("counter");
const [tweetList, setTweetList] = useState([]);

const getMessage = () => {
setMessage(TA.current.value)
setCounter(255 - TA.current.value.length);
// if (counter <= 0) {
// setStyleCounter("counter-red");
// } else {
// setStyleCounter("counter");
// }
}

const handleSendTweet = () => {
const newTweet = { message };
tweets.push(newTweet);
setTweetList([...tweetList, newTweet]);
setMessage("Tweet publicado");
setCounter(0);
TA.current.value = '';
}

const handleArchiveTweet = (tweet) => {
const index = tweetList.indexOf(tweet);
if (index !== -1) {
tweets.splice(index, 1);
setTweetList(tweets);
}
}

return (
<div className="App">
<h1>Generador De Tweets</h1>
<ContainerTweet
contain = {
<Tweet
eventTweet={handleSendTweet}
refTextArea={TA}
eventArea={message}
eventFile={handleArchiveTweet}
eventList={() => setTweetList(tweets)}
eventMessage={getMessage}
counter={counter}
styleCounter={styleCounter}
/>}
/>
<h3>Aquí se verán tus tweets archivados</h3>
{tweetList.length > 0 ? (
tweetList.map((tweet) => (
<div key={tweet.message}>
<p>{tweet.message}</p>
</div>
))
) : (
<p>No hay tweets archivados</p>
)}
</div>
)
}

export default App