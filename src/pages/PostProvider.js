import { createContext, useContext, useState } from "react";

const PostContext = createContext();

export default function PostProvider({ children }) {
    const [pokemonData, setPokemonData] = useState([]); //所有資料
    const [handleTypeClick, setHandleTypeClick] = useState("");
    const [searchResults, setSearchResults] = useState({});
    const [searchCard, setSearchCard] = useState(false);
    const [isSearch, setIsSearch] = useState("");

    const value = {
        pokemonData,
        setPokemonData,
        handleTypeClick,
        setHandleTypeClick,
        searchResults,
        setSearchResults,
        searchCard,
        setSearchCard,
        isSearch,
        setIsSearch,
    };

    return (
        <PostContext.Provider value={value}>{children}</PostContext.Provider>
    );
}
export function usePost() {
    return useContext(PostContext);
}
