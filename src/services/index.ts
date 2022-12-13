import axios from 'axios'

export const fetchQuestions = async () => {
  const result = await axios.get('/api/questions')
  if (result) {
    return result.data
  }
}
