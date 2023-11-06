import Icons from "../icons/Icons";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PokemonScroll from "../components/PokemonScroll";
import { usePost } from "./PostProvider";
import TypeCard from "../components/TypeCard";

export default function Types() {
    return (
        <div id='all-pokemon'>
            <div className='types-container' id='types'>
                <div className='types-cover'>
                    <div className='types-title'>Pokémon Type</div>
                </div>
                <div className='types'>
                    <PokemonScroll />
                    <div className='container'>
                        <div className='types-scroll'>
                            <div className='types-item'>
                                <TypeCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
