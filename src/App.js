import './App.css';
import { useEffect, useState } from 'react';
import News from './News';

function App() {
  
  let[articles,setArticles]= useState([]);
  let[category,setCategory]= useState("india");

  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=${category}&from=2024-10-15&apiKey=c06a0d1455224c73b8a1d9427031174b')
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles);
    })
    .catch((err)=>{
      console.log(err);
    })
   },[category])
  

  
  return (
    <div className="App">
      
      <header className='header'>
        <h1>Parso Tak</h1>

        <input type='text' onChange= {(event)=>{
          if(event.target.value!=="")
          {
          setCategory(event.target.value);
          }
          else{
            setCategory("india")
          }
        }} placeholder='Search News' />

      </header>

    <section className='news-articles'>
      {
        articles.map((article)=>{
          return(
           <News article={article}/>
          )
        })
      }


      </section>

    </div>
  );
}

export default App;
