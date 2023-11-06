export default function Pagination({
    totalPosts,
    postsPage,
    setCurrentPage,
    currentPage,
}) {
    // 總共頁數
    // ! Math.ceil -> 返回大於或等於原始數值的整數
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPage); i++) {
        pages.push(i);
    }

    let visiblePages = pages;
    if (pages.length > 10) {
        if (currentPage > pages.length - 10) {
            visiblePages = pages.slice(-10);
        } else {
            visiblePages = pages.slice(currentPage - 1, currentPage + 9);
        }
    }

    return (
        <div className='pagination'>
            <button
                type='button'
                className={currentPage === 1 ? "" : "btn btn-dark"}
                onClick={() =>
                    setCurrentPage((prev) => {
                        if (prev === 1) return prev;
                        return prev - 1;
                    })
                }
            >
                {"<"}
            </button>
            {visiblePages.map((page, i) => {
                return (
                    <button
                        type='button'
                        key={i}
                        className={currentPage === page ? "active" : "btnNone"}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                );
            })}
            <button
                type='button'
                className={currentPage === pages.length ? "" : "btn btn-dark"}
                onClick={() =>
                    setCurrentPage((prev) => {
                        if (prev === pages.length) return prev;
                        return prev + 1;
                    })
                }
            >
                {">"}
            </button>
        </div>
    );
}
