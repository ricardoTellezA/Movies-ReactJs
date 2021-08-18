import React from 'react'
import { List,Avatar } from 'antd';
import { Link } from 'react-router-dom';
import Loading from '../loading/Loading';
import './MovieList.scss';
import { RightCircleFilled } from '@ant-design/icons'


const MovieList = ({movies,title}) => {
    


    if(movies.loading || !movies.result){
        return <Loading/>
    }

    
    return (
        <div>
            <List
            className="movie-list"
            size="default"
            header={<h2>{title}</h2>}
            bordered
            dataSource={movies.result.results}
            renderItem={movie => <RederMovie movie={movie}/>}
            />
        </div>
    )
}

function RederMovie(props){
    const {movie:{id,title,poster_path}} = props;
    const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`; 
    return (
        <List.Item className="movie-list__movie">
            <List.Item.Meta 
            avatar={<Avatar src={posterPath}/>}
            title={<Link to={`/movie/${id}`}>{title}</Link>}
            />
            <Link to={`/movie/${id}`}>
            <RightCircleFilled style={{ fontSize: '2rem'}} />
            </Link>
         </List.Item>
    )
}

export default MovieList
