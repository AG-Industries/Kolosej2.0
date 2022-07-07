import React, { useEffect, useState } from 'react'
import * as moment from 'moment'

const Movie = ({ movie, date }) => {
  const [movieDates, setMovieDates] = React.useState([])

  useEffect(() => {
    setMovieDates(movie.shows.show.filter(show => show.date === date))
  }, [date]);

  return (
    <div className="p-6 bg-white rounded-lg border w-full h-full flex flex-row justify-evenly text-left mb-10 shadow-2xl">
      <div>
        <img src={movie.poster.$t}/>
      </div>
      <div className='ml-3 w-[50%]'>
        <h1 className='text-4xl font-bold mb-2 text-gray-700'>{movie.title}</h1>
        <h3>{movie.original_title}</h3>
        <h3><span className='font-bold'>Leto:</span> {movie.year}</h3>
        <h3><span className='font-bold'>Trajanje:</span> {movie.duration} minut</h3>
        <h3><span className='font-bold'>Direktor:</span> {movie.director}</h3>
        <h3><span className='font-bold'>Sinhronizacija:</span> {movie.localization === "None" ? 'Ne' : 'Ja'}</h3>
        <h3><span className='font-bold'>Opis:</span> {movie.plot_outline.split(".")[0]}.</h3>
      </div>
      <div>
        <div className='flex flex-col justify-between rounded-xl '>
        {movieDates.length > 0 ?
          movieDates.map((show) => (
            <a href={`https://vstopnice.kolosej.si/WebTicketNet/Performance.aspx?oid=${show.id}`}>
              <div className='flex flex-row rounded-lg bg-blue-300 mb-3 hover:scale-105 transition-all ease-in cursor-pointer'>
                <h1 className='mx-5 my-2'>{show.theater}</h1>
                <h1 className='mx-5 my-2'>{show.time.slice(0,-3)}</h1>
                <h1 className='mx-5 my-2 font-bold rounded-md '>NAKUP</h1>
              </div>
            </a>
          )):
          <div className='bg-red-300 rounded-lg'>
            <h1 className='mx-5 my-2 '>Nema predstave brale</h1>
          </div>
        } 
        </div>
      </div>
    </div>
  )
}

export default Movie