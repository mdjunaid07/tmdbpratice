import { Routes, Route } from 'react-router-dom';

import Moviedetail from '../pages/Moviedetail';
import Movielist from '../pages/movielist';
import React from 'react'
import PageNotFound from '../pages/PageNotFound';
import Search from '../pages/Search';

const Allrouter = () => {
    return (

        <Routes>
            <Route path="/" element={<Movielist apiPath="movie/now_playing" />} />
            <Route path="/detail" element={<Moviedetail />} />
            <Route path="/popular" element={<Movielist apiPath="movie/popular" />} />
            <Route path="/toprated" element={<Movielist apiPath="movie/top_rated" />} />
            <Route path="/pagenotfound" element={<PageNotFound />} />
            <Route path="/search" element={<Search />} />

        </Routes>
    )
}

export default Allrouter