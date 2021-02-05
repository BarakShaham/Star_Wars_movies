import movieList from "../constants/MovieImageList";

export const GetMovieRequest = async () => {
    const endpoint = `https://swapi.dev/api/films/`;
    const fetchMovies = await (await fetch(endpoint)).json()
    fetchMovies.results.map((movie, index) => {
        movie.image = movieList[index]
    })
    return fetchMovies
};
