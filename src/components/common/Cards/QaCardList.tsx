import { Stack } from '@mui/system'
import { useQuery } from '@tanstack/react-query'
import { fetchQuestions } from 'services'

import QaCard, { QaCardProps } from './QaCard'

const QaCardList = () => {
  const { data: questions } = useQuery<QaCardProps[]>(
    ['questions'],
    fetchQuestions,
  )

  const list = questions?.map(qa => {
    const { id, question, answer, category, answerNum, likes, isLiked } = qa

    return (
      <QaCard
        id={id}
        key={id}
        category={category}
        question={question}
        answer={answer}
        answerNum={answerNum}
        likes={likes}
        isLiked={isLiked}
      />
    )
  })

  return (
    <>
      <Stack style={{ marginTop: '24px' }} spacing={'16px'}>
        {list}
      </Stack>
    </>
  )
}

export default QaCardList
