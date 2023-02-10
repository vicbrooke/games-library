import { useEffect, useState } from 'react';
import './_App.scss';
import {Card} from "react-bootstrap"

function App() {
  const [games, setGames] = useState([])

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
    .then(data => setGames(data))
  },[])

  return (
    <div className="App"> 
    {console.log(games)}
    <div className="card-container">
      {games.map(game => {
        return (<Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{game.title}</Card.Title>
          <Card.Img src={game.thumbnail} alt="Card image cap"/>
          <Card.Text>{game.short_description}</Card.Text>
          <div className="tags">
          <Card.Text>{game.platform}</Card.Text>
          <Card.Text>{game.genre}</Card.Text>
          </div>
        </Card.Body>
      </Card>)})}
    </div>
    </div>
  );
}

export default App;
