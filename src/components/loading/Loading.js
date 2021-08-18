import React from 'react'
import { Spin } from 'antd';


import './Loading.scss';

const Loading = () => {
    return (
        <div className="loading">

            <Spin size="large"/>
            
        </div>
    )
}

export default Loading;
