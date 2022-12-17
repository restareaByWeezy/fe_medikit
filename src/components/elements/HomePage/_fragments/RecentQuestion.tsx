import { QaCardProps } from 'components/common/Cards/QaCard'
import QaCardList from 'components/common/Cards/QaCardList'
import Col from 'components/common/_Grid/Col'

import { Title } from './_style'

interface RecentQuestionProps {
  questions: QaCardProps[] | undefined
}

const RecentQuestion = ({ questions }: RecentQuestionProps) => {
  return (
    <Col>
      <Title>실시간 질문</Title>
      <QaCardList questions={questions} moreViewClicked={true} />
    </Col>
  )
}

export default RecentQuestion
