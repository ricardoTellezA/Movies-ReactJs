import React from 'react'
import { Col } from 'antd';
import Pagination from 'rc-pagination';


import './Pagination.scss';

const PaginationMovies = (props) => {
    const { currentPage, totalItems, onChangePage } = props;
    return (
        <Col className="container">
            <Pagination
                className="pagination"
                current={currentPage}
                total={totalItems}
                pageSize={20}
                onChange={onChangePage}
            />

        </Col>
    )
}

export default PaginationMovies
