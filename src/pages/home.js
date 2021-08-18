import React from 'react'
import { Row, Col } from 'antd';
import UseFetch from '../hooks/UseFetch';
import SliderMovies from '../components/silderMovies';
import MovieList from '../components/movieList/MovieList';
import Footer from '../components/footer/Footer';
import {
    URL_API,
    API
} from '../utils/constants'

const home = () => {

    const newMovies = UseFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`);


    const popularMovies = UseFetch(`${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`);

    const topRaterMovies = UseFetch(`${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`);


    return (
        <>
            <SliderMovies movies={newMovies} />

            <Row>
                <Col span={12}>
                    <MovieList title="Peliculas populares" movies={popularMovies} />
                </Col>
                <Col span={12}>
                    <MovieList title='Top Mejores Peliculas Puntuadas' movies={topRaterMovies}/>
                </Col>
            </Row>

            <Footer/>
        </>
    )
}
export default home;