import Badge from 'components/common/Badge'
import Text from 'components/common/Text'
import Col from 'components/common/_Grid/Col'
import Row from 'components/common/_Grid/Row'
import { styled } from 'styles/globalStitches'

const TrendKeyWords = () => {
  return (
    <Wrapper>
      <Row css={{ margin: '20px 0 22px' }} justify="spaceBetween">
        <Text size="h4" weight="bold">
          실시간 검색 키워드
        </Text>
      </Row>
      <TrendTagList>
        <Badge title="무릎이 아파요" iconPosition="suffix" />
      </TrendTagList>
    </Wrapper>
  )
}

export default TrendKeyWords

const Wrapper = styled(Col, {})

const TrendTagList = styled('div', {})
