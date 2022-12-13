import { Card, CardContent, Stack } from '@mui/material'
import IconA from 'assets/svg/iconA.svg'
import IconHeart from 'assets/svg/iconHeart.svg'
import IconHeartFilled from 'assets/svg/iconHeartFilled.svg'
import IconMessage from 'assets/svg/iconMessage.svg'
import IconQ from 'assets/svg/iconQ.svg'
import { styled } from 'styles/globalStitches'

import Text from '../Text'
import Row from '../_Grid/Row'

export interface QaCardProps {
  category: string
  question: string
  answer: string
  answerNum: string
  likes: string
  isLiked: boolean
}

const QaCard = ({
  category,
  question,
  answer,
  answerNum,
  likes,
  isLiked,
}: QaCardProps) => {
  return (
    <Card style={{ boxShadow: 'none' }}>
      <CardContent style={{ width: '100%' }}>
        <Stack spacing={'20px'}>
          <Text size="body2" weight="bold">
            {category}
          </Text>
          <Question>
            <IconQ />
            <Text size="body1" weight="semiBold">
              {question}
            </Text>
            <Date size="body3" color="tertiary">
              6일 전
            </Date>
          </Question>
          {answer && (
            <Answer>
              <IconA /> <Text size="body1">{answer}</Text>
            </Answer>
          )}
          <Row css={{ gap: '5px' }}>
            <Row
              align="center"
              css={{
                '& svg': {
                  marginTop: '5px',
                  height: '24px',
                  verticalAlign: 'center',
                  marginRight: '5px',
                },
              }}
            >
              <IconMessage />
              <Text color="secondary" size="body2">
                {answerNum}
              </Text>
            </Row>
            <Row
              align="center"
              css={{
                '& svg': {
                  marginTop: '5px',
                  height: '24px',
                  verticalAlign: 'center',
                  marginRight: '5px',
                },
              }}
            >
              {isLiked ? <IconHeartFilled /> : <IconHeart />}
              <Text color="secondary" size="body2">
                {likes}
              </Text>
            </Row>
          </Row>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default QaCard

// STYLE ///////////////

const Question = styled('div', {
  '& svg': {
    display: 'inline-block',
    verticalAlign: 'bottom',
    marginRight: '5px',
  },
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  height: 'auto',
})

const Answer = styled('div', {
  '& svg': {
    display: 'inline-block',
    verticalAlign: 'bottom',
    marginRight: '5px',
  },
  display: 'flex',
  alignItems: 'center',
  height: 'auto',
})

const Date = styled(Text, {
  position: 'absolute',
  right: '0',
  top: '100%',
})
