import QaCardList from 'components/common/Cards/QaCardList'
import { example } from 'components/common/Cards/constants'
import Col from 'components/common/_Grid/Col'

import { Title } from './_style'

const RecentQuestion = () => {
  return (
    <Col>
      <Title>실시간 질문</Title>
      <QaCardList qaList={example} />
    </Col>
  )
}

export default RecentQuestion
