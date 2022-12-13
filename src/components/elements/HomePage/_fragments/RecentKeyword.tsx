import Badge from 'components/common/Badge'
import Col from 'components/common/_Grid/Col'

import { Title } from './_style'

const RecentKeyword = () => {
  return (
    <Col css={{ marginTop: '64px', marginBottom: '76px' }}>
      <Title>실시간 검색 키워드</Title>
      <Col css={{ margin: '20px 0', gap: '24px' }}>
        <Badge
          css={{ width: 'fit-content' }}
          iconPosition="prefix"
          title="무릎이 아파요"
        />
        <Badge
          css={{ width: 'fit-content' }}
          iconPosition="prefix"
          title="무릎이 아파요"
        />
        <Badge
          css={{ width: 'fit-content' }}
          iconPosition="prefix"
          title="무릎이 아파요"
        />
      </Col>
    </Col>
  )
}

export default RecentKeyword
