import { Dispatch, SetStateAction, useState } from 'react'

import MoviePreview from './MoviePreview'
import Movie from '@/interfaces/movie'
import { AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'
import VideoPreview from './VideoPreview'
import styles from '../styles/cmps/_movie-details.module.scss'

type Props = {
  movie: Movie
  setMovieDetailsToShow: Dispatch<SetStateAction<Movie | null>>
}

export default function MovieDetails({ movie, setMovieDetailsToShow }: Props) {
  const [isTrailerShown, setIsTrailerShown] = useState(false)

  const backdropPath =
    'https://image.tmdb.org/t/p/original/' + movie.backdrop_path

  const year = new Date(movie.release_date).getFullYear()

  return (
    <div
      className={styles.bg}
      onClick={() => {
        console.log('sfgsdfg')

        setMovieDetailsToShow(null)
      }}
    >
      <div className={styles['movie-details']}>
        <AiOutlineClose
          onClick={() => {
            setMovieDetailsToShow(null)
          }}
        />
        <span>
          {!isTrailerShown && (
            <Image
              loader={() => backdropPath}
              src={backdropPath}
              alt=""
              width={100}
              height={100}
            />
          )}

          {isTrailerShown && <VideoPreview movie={movie} />}
        </span>

        <div className={styles.details}>
          <p>{movie?.title}</p>
          <div>
            <button onClick={() => setIsTrailerShown(!isTrailerShown)}>
              Watch Trailer
            </button>
          </div>

          <div>
            <span>
              {movie.vote_average}, {year}
            </span>
          </div>

          <p className={styles.overview}>{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}
