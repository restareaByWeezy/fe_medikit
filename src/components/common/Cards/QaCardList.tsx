import { Stack } from '@mui/system'
import { useQuery } from '@tanstack/react-query'
import { fetchQuestions } from 'services'

import QaCard, { QaCardProps } from './QaCard'

interface QaCardListProps {
  moreViewClicked: boolean
}

const QaCardList = ({ moreViewClicked }: QaCardListProps) => {
  const { data: questions } = useQuery<QaCardProps[]>(
    ['questions'],
    fetchQuestions,
  )

  const list = questions?.map((qa, idx) => {
    const { id, question, answer, category, answerNum, likes, isLiked } = qa

    if (!moreViewClicked && idx > 3) {
      return
    }

    return (
      <QaCard
        className={!moreViewClicked && idx === 3 ? 'blured' : ''}
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
