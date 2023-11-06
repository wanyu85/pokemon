import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import Pagination from "../components/Pagination";
import { usePost } from "./PostProvider";
import Icons from "../icons/Icons";
import styled from "styled-components";
import SearchInput, { SearchResults } from "../components/SearchInput";

export default function Pokemon() {
    const {
        pokemonData,
        setPokemonData,
        handleTypeClick,
        setHandleTypeClick,
        searchResults,
        searchCard,
        setSearchCard,
        isSearch,
        setIsSearch,
    } = usePost();
    const [currentPage, setCurrentPage] = useState(1); //目前所在的頁面
    const [postsPage, setPostsPage] = useState(15); //每頁要顯示的內容數量

    const lastPostIndex = currentPage * postsPage; //當前頁面的最後一個內容的索引值

    const firstPostIndex = lastPostIndex - postsPage; //當前頁面的第一個內容的索引值

    const [filteredPokemon, setFilteredPokemon] = useState([]);

    // ! .slice -> 分割、創列新數組
    const currentPosts = pokemonData.slice(firstPostIndex, lastPostIndex); // 當前頁面的內容

    useEffect(() => {
        const fetchAllPokemon = async () => {
            try {
                const res = await fetch(
                    "https://raw.githubusercontent.com/rayc2045/pokedex/main/data/PokeApi.json"
                );

                const data = await res.json();
                // console.log(data);

                const zhData = data.map((dataItem) => {
                    const zhInfo = {
                        id: dataItem.id,
                        name: dataItem.name.zh,
                        types: dataItem.types.zh,
                        genera: dataItem.genera.zh,
                        entries: dataItem.entries.zh,
                    };
                    return zhInfo;
                });
                // console.log("zhData", zhData);
                setPokemonData(zhData);
                setFilteredPokemon(pokemonData);
            } catch (error) {
                console.error("fetchAllPokemon 有誤", error);
            }
        };

        fetchAllPokemon();
    }, []);

    useEffect(() => {
        if (handleTypeClick) {
            if (handleTypeClick === "全部") {
                setFilteredPokemon(pokemonData);
            } else {
                const filtered = pokemonData.filter((pokemon) =>
                    pokemon.types.includes(handleTypeClick)
                );
                setFilteredPokemon(filtered);
            }
        }
        setCurrentPage(1);
    }, [handleTypeClick, pokemonData]);

    const currentPostsFilter = filteredPokemon.slice(
        firstPostIndex,
        lastPostIndex
    );

    return (
        <div className='pokemon-container' id='card'>
            <div className='container'>
                <div className='title'>
                    <h1>Pokémon</h1>
                    <p className='text'>
                        {handleTypeClick ? handleTypeClick : "全部"}
                    </p>
                </div>
                <SearchInput />
                {isSearch.length > 0 && searchCard ? null : (
                    <div className='row pokemon-card'>
                        {handleTypeClick
                            ? currentPostsFilter.map((pokemon) => (
                                  <PokemonCard
                                      key={`pokemon-${pokemon.id}`}
                                      pokemon={pokemon}
                                  />
                              ))
                            : currentPosts.map((pokemon) => (
                                  <PokemonCard
                                      key={`pokemon-${pokemon.id}`}
                                      pokemon={pokemon}
                                  />
                              ))}
                        <div className='pagination-container'>
                            <Pagination
                                totalPosts={
                                    handleTypeClick
                                        ? filteredPokemon.length
                                        : pokemonData.length
                                }
                                postsPage={postsPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
