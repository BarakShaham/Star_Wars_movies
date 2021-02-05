import React from 'react';
import Modal from 'react-modal'
import MovieList from "./MovieList";
import RemoveFavourites from "./RemoveFavourites";

const FavouritesModal = ({showFavModal, setShowFavModal, favourites, handleFavouritesClick}) => {

    return (
        <div className='ReactModal__Content'>
            <Modal isOpen={showFavModal} style={{}}>
                <button className='close-modal' onClick={() => setShowFavModal(false)}> X</button>
                <div className='movie-list-container'>
                <MovieList
                    movies={favourites}
                    handleFavouritesClick={handleFavouritesClick}
                    favouriteComponent={RemoveFavourites}
                    showFavModal={showFavModal}
                />
                </div>
            </Modal>
        </div>
    )
};

export default FavouritesModal;
