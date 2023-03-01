import axios from 'axios'
import { storageService } from './storageService'

export const youTubeService = {
  getVideos,
}

getVideos()

async function getVideos(term: string = 'Dilwale Dulhania Le Jayenge') {
  try {
    const termVideosMap = storageService.load('videosDB') || {}
    if (termVideosMap[term]) {
      return Promise.resolve(termVideosMap[term])
    }

    const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${apiKey}&q=${term} Official trailer`
    )

    const videos = res.data.items.map((video: any) => ({
      id: video.id.videoId,
      title: video.snippet.title,
      img: {
        url: video.snippet.thumbnails.default.url,
        width: video.snippet.thumbnails.default.width,
        height: video.snippet.thumbnails.default.height,
      },
    }))
    termVideosMap[term] = videos
    storageService.store('videosDB', termVideosMap)
    return videos
  } catch (err) {
    console.log(err)
  }
}
