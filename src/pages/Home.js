const images = [
    {
        imgUrl: "/images/1177515.jpg",
    },
    {
        imgUrl: "/images/1160159.png",
    },
    {
        imgUrl: "/images/1177514.jpg",
    },
    {
        imgUrl: "/images/1177510.jpg",
    },
    {
        imgUrl: "/images/wallpapersden.com_hd-pokemon-unite_1920x1080.jpg",
    },
];

export default function Home() {
    return (
        <>
            <div className='home-slider' id='home'>
                {images.map((image, i) => {
                    return (
                        <div
                            key={i}
                            className='home-image'
                            style={{
                                backgroundImage: `linear-gradient(
                                        rgba(0, 0, 0, 0.5),
                                        rgba(0, 0, 0, 0.5)
                                    ),
                                    url(${image.imgUrl})`,
                            }}
                        ></div>
                    );
                })}

                <div className='home-container'>
                    <p>捕捉寶可夢</p>
                    <p>找到屬於你的夥伴！</p>
                    <button>詳細資訊</button>
                </div>
            </div>
        </>
    );
}
