import { MouseEvent } from 'react'

import { Card, CardContent, Stack } from '@mui/material'
import IconA from 'assets/svg/iconA.svg'
import IconHeart from 'assets/svg/iconHeart.svg'
import IconHeartFilled from 'assets/svg/iconHeartFilled.svg'
import IconMessage from 'assets/svg/iconMessage.svg'
import IconQ from 'assets/svg/iconQ.svg'
import { useRouter } from 'next/router'
import { styled } from 'styles/globalStitches'

import Text from '../Text'
import Row from '../_Grid/Row'

export interface QaCardProps {
  className: string
  category: string
  question: string
  answer: string
  answerNum: string
  likes: string
  isLiked: boolean
  id: string
}

const QaCard = ({
  className,
  category,
  question,
  answer,
  answerNum,
  likes,
  isLiked,
  id,
}: QaCardProps) => {
  const router = useRouter()
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const dataId = e.currentTarget.dataset.id
    router.push(`/qnadetail/${dataId}`)
  }

  return (
    <CustomCard
      className={className}
      data-id={id}
      onClick={handleClick}
      style={{ boxShadow: 'none' }}
    >
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
    </CustomCard>
  )
}

export default QaCard

// STYLE ///////////////

const CustomCard = styled(Card, {
  cursor: 'pointer',

  ['&.blured']: {
    pointerEvents: 'none',
    WebkitMaskImage:
      'linear-gradient(180deg, rgba(255,255,255,1), rgba(255,255,255,0))',
  },
})

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
