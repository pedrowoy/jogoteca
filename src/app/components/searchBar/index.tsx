"use client";
import { SetStateAction, useCallback, useState } from "react"
import { IconSearch } from "@/app/assets/iconSearch";
import { useSearchParams, useRouter } from "next/navigation";

export const SearchBar = () => {
    const [term, setTerm] = useState('');
    const router = useRouter()
    const searchParams = useSearchParams();


    const createSearchParams = useCallback((name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(name, value)

        return params.toString()
    }, [searchParams])

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => setTerm(e.target.value)
       
    const handleClick = () => { 
        router.push(`/search?${createSearchParams('game', term)}`)                   
    };

    return (
        <div className="flex flex-row">
        <input type="search" placeholder="Procurar" className="w-full h-10 rounded-xl focus:bg-white focus:text-blue-gray border-light-gray border-solid border text-light-gray p-2 font-medium" onChange={handleChange} />
            <button className="p-2.5 cursor-pointer" onClick={handleClick}>
                <IconSearch className="w-7.5 h-7.5 text-gray hover:text-white"/>
            </button>
        </div>
    )
}