import { useEffect } from 'react'

import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import Text from 'components/common/Text'
import Col from 'components/common/_Grid/Col'
import Row from 'components/common/_Grid/Row'
import {
  IconHeartFilled,
  IconMessage,
  IconShare,
} from 'components/common/_Icons'
import { useRouter } from 'next/router'
import { fetchQuestionDetail } from 'services'
import { styled } from 'styles/globalStitches'

import CommentList from './CommentList'

export interface Comment {
  commentId: string
  commentor: string
  contents: string
  selected: boolean
}
interface DetailProps {
  questionId: string
  category: string
  title: string
  content: string
  tags: string[]
  likes: number
  liked: boolean
  comments: Comment[]
}

const QnaDetailContent = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: detail } = useQuery<DetailProps>(['questionDetail'], () =>
    fetchQuestionDetail(id),
  )

  useEffect(() => {
    console.log(detail)
  }, [detail])

  const tagList = detail?.tags?.map(tag => (
    <Text key={tag} color="main">
      #{tag}
    </Text>
  ))

  return (
    <>
      <Wrapper>
        <Category size="body2">{detail?.category}</Category>
        <Title size="h2" weight="semiBold" as="h1">
          {detail?.title}
        </Title>
        <Date size="body2">2022</Date>
        <Content size="body1" color="secondary" as="p">
          {detail?.content}
        </Content>
        <Tags>{tagList}</Tags>
        <IconRow align="center" css={{ gap: '5px' }}>
          <Row>
            <IconMessage />
            <Text color="secondary" size="body2">
              {detail?.comments?.length}
            </Text>
          </Row>

          <Row>
            <Row>
              <IconHeartFilled />
              <Text
                css={{ marginRight: '12px' }}
                color="secondary"
                size="body2"
              >
                {detail?.likes}
              </Text>
              <IconShare />
            </Row>
          </Row>
        </IconRow>
      </Wrapper>
      {detail?.comments && <CommentList comments={detail?.comments} />}
    </>
  )
}

export default QnaDetailContent

export async function getServerSideProps(context: { params: { id: string } }) {
  const queryClient = new QueryClient()
  const { id } = context.params
  await queryClient.prefetchQuery(['questionDetail'], () =>
    fetchQuestionDetail(id),
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

// STYLE /////////////////////////////////////

const Wrapper = styled(Col, {
  backgroundColor: '$white',
  padding: '24px 20px',
})

const Category = styled(Text, {
  marginBottom: '16px',
  fontSize: '$BODY2',
})

const Title = styled(Text, {
  marginBottom: '12px',
})

const Date = styled(Text, {
  marginBottom: '24px',
})

const Content = styled(Text, {
  flex: 1,
  marginBottom: '12px',
  lineHeight: '23px',
})

const Tags = styled(Row, {
  gap: '$2',
  marginBottom: '34px',
})

IconShare.toString = () => '.icon-share'

const IconRow = styled(Row, {
  justifyContent: 'space-between',

  '& div': { alignItems: 'center' },

  '& svg': {
    marginTop: '5px',
    height: '24px',
    verticalAlign: 'center',
    marginRight: '5px',
    cursor: 'pointer',
  },
})
