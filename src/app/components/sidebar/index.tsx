import Link from "next/link";
import { Passero_One } from "next/font/google";

const passeroOne = Passero_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const Sidebar = () => {
  return (
    <aside>
      <Link href="/" className="flex flex-wrap mb-6">
          <h1 className={`${passeroOne.className} text-6xl leading-11`}>Jogoteca</h1>
      </Link>
      <ul>
        <li>Link!</li>
      </ul>
    </aside>
  );
};
