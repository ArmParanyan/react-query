import React, {FC, MouseEventHandler} from "react";

interface PaginationProps {
    handlePrevPage: MouseEventHandler<HTMLButtonElement>;
    handleNextPage: MouseEventHandler<HTMLButtonElement>;
    page: number;
}

export const Pagination:FC<PaginationProps> = ({ handlePrevPage, handleNextPage, page}) => {
    return (
        <>
            <div>
                <button onClick={handlePrevPage} disabled={page === 1}>
                    Previous Page
                </button>
                <span>Page {page}</span>
                <button onClick={handleNextPage}>Next Page</button>
            </div>
        </>
    );
};
