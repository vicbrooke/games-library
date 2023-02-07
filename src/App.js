
import { useEffect } from 'react';
import './App.css';

function App() {

  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ed0f6ccb7bmsh9200f9766b62019p106265jsnd28ce46f0cb9',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };


  useEffect(()=>{
    fetch(url, options)
    // fetch(`https://www.freetogame.com/api/games?platform=pc`,{
    //   mode: "cors",
    //   headers: {"Access-Control-Allow-Origin": "*"}

    // })
    .then(res => res.json())
    .then(data => console.log(data))
  })

  return (
    <div className="App">
    </div>
  );
}

export default App;
