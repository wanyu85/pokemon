import { Link, useNavigate } from "react-router-dom";
import Icons from "../icons/Icons";
import { useEffect, useState } from "react";

const navItem = [
    {
        id: "news",
        name: "最新消息",
    },
    {
        id: "product",
        name: "相關產品",
    },
    {
        id: "all-pokemon",
        name: "寶可夢",
    },
];

const navItemMd = [
    {
        id: "news",
        name: "最新消息",
    },
    {
        id: "product-collapse",
        name: "相關產品",
        link: [
            {
                linkName: "電影",
                linkUrl: "movie",
            },
            {
                linkName: "電視動畫系列",
                linkUrl: "tv",
            },
            {
                linkName: "遊戲",
                linkUrl: "game",
            },
        ],
    },
    {
        id: "pokemon-collapse",
        name: "寶可夢",
        link: [
            {
                linkName: "寶可夢屬性",
                linkUrl: "types",
            },
            {
                linkName: "寶可夢圖鑑",
                linkUrl: "card",
            },
        ],
    },
];

// 導覽列 icon 滾動
export function scrollToTargetPokemon() {
    const cardEl = document.getElementById("card");
    if (cardEl) {
        cardEl.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
}

// 回首頁
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Header() {
    const [isOffcanvasClose, setIsOffcanvasClose] = useState(false);
    const [colorChange, setColorChange] = useState(false);

    // 關閉 offcanvas
    const openOffcanvas = () => {
        setIsOffcanvasClose(true);
    };

    const closeOffcanvas = () => {
        setIsOffcanvasClose(false);
    };

    // 滾動內容
    function scrollToTarget(itemId) {
        const targetEl = document.getElementById(itemId);
        if (targetEl) {
            // ! .scrollIntoView -> 單頁將內容滾動到可見區域
            targetEl.scrollIntoView({
                behavior: "smooth", //平滑滚动，有滾動動畫
                block: "center", //垂直置中
            });

            if (itemId === "news") {
                setIsOffcanvasClose(false);
            }
        }
        // console.log("itemId", itemId);
    }

    // 摺疊面板的連結滾動
    function handleLinkClick(item, linkItem) {
        if (item.link && item.link.length > 0) {
            scrollToTarget(linkItem.linkUrl);
            setIsOffcanvasClose(false);
        }
    }

    // 監聽滑鼠位置，變換導覽列底色
    const changeNavColor = () => {
        const newsHeight = document.getElementById("news");
        // ! .offsetTop -> 獲取元素垂直位置
        if (window.scrollY > newsHeight.offsetTop) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavColor);
        return () => {
            window.removeEventListener("scroll", changeNavColor);
        };
    }, []);

    return (
        <>
            <nav
                className={
                    colorChange
                        ? "navbar navbar-expand-lg fixed-top scrollBgc"
                        : "navbar navbar-expand-lg fixed-top"
                }
            >
                <div className='container-xl'>
                    <button
                        className={
                            colorChange
                                ? "navbar-brand scrollColor btn "
                                : "navbar-brand btn "
                        }
                        onClick={scrollToTop}
                    >
                        Pokémon
                    </button>
                    <button
                        className={
                            colorChange
                                ? "navbar-toggler scrollColor"
                                : "navbar-toggler"
                        }
                        type='button'
                        data-bs-toggle='offcanvas'
                        data-bs-target='#offcanvasNavbar'
                        aria-controls='offcanvasNavbar'
                        aria-label='Toggle navigation'
                        onClick={openOffcanvas}
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className={`offcanvas offcanvas-top h-75 ${
                            isOffcanvasClose ? "show" : ""
                        }`}
                        tabIndex={-1}
                        id='offcanvasNavbar'
                        aria-labelledby='offcanvasNavbarLabel'
                    >
                        <div className='offcanvas-header'>
                            <button
                                type='button'
                                onClick={() => {
                                    scrollToTop();
                                    closeOffcanvas();
                                }}
                                className='offcanvas-title btn'
                                id='offcanvasNavbarLabel'
                            >
                                Pokémon
                            </button>

                            <button
                                type='button'
                                className='btn-close me-3'
                                data-bs-dismiss='offcanvas'
                                aria-label='Close'
                            ></button>
                        </div>
                        <div className='offcanvas-body justify-content-center'>
                            <ul className='nav nav-pills flex-lg-row flex-md-column '>
                                {navItem.map((item, i) => (
                                    <div key={i}>
                                        <li className='nav-item'>
                                            <Link
                                                className={
                                                    colorChange
                                                        ? "nav-link btn text-start d-none d-lg-block scrollColor"
                                                        : "nav-link btn text-start d-none d-lg-block"
                                                }
                                                to={`#${item.id}`}
                                                onClick={() => {
                                                    scrollToTarget(item.id);
                                                }}
                                            >
                                                <p>{item.name}</p>
                                            </Link>
                                        </li>
                                    </div>
                                ))}
                                {/* 摺疊面板 */}
                                {navItemMd.map((item, j) => (
                                    <li
                                        key={j}
                                        className='nav-item d-lg-none  d-block w-75'
                                    >
                                        <Link
                                            className='nav-link btn text-start'
                                            to={`#${item.id}`}
                                            data-bs-toggle='collapse'
                                            onClick={() => {
                                                scrollToTarget(item.id);
                                            }}
                                        >
                                            <p className='title'>
                                                {item.name}
                                                {item.link &&
                                                item.link.length > 0 ? (
                                                    <Icons.ArrowDown />
                                                ) : null}
                                            </p>
                                        </Link>
                                        {item.link && item.link.length > 0 ? (
                                            <div
                                                className='collapse d-lg-none'
                                                id={`${item.id}`}
                                            >
                                                <div className='collapse-content w-50'>
                                                    {item.link.map(
                                                        (linkItem, k) => (
                                                            <Link
                                                                key={k}
                                                                to={`#${linkItem.linkUrl}`}
                                                                onClick={() =>
                                                                    handleLinkClick(
                                                                        item,
                                                                        linkItem
                                                                    )
                                                                }
                                                            >
                                                                <p>
                                                                    {
                                                                        linkItem.linkName
                                                                    }
                                                                </p>
                                                            </Link>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        ) : null}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='d-flex icon-style'>
                        <button
                            className={colorChange ? "btn scrollColor" : "btn"}
                        >
                            <Link
                                to='#card'
                                onClick={() => scrollToTargetPokemon()}
                            >
                                <Icons.PokemonIcon />
                            </Link>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
