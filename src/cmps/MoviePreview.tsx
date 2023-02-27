import Image from 'next/image'
import styles from '../styles/cmps/_movie-preview.module.scss'
import { useState } from 'react'

type Props = {
  movie: any
}

export default function MoviePreview({ movie }: Props) {
  const [isHover, setIsHover] = useState(false)
  //   const [isMouseLeave, setIsMouseLeave] = useState(true)
  //   const [isMouseOver, setIsMouseOver] = useState(false)

  const backdropPath =
    'https://image.tmdb.org/t/p/original/' + movie.backdrop_path
  const posterPath = 'https://image.tmdb.org/t/p/original/' + movie.poster_path

  const year = new Date(movie.release_date).getFullYear()

  return (
    <section className={styles['movie-preview']}>
      <span
        onMouseOver={() => {
          //   console.log('onMouseOver')
          setIsHover(true)
        }}
        onMouseLeave={() => {
          //   console.log('onMouseLeave')
        }}
      >
        <Image
          loader={() => posterPath}
          src={posterPath}
          alt=""
          width="20"
          height="20"
        />
      </span>

      {isHover && (
        <div
          onMouseLeave={() => {
            setIsHover(false)
          }}
          className={styles['hover-preview']}
        >
          <Image
            loader={() => backdropPath}
            src={backdropPath}
            alt=""
            width={100}
            height={100}
          />

          <div className={styles.details}>
            <p>{movie.title}</p>
            <div>
              <button>Watch Trailer</button>
            </div>

            <div>
              <span>{movie.vote_average}</span>,<span> {year}</span>
            </div>

            <p className={styles.overview}>{movie.overview}</p>
          </div>
        </div>
      )}
    </section>
  )
}
