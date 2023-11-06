import ProductBtn from "../components/ProductBtn";
import MoreBtn from "../components/MoreBtn";
import Icons from "../icons/Icons";
import styled from "styled-components";

const typesData = [
    {
        id: "movie",
        type: "電影",
        title: "寶可夢：皮卡丘與可可的冒險",
        imgUrl1: "movie1.png",
        imgUrl2: "movie2.jpg",
    },
    {
        id: "tv",
        type: "電視節目",
        title: "寶可夢　旅途",
        imgUrl1: "tv1.png",
        imgUrl2: "tv3.png",
    },
    {
        id: "game",
        type: "遊戲",
        title: "《寶可夢 朱／紫》",
        imgUrl1: "game1.jpg",
        imgUrl2: "game2.png",
    },
];

const TypesIconStyle = styled.div`
    width: 100px;
    height: 100px;

    animation: ball 1.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) infinite
        alternate;
    display: none;

    svg {
        width: 100%;
        height: 100%;
    }

    path {
        fill: rgba(255, 255, 255, 0.5);
    }

    circle {
        fill: rgba(255, 255, 255, 0.5);
    }
`;

export default function Product() {
    return (
        <>
            <div className='product-cover' id='product'></div>
            {typesData.map((item, i) => (
                <div key={i} className='product' id={item.id}>
                    <div className='container'>
                        <div className='product-title row'>
                            <div className='col-lg-2 col-md-12 mb-md-3'>
                                <ProductBtn name={item.type} />
                            </div>
                            <div className='col-lg-6 col-md-8'>
                                <span className='text-underline'>
                                    {item.title}
                                </span>
                            </div>
                            <div className='col-lg-4  col-md-4 text-end '>
                                <MoreBtn
                                    name='更多系列'
                                    dataHover='更多系列'
                                    className='product-moreBtn'
                                />
                            </div>
                        </div>
                        <div className='product-title row  column-gap-3'>
                            <div className='col-2'></div>
                            <div className='col-lg-6 col-md-12 product-img'>
                                <div
                                    className='product-img'
                                    style={{
                                        backgroundImage: `url(/images/${item.imgUrl1}) `,
                                    }}
                                ></div>
                            </div>
                            <div
                                className='col-3 d-none d-lg-block product-img2'
                                style={{
                                    background: `url(/images/${item.imgUrl2})`,
                                }}
                            >
                                <div className='product-story'>
                                    <TypesIconStyle className='product-ballIcon'>
                                        <Icons.PokemonBallBlack />
                                    </TypesIconStyle>

                                    <button
                                        type='button'
                                        className='btn btn-outline-light'
                                    >
                                        查看
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
