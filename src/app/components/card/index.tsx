import Image from "next/image";
import { Passero_One } from "next/font/google";

const passeroOne = Passero_One({
  subsets: ["latin"],
  weight: ["400"],
});

interface GameCardProps {
  image: string;
  name: string;
  genre: string;
  metacritic: string;
}

export const GameCard = ({ image, name, genre, metacritic }: GameCardProps) => {
  return (
    <div className={`${passeroOne.className}`}>
      {image && (
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="object-none h-[300]"
        />
      )}
      <h2>{name}</h2>
      <p>{genre}</p>
      <p>{metacritic}</p>
    </div>
  );
};
