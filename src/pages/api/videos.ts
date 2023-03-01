import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case 'POST':
      {
        try {
          const { term } = req.body

          const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API

          const results = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${apiKey}&q=${term} Official trailer`
          )

          const json = await results.json()

          const videos = json.items.map((video: any) => ({
            id: video.id.videoId,
            title: video.snippet.title,
            img: {
              url: video.snippet.thumbnails.default.url,
              width: video.snippet.thumbnails.default.width,
              height: video.snippet.thumbnails.default.height,
            },
          }))

          res.send(videos)
        } catch (err: any) {
          console.log(err)
          res.status(500).send({ err: err.message })
        }
      }
      break

    default:
      throw `Unexpected request method : ${req.method}`
  }
}
