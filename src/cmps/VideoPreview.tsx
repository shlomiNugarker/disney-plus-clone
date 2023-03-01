import Image from 'next/image'
import styles from '../styles/cmps/_video-preview.module.scss'
import { useEffect, useState } from 'react'
import Movie from '@/interfaces/movie'
import { Series } from '@/interfaces/series'
import { youTubeService } from '@/services/frontend/youtubeService'

type Props = {
  movie: Movie | Series | any
}

export default function VideoPreview({ movie }: Props) {
  const [videos, setVideos] = useState<any>()

  useEffect(() => {
    ;(async () => {
      const vids = await youTubeService.getVideos(movie.title || movie.name)
      setVideos(vids)
    })()
  }, [movie.name, movie.title])

  return (
    <section className={styles['video-preview']}>
      {videos && (
        <iframe
          src={`https://www.youtube.com/embed/${videos[0].id}?controls=0`}
          width={600}
          height={600}
        ></iframe>
      )}
    </section>
  )
}
