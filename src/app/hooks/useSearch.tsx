import { useMutation } from "@tanstack/react-query";

const fetchSearch = async (term: string) => {
    const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&search=${term}&search_precise=true&search_exact=true`);

    if (response.status !== 200) {
    return "Ops! Algo deu errado."
  };

    const data = await response.json();
    return data;
};

export const useSearch = () => {
  return useMutation({
    mutationKey: ['search'],
      mutationFn: async (term: string) => fetchSearch(term),
    })
};