import { useState } from 'react'

import Button from 'components/common/Button'
import QaCardList from 'components/common/Cards/QaCardList'
import FloatingBtn from 'components/common/FloatingBtn'
import SearchBar from 'components/common/Input'
import { styled } from 'styles/globalStitches'

import RecentKeyword from './RecentKeyword'
import RecentQuestion from './RecentQuestion'
import { Title } from './_style'

const HomePageContent = () => {
  const [moreViewClicked, setMoreViewClicked] = useState(false)

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
          <QaCardList moreViewClicked={moreViewClicked} />
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
      <RecentQuestion />
    </>
  )
}

export default HomePageContent

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
