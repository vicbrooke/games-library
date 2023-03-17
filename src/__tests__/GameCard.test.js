import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // import MemoryRouter
import { FavouritesProvider } from "../Components/FavouritesProvider";
import { GameCard } from "../Components/GameCard";

describe("GameCard renders", () => {
  const game = {
    developer: "Blizzard Entertainment",
    freetogame_profile_url: "https://www.freetogame.com/overwatch-2",
    game_url: "https://www.freetogame.com/open/overwatch-2",
    genre: "Shooter",
    id: 540,
    platform: "PC (Windows)",
    publisher: "Activision Blizzard",
    release_date: "2022-10-04",
    short_description:
      "A hero-focused first-person team shooter from Blizzard Entertainment.",
    thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
    title: "Overwatch 2",
  };

  it("should render a GameCard component", () => {
    render(
      <MemoryRouter>
        <FavouritesProvider>
          <GameCard game={game} />
        </FavouritesProvider>
      </MemoryRouter>
    );

    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
  });
});
