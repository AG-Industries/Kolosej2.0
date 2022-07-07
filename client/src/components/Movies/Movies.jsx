import React, {useEffect, useState} from 'react'
import { getAll } from '../../actions/movies'
import Movie from './Movie';

const Movies = ({ date }) => {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAll().then(movies => setMovies(movies));
  }, []);

  return (
    <div className='flex items-center flex-col px-10'>
      {movies.map((movie) => (
        <Movie date={date} key={movie.id} movie={movie}/>
      ))}
    </div>
  )
}

export default Movies