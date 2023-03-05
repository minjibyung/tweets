import { useState, useRef } from "react"
import { ContainerTweet } from "./components/ContainerTweet/ContainerTweet"
import { Tweet } from "./components/Tweet/Tweet";

let tweets = [];

function App() {

const TA = useRef();
const [message, setMessage] = useState("Aquí verás tu Tweet actual");
const [counter, setCounter] = useState(255);
const [styleCounter, setStyleCounter] = useState("counter");
const [tweetList, setTweetList] = useState([]);

const getMessage = () => {
setMessage(TA.current.value);
setCounter(255 - TA.current.value.length);
if (TA.current.value.length > 255) {
    setStyleCounter("counter-limit");
    alert("solo son 255 caracteres")
  } else {
    setStyleCounter("counter");
  }
};


const handleSendTweet = () => {
const newTweet = { message };
tweets.push(newTweet);
setTweetList([...tweetList, newTweet]);
setMessage("");
setCounter(255);
TA.current.value = '';
};

const handleArchiveTweet = (tweets) => {
const updatedTweets = tweetList.filter((t) => t !== tweets);
setTweetList(updatedTweets);
tweets = updatedTweets;
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
/>
}
/>
   <h3>Aquí se verán tus tweets archivados</h3>
   {tweetList.length > 0 ? (
    tweetList.map((tweets) => (
      <div key={tweets.message}>
       <p>{tweets.message}</p>
  </div>
))
) : (
    <p>No hay tweets archivados</p>
)}
  </div>
  )
}

export default App