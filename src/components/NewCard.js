import MoreBtn from "./MoreBtn";

const data = [
    {
        date: "2023.10.06",
        content:
            "Día de Muertos 2023 :和戴著花飾的「卡拉卡拉」及「嘎啦嘎啦」一起慶祝「Día de Muertos」，>還有全新加碼獎勵、薰香和誘餌模組等著你！",
    },
    {
        date: "2023.10.18",
        content:
            "呼朋引伴體驗Pokémon GO的全新玩法「小隊合作」，和變裝的寶可夢一起歡慶今年的萬聖節吧！",
    },
    {
        date: "2023.10.16",
        content:
            "Amazon Prime Gaming合作夥伴特別調查：搶先入手「墓仔狗假髮」！",
    },
    {
        date: "2023.10.16",
        content: "2023年11月社群日：「烏波」與「帕底亞烏波」",
    },
    {
        date: "2023.10.13",
        content:
            "萬聖節冒險隆重登場，在「Pokémon GO 萬聖節2023 Part1」跟「墓仔狗」一起慶祝吧！",
    },
];

export default function NewCard() {
    return (
        <>
            {data.map((item, i) => {
                return (
                    <div key={i} className='news-card'>
                        <small>{item.date}</small>
                        <p>{item.content}</p>
                        <div className='news-card-box mt-0'>
                            <span className='news-line'>
                                <MoreBtn
                                    name='more'
                                    dataHover='more'
                                    className='news-moreBtn'
                                />
                            </span>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
