"use client";
import { useGetFeaturedGames } from "./hooks/getFeaturedGames";
import { SearchBar } from "./components/searchBar";
import { GameCard } from "./components/card";

export default function Home() {
  const { data, isLoading } = useGetFeaturedGames();

  if (isLoading) {
    return (
      <div className="grid grid-cols-12 gap-2 px-2">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <>
      <div className="col-span-12"><SearchBar /></div>
        {data?.results?.map(
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
        )}
    </>
  );
}
