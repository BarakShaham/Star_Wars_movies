import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import AddFavourites from './components/AddFavourites';
import FavouritesModal from "./components/FavouritesModal";
import {Container, Row} from "react-bootstrap";
import {BsFillHeartFill} from 'react-icons/bs'
import {GetMovieRequest} from './GetMovieRequest'

const App = () => {
    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [showFavModal, setShowFavModal] = useState(false);

    const getMovieRequest = async () => {
        const res = await GetMovieRequest()
        console.log(res.results)
        setMovies(res.results)
    };

     useEffect(() => {
        getMovieRequest()

        const movieFavourites = JSON.parse(
            localStorage.getItem('star-wars-movies')
        );
        if (movieFavourites) {
            setFavourites(movieFavourites);
        }
    }, [])

    const saveToLocalStorage = (items) => {
        localStorage.setItem('star-wars-movies', JSON.stringify(items));
    };

    const addFavouriteMovie = (movie) => {
        if (!favourites.includes(movie)) {
            const newFavouriteList = [...favourites, movie];
            setFavourites(newFavouriteList);
            saveToLocalStorage(newFavouriteList);
        } else
            alert('movie already in favorites')
    };

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
            (favourite) => favourite.episode_id !== movie.episode_id
        );
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    return (
        <Container className='movies'>
            <div className="row">

                <div className="col">
                    <h2 className='movie-header'>STAR WARS MOVIES</h2>
                </div>

                <div className="col-md-auto">
                    <h2 className='show-favourites-modal' onClick={() => {
                        setShowFavModal(true)
                    }}>
                        <BsFillHeartFill/>
                    </h2>
                    <FavouritesModal showFavModal={showFavModal}
                                     setShowFavModal={setShowFavModal}
                                     favourites={favourites}
                                     handleFavouritesClick={removeFavouriteMovie}
                    />
                </div>

            </div>

            <Row className='movie-list'>
                <MovieList
                    movies={movies}
                    handleFavouritesClick={addFavouriteMovie}
                    showFavModal={showFavModal}
                    favouriteComponent={AddFavourites}
                />
            </Row>

        </Container>
    );
};

export default App;
