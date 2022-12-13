import { Stack } from '@mui/system'
import { useQuery } from '@tanstack/react-query'
import { fetchQuestions } from 'services'

import QaCard, { QaCardProps } from './QaCard'

const QaCardList = () => {
  const { data: questions } = useQuery<QaCardProps[]>(
    ['questions'],
    fetchQuestions,
  )

  const list = questions?.map(qa => (
    <QaCard
      key={qa.question + qa.answer}
      category={qa.category}
      question={qa.question}
      answer={qa.answer}
      answerNum={qa.answerNum}
      likes={qa.likes}
      isLiked={qa.isLiked}
    />
  ))

  return (
    <>
      <Stack style={{ marginTop: '24px' }} spacing={'16px'}>
        {list}
      </Stack>
    </>
  )
}

export default QaCardList
