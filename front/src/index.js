import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// const getResponse = async(url) =>{
//     const res = await fetch(url);
//     const body = await res.json();
//     // return body;
//     if(!res.ok){
//         throw new Error(`Not found ${res.url}`)
//     } 
//         return body;
// }

// getResponse('https://swapi.co/api/people/123/')
// .then((body)=>{
//     console.log(body)
//     })
    
//     .catch((err)=>{
//     console.error('can not get any response', err)
//     })