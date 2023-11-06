import { useState } from "react";
import Icons from "../icons/Icons";
import { usePost } from "../pages/PostProvider";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const IconStyle = styled.div`
    width: 15px;
    height: 15px;
    position: absolute;
    bottom: 48px;
    right: 5%;
    z-index: 3;

    svg {
        width: 100%;
        height: 100%;
    }
`;

export function SearchResults({ searchResults }) {
    return (
        <div className='row '>
            {searchResults.map((pokemon, i) => (
                <PokemonCard key={i} pokemon={pokemon} />
            ))}
        </div>
    );
}

export default function SearchInput() {
    // const [searchResults, setSearchResults] = useState({});
    const {
        pokemonData,
        searchResults,
        setSearchResults,
        searchCard,
        setSearchCard,
        isSearch,
        setIsSearch,
    } = usePost();

    const handleSearch = (e) => {
        const searchText = e.target.value;
        setIsSearch(searchText);

        const results = pokemonData.filter((pokemon) =>
            pokemon.name.includes(searchText)
        );
        setSearchResults(results);
        setSearchCard(true);
    };

    return (
        <div>
            <div className='input-container pb-5'>
                <div className='input-group w-25'>
                    <input
                        type='text'
                        className='form-control rounded-end'
                        placeholder='Search...'
                        value={isSearch}
                        onChange={handleSearch}
                    />
                    <IconStyle>
                        <Icons.Search />
                    </IconStyle>
                </div>
            </div>
            {isSearch ? <SearchResults searchResults={searchResults} /> : null}
        </div>
    );
}
