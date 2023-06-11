import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/").then(res => res.json()).then(data => {
      setNewsList(data.results)
      console.log(data)
    })
  }, [])

  return (
    <div className="App">
      <div className="title">
        <h1>Space News</h1>
      </div>
      <div className="newsContainer">
        {newsList.map((news, key) => {
          return (
          <div key={key} className='article' onClick={() => {window.location.href = news.url}}>
            <h3>{news.title}</h3>
            <img src={news.image_url} />
            <p>{news.summary}</p>
            <h4>{news.published_at}</h4>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
