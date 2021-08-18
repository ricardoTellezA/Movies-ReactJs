import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd';
import { URL_API, API } from '../utils/constants';
import Footer from '../components/footer';
import Loading from '../components/loading';
import MovieCatalog from '../components/movieCatalog/MovieCatalog';
import PaginationMovies from '../components/pagination/Pagination';
 


const Popular = () => {
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);



    useEffect(() => {
        const readMovie = async () => {

            const response = await fetch(`${URL_API}/movie/popular?api_key=${API}&lenguage=es-ES&page=${page}`);
            const movies = await response.json();
            setMovieList(movies)

        }

        readMovie();
    }, [page]);


    const onChangePage = page => {
        setPage(page);
    }

    return (
        <Row>
            <Col span="24" style={{ textAlign: "center", marginTop: 25 }}>
                <h1 style={{ fontSize: 35, fontWeight: 'bold' }}>Plícular Populares</h1>
            </Col>
            {
                movieList.results ? (
                    <>
                        <Row span="24">
                            <MovieCatalog movieList={movieList} />
                        </Row>
                        <Col span="24">
                            <PaginationMovies
                                currentPage={movieList.page}
                                totalItems={movieList.total_results}
                                onChangePage={onChangePage}
                            />
                        </Col>
                    </>
                ) : (<Col span="24"><Loading /></Col>)
            }
            <Col span="24">
                <Footer />
            </Col>
        </Row>
    )
}
export default Popular;