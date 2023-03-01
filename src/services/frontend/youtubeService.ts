import { storageService } from '../frontend/storageService'

const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/api/' : '//localhost:3000/api/'

export const youTubeService = {
  getVideos,
}

async function getVideos(term: string) {
  try {
    const termVideosMap = storageService.load('videosDB') || {}
    if (termVideosMap[term]) {
      return Promise.resolve(termVideosMap[term])
    }

    const res = await fetch(`${BASE_URL}/videos`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ term }),
    })

    const videos = await res.json()

    termVideosMap[term] = videos
    storageService.store('videosDB', termVideosMap)

    return videos
  } catch (err) {
    console.log(err)
  }
}
