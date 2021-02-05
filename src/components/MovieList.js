import React from 'react';
import AddFavourite from './AddFavourites'

const MovieList = (props) => {

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container' key={index}>
					<img src={movie.image} alt='movie'></img>
					<p>{movie.title}</p>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<props.favouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
