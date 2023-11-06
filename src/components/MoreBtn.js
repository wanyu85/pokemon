import Icons from "../icons/Icons";
import styled from "styled-components";

const MoreBtnStyle = styled.div`
    width: 20px;
    height: 20px;
    margin-left: 5px;

    svg {
        width: 100%;
        height: 100%;
    }
`;

export default function MoreBtn({ name, dataHover, className }) {
    return (
        <>
            <button className='more-btn' data-hover={dataHover}>
                <div>
                    <span className={`${className}`}>{name}</span>
                    <MoreBtnStyle className={`${className}`}>
                        <Icons.PokemonArrow />
                    </MoreBtnStyle>
                </div>
            </button>
        </>
    );
}
