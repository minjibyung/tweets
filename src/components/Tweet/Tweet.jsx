import React from 'react';
import './tweet.css';

export const Tweet = ({ styleCounter, counter, eventMessage, eventArea, eventTweet, eventFile, eventList, refTextArea  }) => {

  return (
    <>
    <h3>Publica tu tweet</h3>
    <hr />
    <textarea 
      placeholder='Escribe un tweet(max 255 caracteres)'
      cols="30"
      rows="10"
      ref = { refTextArea }
      onChange = { eventMessage }      
    />
    <div className="buttons">
      <button onClick={eventTweet} className='btn-tweet'>Publicar</button>
      <button onClick={eventList} className='btn-tweet'>Mostrar Tweets</button>
    </div>
    <p className= {styleCounter}>{counter}</p>
    <span>{ eventArea }</span>    
    </>
  )
}
