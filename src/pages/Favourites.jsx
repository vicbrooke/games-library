import {FavouritesContext} from '../Components/FavouritesProvider';
import {useContext, useEffect, useState} from 'react';
import {GameCard} from "../Components/GameCard";
import "../styles/_Favourites.scss"

export const Favourites = ({games}) => {
    const { favourites } = useContext(FavouritesContext);

    const [filteredList, setFilteredList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let tempList = [];
        games.forEach((game) => {
            if (favourites.includes(game.title)) {
                tempList.push(game);
            }
        });
        setFilteredList(tempList);
        setIsLoading(false);
    }, [favourites, games]);

    return (
       (
          <div data-testid="favourites" className="favourites-container" >
            <h1>Favourites</h1>
            <div className="card-container">

            {filteredList.map((game, index) => {return (<GameCard game={game} key={index}/>)})}
            </div>
          </div>
        )
      );
}