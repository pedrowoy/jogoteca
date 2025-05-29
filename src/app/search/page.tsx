import { SearchBar } from "../components/searchBar";
import { GameCard } from "../components/card";

export default function SearchResult() {
    return(
      <>
            <div className="col-span-12"><SearchBar /></div>
            {/* {data?.results?.map(
            (game: {
                id: string;
                background_image: string;
                name: string;
                genres: { name: string }[];
                metacritic: string;
            }) => (
                <div className="col-span-2 grid" key={game.id}>
                <GameCard
                    image={game.background_image}
                    name={game.name}
                    genre={game.genres?.map((genre) => genre.name).join(", ")}
                    metacritic={game.metacritic}
                />
                </div>
            )
            )} */}
        </>
    );
}