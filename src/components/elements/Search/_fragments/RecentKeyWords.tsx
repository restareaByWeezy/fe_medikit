import Badge from 'components/common/Badge'
import Text from 'components/common/Text'
import Col from 'components/common/_Grid/Col'
import Row from 'components/common/_Grid/Row'
import { styled } from 'styles/globalStitches'

const RecentKeyWords = () => {
  return (
    <Wrapper>
      <Row css={{ m: '20px 0 22px' }} justify="spaceBetween">
        <Text size="h4" weight="bold">
          최근 검색어
        </Text>
        <DeleteBtn>모두 지우기</DeleteBtn>
      </Row>
      <RecentTagList>
        <Badge title="무릎이 아파요" iconPosition="suffix" />
      </RecentTagList>
    </Wrapper>
  )
}

export default RecentKeyWords

const Wrapper = styled(Col, {})

const DeleteBtn = styled('button', {
  color: '$secondary_text',
  fontSize: '$BODY2',
  fontWeight: '$semiBold',
})

const RecentTagList = styled('div', {})
