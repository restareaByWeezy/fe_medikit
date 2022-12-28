import Col from 'components/common/_Grid/Col'
import { styled } from 'styles/globalStitches'

import CommentItem from './CommentItem'
import { Comment } from './QnaDetailContent'

interface CommentListProps {
  comments: Comment[]
}

const CommentList = ({ comments }: CommentListProps) => {
  const commentList = comments.map(comment => (
    <CommentItem key={comment.commentId} comment={comment} />
  ))

  return <Wrapper>{commentList}</Wrapper>
}

export default CommentList

// STYLE //////////////////////////////////////////

const Wrapper = styled(Col, {
  padding: '20px',
  gap: '20px',
})
