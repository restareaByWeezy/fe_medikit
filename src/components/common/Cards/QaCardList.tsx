import { Stack } from '@mui/system'

import QaCard, { QaCardProps } from './QaCard'

interface QaCardListProps {
  moreViewClicked: boolean
  questions: QaCardProps[] | undefined
}

const QaCardList = ({ moreViewClicked, questions }: QaCardListProps) => {
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
