import styles from '../styles/cmps/_my-swiper.module.scss'

import Movie from '@/interfaces/movie'
import MoviePreview from './MoviePreview'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  movies: Movie[]
  setMovieDetailsToShow: Dispatch<SetStateAction<Movie | null>>
}

export default function MySwiper({ movies, setMovieDetailsToShow }: Props) {
  return (
    <section className={styles.swiper}>
      {movies &&
        movies.map((movie, idx) => (
          <MoviePreview
            key={movie.id}
            movie={movie}
            setMovieDetailsToShow={setMovieDetailsToShow}
          ></MoviePreview>
        ))}
    </section>
  )
}
