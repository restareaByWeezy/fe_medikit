import Button from 'components/common/Button'
import Text from 'components/common/Text'
import Col from 'components/common/_Grid/Col'
import Row from 'components/common/_Grid/Row'
import dayjs from 'dayjs'
import { styled } from 'styles/globalStitches'

import { Comment } from './QnaDetailContent'

interface CommentItemProps {
  comment: Comment
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const { commentor, contents, selected, commentedAt } = comment

  const date = dayjs(commentedAt)
  const now = dayjs()
  const days = now.diff(date, 'd')
  console.log(date, now)

  return (
    <Wrapper>
      <Row justify="spaceBetween">
        <Text size="body2" weight="bold">
          {commentor}
        </Text>
        <Text size="body2">{days}일 전</Text>
      </Row>
      <Contents>
        <Text as="p">{contents}</Text>
      </Contents>
      <Button>답변 채택하기</Button>
    </Wrapper>
  )
}

export default CommentItem

// STYLE //////////////////////////////////////////

const Wrapper = styled(Col, {
  gap: '14px',
  p: '20px',
  backgroundColor: '$white',
  border: '1px solid $GRAY2',
  br: '6px',
  lineHeight: '23px',
})

const Contents = styled(Col, {})
