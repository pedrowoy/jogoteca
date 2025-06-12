"use client";
import { SearchBar } from "../components/searchBar";
import { GameCard } from "../components/card";
import { useSearchParams } from "next/navigation";
import { useSearch } from "../hooks/useSearch";
import { useEffect } from "react";

export default function SearchResult() {
  const searchParams = useSearchParams();
  const params = searchParams.get("game");

  const { mutate, data } = useSearch();

useEffect(() => {
    if (params) {
        mutate(params)
    }
}, [mutate, params]);

  return (
    <>
      <div className="col-span-full">
        <SearchBar />
      </div>
      <div className="col-span-full"><h2>Você buscou por: {params} </h2></div>
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
