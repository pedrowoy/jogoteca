import { useQuery } from "@tanstack/react-query";

const fetchFeaturedGames = async () => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&ordering=-metacritic&page_size=20`
  );

  if (response.status !== 200) {
    return "Ops! Algo deu errado."
  };

  const data = await response.json();
  return data;
};

export const useGetFeaturedGames = () => {
  return useQuery({
    queryKey: ["useGetFeatured"],
    queryFn: fetchFeaturedGames,
  });
};
