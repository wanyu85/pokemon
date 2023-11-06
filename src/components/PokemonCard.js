import styled from "styled-components";
import Icons from "../icons/Icons";
import { usePost } from "../pages/PostProvider";

const IconStyle = styled.div`
    position: absolute;
    z-index: 1;
    bottom: 5%;
    display: none;

    svg {
        width: 100%;
        height: 100%;
    }
`;

export default function PokemonCard({ pokemon }) {
    // console.log("pokemon", pokemon);
    const { isSearch, setIsSearch, searchResults } = usePost();

    return pokemon !== null ? (
        <div className='pokemonCard col-4 ' id='pokemonCard'>
            <div className='vstack gap-4'>
                <span className='number'>
                    # {String(pokemon.id).padStart(3, "0")}
                </span>
                <span className='name'>{pokemon.name}</span>
                <div className='d-flex type-text'>
                    {pokemon.types.map((type, i) => (
                        <span key={i}>
                            <span className='type'>{type}</span>
                            {i < pokemon.types.length - 1 && (
                                <span className='comma'>·</span>
                            )}
                        </span>
                    ))}
                </div>
            </div>

            <div className='pokemonCard-content'>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    alt='${pokemon.name}'
                />
                <IconStyle className='icon'>
                    <Icons.PokemonBallBlack />
                </IconStyle>

                <div className='pokemonCard-text'>
                    {pokemon.entries.map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    ) : null;
}
