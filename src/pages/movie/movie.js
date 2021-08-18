import React, { useState } from 'react';
import { Row, Col, Button } from 'antd';
import { useParams } from 'react-router';
import moment from 'moment';
import useFetch from '../../hooks/UseFetch';
import { URL_API, API } from '../../utils/constants';
import Loading from '../../components/loading/Loading';
import ModalVideo from '../../components/modalVideo';
import { PlayCircleOutlined } from '@ant-design/icons';

import './movie.scss';
const Movie = () => {

    const { id } = useParams();
    const movieInfo = useFetch(`${URL_API}/movie/${id}?api_key=${API}&language=es-ES`);

    if (movieInfo.loading || !movieInfo.result) {
        return <Loading />
    }

    return <RenderMovie movieInfo={movieInfo.result} />
}

function RenderMovie(props) {

    const { movieInfo: { backdrop_path, poster_path } } = props;
    const backDroPath = `https://image.tmdb.org/t/p/original${backdrop_path}`



    return (
        <div
            style={{ backgroundImage: `url('${backDroPath}')` }}
            className="movie">
            <div className="movie__dark"></div>

            <Row>
                <Col span={8} offset={3} className="movie__poster">
                    <PosterMovie image={poster_path} />
                </Col>

                <Col span={10} className="movie__info">
                    <MovieInfo movieInfo={props.movieInfo} />
                </Col>
            </Row>

        </div>
    )
}


function PosterMovie(props) {
    const { image } = props;
    const posterPath = `https://image.tmdb.org/t/p/original${image}`;

    return <div style={{ backgroundImage: `url('${posterPath}')` }}></div>

}


function MovieInfo(props) {
    const { movieInfo: { id, title, release_date, overview, genres } } = props;
    const [isVisibleModal, setIsVisibeModal] = useState(false);
    const videoMovie = useFetch(
        `${URL_API}/movie/${id}/videos?api_key=${API}&language=es-ES`
    );

    const openModal = () => setIsVisibeModal(true);

    const closeModal = () => setIsVisibeModal(false);


    const renderVideo = () => {
        if (videoMovie.result) {
            if (videoMovie.result.results.length > 0) {
                return (
                    <>
                       
                        <Button onClick={openModal}><PlayCircleOutlined />Ver trailer</Button>


                        <ModalVideo 
                        videoKey={videoMovie.result.results[0].key}
                        videoPlatForm={videoMovie.result.results[0].size}
                        isOpen={isVisibleModal}
                        close={closeModal}
                        />
                    </>
                )
            }
        }
    }

    return (
        <>
            <div className="movie__info-header">

                <h1>
                    {title}
                    <span>{moment(release_date, "YYYY-MM-DD").format('YYYY')}</span>
                </h1>
                {renderVideo()}


            </div>
            <div className="movie__info-content">
                <h3>General</h3>
                <p>{overview}</p>
                <h3>Generos</h3>
                <ul>
                    {
                        genres.map(gender => (
                            <li key={gender.id}>{gender.name}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}
export default Movie;