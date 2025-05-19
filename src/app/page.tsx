"use client";
import { Passero_One } from "next/font/google";
import { Sidebar } from "./components/sidebar";
import { useGetFeaturedGames } from "./hooks/getFeaturedGames";
import { GameCard } from "./components/card";
import Link from "next/link";

const passeroOne = Passero_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  const { data, isLoading } = useGetFeaturedGames();
  console.log(data, "data >>>>");

  if (isLoading) {
    return (
      <div className="grid grid-cols-12 gap-2 px-2">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 gap-2 px-2">
      <div className="col-span-3">
        <Link href="/">
          <h1 className={`${passeroOne.className} text-5xl`}>Jogoteca</h1>
        </Link>
        <Sidebar />
      </div>
      <main className="col-span-9 grid-cols-subgrid grid gap-6">
        <h1 className="col-span-12">Hello World!</h1>
        {data.results.map(
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
      </main>
    </div>
  );
}
