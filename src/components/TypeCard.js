import { useState } from "react";
import Icons from "../icons/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { usePost } from "../pages/PostProvider";
import { scrollToTargetPokemon } from "./Header";

const IconStyled = styled.div`
    width: 30px;
    height: 30px;

    img,
    svg {
        width: 100%;
        height: 100%;
        padding-bottom: 5px;
    }
    & path {
        fill: rgba(255, 255, 255, 0.3);
    }
`;

export default function TypeCard() {
    const { handleTypeClick, setHandleTypeClick } = usePost();
    const [typeData, setTypeData] = useState([
        {
            id: 1,
            name: "全部",
            isHovered: false,
            imageUrl: "01.png",
        },
        {
            id: 2,
            name: "草",
            isHovered: false,
            imageUrl: "02.png",
        },
        {
            id: 3,
            name: "毒",
            isHovered: false,
            imageUrl: "03.png",
        },
        {
            id: 4,
            name: "火",
            isHovered: false,
            imageUrl: "04.png",
        },
        {
            id: 5,
            name: "飛行",
            isHovered: false,
            imageUrl: "05.png",
        },
        {
            id: 6,
            name: "水",
            isHovered: false,
            imageUrl: "06.png",
        },
        {
            id: 7,
            name: "蟲",
            isHovered: false,
            imageUrl: "07.png",
        },
        {
            id: 8,
            name: "一般",
            isHovered: false,
            imageUrl: "08.png",
        },
        {
            id: 9,
            name: "電",
            isHovered: false,
            imageUrl: "09.png",
        },
        {
            id: 10,
            name: "地面",
            isHovered: false,
            imageUrl: "10.png",
        },
        {
            id: 11,
            name: "妖精",
            isHovered: false,
            imageUrl: "11.png",
        },
        {
            id: 12,
            name: "格鬥",
            isHovered: false,
            imageUrl: "12.png",
        },
        {
            id: 13,
            name: "超能力",
            isHovered: false,
            imageUrl: "13.png",
        },
        {
            id: 14,
            name: "岩石",
            isHovered: false,
            imageUrl: "14.png",
        },
        {
            id: 15,
            name: "鋼",
            isHovered: false,
            imageUrl: "15.png",
        },
        {
            id: 16,
            name: "冰",
            isHovered: false,
            imageUrl: "16.png",
        },
        {
            id: 17,
            name: "幽靈",
            isHovered: false,
            imageUrl: "17.png",
        },
        {
            id: 18,
            name: "龍",
            isHovered: false,
            imageUrl: "18.png",
        },
        {
            id: 19,
            name: "惡",
            isHovered: false,
            imageUrl: "19.png",
        },
    ]);

    return (
        <>
            {typeData.map((item, i) => {
                // console.log("image", image);
                return (
                    <div
                        key={item.id}
                        className='types-card '
                        id={`color${item.id}`}
                        onClick={
                            (scrollToTargetPokemon(),
                            () => setHandleTypeClick(item.name))
                        }
                    >
                        <div className='types-card-name '>
                            <IconStyled className='pokemonBall'>
                                <Icons.PokemonBall />
                            </IconStyled>
                            <span>{item.name}屬性</span>
                            <img
                                src={require(`../image/${item.imageUrl}`)}
                                alt='#'
                            />
                        </div>

                        <button>
                            <span>more</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                );
            })}
        </>
    );
}
