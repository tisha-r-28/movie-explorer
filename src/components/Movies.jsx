import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { allMovieList, movieDetails } from '../atoms/MovieAtom';
import Navbar from './Navbar';
import Loader from '../assets/images/Infinity@1x-1.8s-200px-200px.gif'
// import { useNavigate } from 'react-router';
import MovieDetails from './MovieDetails';
import { token } from '../atoms/UserAtom';
import { useNavigate } from 'react-router';

function Movies() {

    const navigate = useNavigate();

    const [ authToken ] = useAtom(token);

    if(!authToken){
        navigate('/');
    }

    const [movieList, setMovieList] = useAtom(allMovieList);

    const [ isLoading, setLoading ] = useState(true);

    const [selectedMovie, setSelectedMovie] = useAtom(movieDetails); // State to manage selected movie
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    const fetchMovies = async () => {
        try {
            const url = 'https://dummyjson.com/products';

            const response = await fetch(url);
            const data = await response.json();
            const movies = data.products;
            // console.log(movies);
            setMovieList(movies);
            setLoading(false)
        } catch (error) {
            console.log(`error for fetch all movies : ${error.message}`);
        }
    }

    const handleClick = (movie) => {
        setSelectedMovie(movie);
        setIsModalOpen(true); // Show the modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Hide the modal
    };

    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Navbar />
            <section className="container-fluid" style={{backgroundColor : "#040404", height : isLoading && '100vh'}}>
                <div className="container">
                    <div className="row">
                        { isLoading && <img src={Loader} alt="loading..." className="position-absolute top-50 start-50 translate-middle" style={{width : '250px'}} /> }
                        {movieList?.map((movie, index) => {
                            return (
                                <div className="col-3 p-5 text-white" key={movie?.id ?? index} style={{cursor : 'pointer'}} onClick={() => handleClick(movie)}>
                                    <img src={movie?.images?.[0] ?? '-'} className="w-100" style={{height : '270px'}} alt={movie?.title ?? 'img alternate'} />
                                    <h1 className='fw-bold fs-5'>{movie?.title ?? "-"}</h1>
                                    <p><span className='fw-bold'>Rating</span> : {movie?.rating ?? '-'}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            {isModalOpen && <MovieDetails movie={selectedMovie} onClose={handleCloseModal} />}
        </>
    )
}

export default Movies;