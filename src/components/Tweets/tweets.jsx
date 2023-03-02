import React from 'react';
import './tweets.css';


export const Tweet = ({ styleCounter, counter, eventMessage, eventArea, eventTweet, eventFile, eventList, refTextArea  }) => {
return (
<>
<h2>Aqui publicas tus tweets</h2>
<hr />
<textarea 

placeholder='Comenta tus tweets'

cols="30"
rows="10"
ref = { refTextArea }
onChange = { eventMessage }      
/>
<div className="buttons">
<button onClick={eventTweet} className='btn-tweet'>Publicar</button>
<button onClick={eventFile} className='btn-tweet'>Archivar</button>
<button onClick={eventList} className='btn-tweet'>Mostrar Archivados</button>
</div>
<p className= {styleCounter}>{counter}</p>
<span>{ eventArea }</span>    
</>
)
}
