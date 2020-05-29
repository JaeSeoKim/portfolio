import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      query: { name }
    } = req
    const { data: contributionData } = await axios.get(
      `https://github-contributions-api.now.sh/v1/${name}`
    )
    res.status(200).json(contributionData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: 'error' })
  }
}

export default handler
