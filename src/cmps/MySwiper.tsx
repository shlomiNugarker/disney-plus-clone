import Image from 'next/image'
import styles from '../styles/cmps/_my-swiper.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
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
      <Swiper
        className="mySwiper"
        spaceBetween={25}
        slidesPerView={6}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {movies &&
          movies.map((movie, idx) => (
            <SwiperSlide key={movie.id} style={{ width: '120px' }}>
              <MoviePreview
                movie={movie}
                setMovieDetailsToShow={setMovieDetailsToShow}
              ></MoviePreview>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  )
}
