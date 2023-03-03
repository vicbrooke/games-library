import { useContext, useEffect, useState } from "react"
import { Button, Carousel, ListGroup } from "react-bootstrap"
import { useParams } from "react-router-dom"
import "../styles/_Game.scss"
import {FavouritesContext} from '../Components/FavouritesProvider'


function Game(){
    const {id} = useParams()
    const [game,setGame] = useState({})
    useContext(FavouritesContext);
    const { favourites, addFavourite, removeFavourite } =
    useContext(FavouritesContext);

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': 'ed0f6ccb7bmsh9200f9766b62019p106265jsnd28ce46f0cb9',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    useEffect(()=>{
        fetch(url, options)
        .then(res => res.json())
        .then(res => setGame(res))
    },[])

    return (
        <div className="game">
            {game.minimum_system_requirements && <div className="game-container">
                <section className="title-container">
                    <div className="thumbnail">
                        <img src={game.thumbnail}/>
                        <ListGroup horizontal className="details">
                            <ListGroup.Item>Genre: {game.genre}</ListGroup.Item>
                            <ListGroup.Item>Platform: {game.platform}</ListGroup.Item>
                            <ListGroup.Item>Release: {game.release_date}</ListGroup.Item>
                            {/* <ListGroup.Item>Status: {game.status}</ListGroup.Item> */}
                        </ListGroup>
                    </div>
                    <div className="title-text">
                        <h1>{game.title}</h1>
                        <div>
                            <p>Developer: {game.developer}</p>
                            <p>Publisher: {game.publisher}</p>
                        </div>
                        <div>
                            {favourites.includes(game.title) ? (
          <Button variant="primary" onClick={() => removeFavourite(game.title)}>
            Remove from favourites
          </Button>
        ) : (
          <Button variant="primary" onClick={() => addFavourite(game.title)}>
            Add to favourites
          </Button>
        )}
                        </div>
                    </div>
                    
                </section>
                <p className="item">{game.description}</p>
                <Carousel className="w-100 item">
                    {game.screenshots.map(i => {
                        return(
                            <Carousel.Item key={i.id}>
                                <img src={i.image} className="w-100" /> 
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
                <ListGroup className="item">
                    <ListGroup.Item>Minimum System Requirements:</ListGroup.Item>
                    <ListGroup.Item>OS: {game.minimum_system_requirements.os}</ListGroup.Item>
                    <ListGroup.Item>Graphics: {game.minimum_system_requirements.graphics}</ListGroup.Item>
                    <ListGroup.Item>Processor: {game.minimum_system_requirements.processor}</ListGroup.Item>
                    <ListGroup.Item>Memory: {game.minimum_system_requirements.memory}</ListGroup.Item>
                    <ListGroup.Item>Storage: {game.minimum_system_requirements.storage}</ListGroup.Item>
                </ListGroup>
            </div>
            }
        </div>
    )
}

export default Game