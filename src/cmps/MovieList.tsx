import { Dispatch, Key, SetStateAction } from 'react'
import styles from '../styles/cmps/_movie-list.module.scss'
import MoviePreview from './MoviePreview'
import Movie from '@/interfaces/movie'

type Props = {
  movies: Movie[]
  setMovieDetailsToShow: Dispatch<SetStateAction<Movie | null>>
}

export default function MovieList({ movies, setMovieDetailsToShow }: Props) {
  return (
    <section className={styles['movie-list']}>
      {movies &&
        movies.map((movie) => (
          <MoviePreview
            key={movie.id}
            movie={movie}
            setMovieDetailsToShow={setMovieDetailsToShow}
          />
        ))}
    </section>
  )
}
