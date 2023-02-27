import { Key } from 'react'
import styles from '../styles/cmps/_movie-list.module.scss'
import MoviePreview from './MoviePreview'

type Props = {
  movies: any
}

export default function MovieList({ movies }: Props) {
  return (
    <section className={styles['movie-list']}>
      {movies &&
        movies.map((movie: any) => <MoviePreview key={movie} movie={movie} />)}
    </section>
  )
}
