import { questions } from '_constants'
import type { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const router = useRouter()
  const { id } = router.query
  const result = questions.filter(q => q.id === id)

  res.status(200).json(result)
}
