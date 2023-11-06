import NewCard from "../components/NewCard";
import MoreBtn from "../components/MoreBtn";

export default function News() {
    return (
        <div className='news' id='news'>
            <div className='container news-container'>
                <div className='news-title'>
                    <h1>news</h1>
                    <MoreBtn name='看更多' dataHover='看更多' />
                </div>
                <div className='news-scroll'>
                    <div className='news-item'>
                        <NewCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
