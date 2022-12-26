import axios from 'axios'

export const fetchQuestions = async () => {
  const result = await axios.get('/api/questions')
  if (result) {
    return result.data
  }
}

export const fetchQuestionDetail = async (
  id: string | undefined | string[],
) => {
  console.log(id, typeof id)

  const result = await axios.get(`/api/qnadetail/${id}`)
  if (result) {
    return result.data
  }
}
