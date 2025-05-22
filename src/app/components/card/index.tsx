import Image from "next/image";

interface GameCardProps {
  image: string;
  name: string;
  genre: string;
  metacritic: string;
}

const hasImage = (image : string) => {
  return image !== null ? image : "https://placehold.co/400x400/8D99AE/2B2D42/png?text=imagem+indispon%C3%ADvel"
}

export const GameCard = ({ image, name, genre, metacritic }: GameCardProps) => {
  return (
    <div className="mb-5 hover:border-white border-solid border border-gray rounded-xl p-2.5 cursor-pointer" >
        <Image
          src={hasImage(image)}
          alt={name}
          width={400}
          height={400}
          className="object-none h-[300] rounded-xl mb-2.5"
        />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p>{genre}</p>
      <p>{`metacritic: ${metacritic}`}</p>
    </div>
  );
};
