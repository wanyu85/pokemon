const PokemonLength = Array.from({ length: 20 });

export default function PokemonScroll({ className }) {
    return (
        <div className='pokemon-scroll'>
            {PokemonLength.map((_, i) => (
                <div
                    key={i}
                    className={` ${
                        i % 2 === 0
                            ? "text-light text-shadow1"
                            : "text-secondary-emphasis text-shadow2"
                    } `}
                >
                    Pokemon
                </div>
            ))}
        </div>
    );
}
