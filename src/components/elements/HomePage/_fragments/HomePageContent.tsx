import { useState } from 'react'

import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import Button from 'components/common/Button'
import { QaCardProps } from 'components/common/Cards/QaCard'
import QaCardList from 'components/common/Cards/QaCardList'
import FloatingBtn from 'components/common/FloatingBtn'
import SearchBar from 'components/common/Input'
import { fetchQuestions } from 'services'
import { styled } from 'styles/globalStitches'

import RecentKeyword from './RecentKeyword'
import RecentQuestion from './RecentQuestion'

import { Title } from './_style'

const HomePageContent = () => {
  const [moreViewClicked, setMoreViewClicked] = useState(false)

  const { data: questions } = useQuery<QaCardProps[]>(
    ['questions'],
    fetchQuestions,
  )

  const handleClick = () => {
    if (!moreViewClicked) {
      setMoreViewClicked(true)
    }
  }

  return (
    <>
      <Wrapper>
        <SearchBar />
        <QaWrapper>
          <Title>추천 메디킷</Title>
          <QaCardList questions={questions} moreViewClicked={moreViewClicked} />
        </QaWrapper>
        <ViewMoreBtn
          className={!moreViewClicked ? 'blured' : ''}
          css={{ marginTop: '10px' }}
          sizes="md"
          radii="round"
          color="secondary"
          onClick={handleClick}
        >
          추천 메디킷 더보기
        </ViewMoreBtn>
        <FloatingBtnWrapper>
          <FloatingBtn />
        </FloatingBtnWrapper>
      </Wrapper>
      <RecentKeyword />
      <RecentQuestion questions={questions} />
    </>
  )
}

export default HomePageContent

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['questions'], fetchQuestions)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

// STYLE ///////////////////

const Wrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

const QaWrapper = styled('div', {
  width: '100%',
  marginTop: '28px',
})

const ViewMoreBtn = styled(Button, {
  ['&.blured']: {
    position: 'absolute',
    bottom: 0,
  },
})

const FloatingBtnWrapper = styled('div', {
  '& button': {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
  },
})
