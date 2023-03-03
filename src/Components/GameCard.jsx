import {useContext} from 'react'
import {Card} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import { FavouritesContext } from './FavouritesProvider'
import {ReactComponent as AddStar} from '../images/AddStar.svg'
import { ReactComponent as RemoveStar } from '../images/RemoveStar.svg'
import "../styles/_GameCard.scss"

export const GameCard = ({game}) => {
    const navigate = useNavigate()

    const { favourites, addFavourite, removeFavourite } =
    useContext(FavouritesContext);

    return (
        <Card data-testid="game-card" name={"card"} key={game.id} style={{ width: '18rem' }} onClick={()=> navigate(`/${game.id}`)}>
            <Card.Body>
            <Card.Title>{game.title}</Card.Title>
            <Card.Img src={game.thumbnail} alt="Card image cap"/>
            <Card.Text>{game.short_description}</Card.Text>
            <div className="tags">
            <Card.Text>{game.platform}</Card.Text>
            <Card.Text>{game.genre}</Card.Text>
            
                {favourites.includes(game.title) ? (
                    <div className="favourites-icon">
                    <RemoveStar onClick={(e) => {
                        e.stopPropagation()
                        removeFavourite(game.title)
                    }}/>
                    </div>
                ) : (
                    <div className="favourites-icon">
                    <AddStar onClick={(e) => {
                        e.stopPropagation()
                        addFavourite(game.title)
                    }}/>
                    </div>
                )}
            
            </div>
            </Card.Body>
        </Card>
    )
}