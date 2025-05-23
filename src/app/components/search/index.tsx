import { SetStateAction, useState } from "react"
import { IconSearch } from "@/app/assets/iconSearch";
import { useSearch } from "@/app/hooks/useSearch";

export const Search = () => {
    const [term, setTerm] = useState('');

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => setTerm(e.target.value)

    const { mutate } = useSearch()
    const handleClick = () => {
        mutate(term)
    }

    return (
        <div className="flex flex-row">
        <input type="search" placeholder="Procurar" className="w-full h-10 rounded-xl focus:bg-white focus:text-blue-gray border-light-gray border-solid border text-light-gray p-2 font-medium" onChange={handleChange} />
            <button className="p-2.5 cursor-pointer" onClick={handleClick}>
                <IconSearch className="w-7.5 h-7.5 text-gray hover:text-white"/>
            </button>
        </div>
    )
}