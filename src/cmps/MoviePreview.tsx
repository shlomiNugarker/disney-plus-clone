import Image from 'next/image'
import styles from '../styles/cmps/_movie-preview.module.scss'
import { Dispatch, SetStateAction, useState } from 'react'
import Movie from '@/interfaces/movie'

type Props = {
  movie: Movie
  setMovieDetailsToShow: Dispatch<SetStateAction<Movie | null>>
}

export default function MoviePreview({ movie, setMovieDetailsToShow }: Props) {
  const posterPath = 'https://image.tmdb.org/t/p/original/' + movie.poster_path

  return (
    <section
      className={styles['movie-preview']}
      onClick={() => {
        setMovieDetailsToShow(movie)
      }}
    >
      <span>
        <Image
          loader={() => posterPath}
          src={posterPath}
          alt=""
          width="20"
          height="20"
          unoptimized={true}
        />
      </span>
    </section>
  )
}
