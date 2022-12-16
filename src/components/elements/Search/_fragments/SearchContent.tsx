import { ChangeEvent, useState } from 'react'

import { IconCloseGray, IconSearch } from 'assets/svg'
import BackBtn from 'components/common/Button/BackBtn'
import Col from 'components/common/_Grid/Col'
import Row from 'components/common/_Grid/Row'
import { styled } from 'styles/globalStitches'

import RecentKeyWords from './RecentKeyWords'
import TrendKeyWords from './TrendKeyWords'

const SearchContent = () => {
  const [searchText, setSearchText] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value)
  }
  const handleClose = () => {
    setSearchText('')
  }

  return (
    <>
      <SearchBarWrapper>
        <BackBtn />
        <SearchInput
          placeholder="어떻게 아프신가요?"
          value={searchText}
          onChange={handleChange}
        />
        {searchText.length > 0 && (
          <DeleteButton onClick={handleClose}>
            <IconCloseGray />
          </DeleteButton>
        )}
        <IconSearch data-search />
      </SearchBarWrapper>
      <Wrapper>
        <RecentKeyWords />
        <TrendKeyWords />
      </Wrapper>
    </>
  )
}

export default SearchContent

// STYLE ///////////////////////////

const Wrapper = styled(Col, {
  p: '20px',
})

const DeleteButton = styled('button', {
  ['& svg']: {
    position: 'absolute',
    right: '60px',
    top: '50%',
    transform: 'translate(-50%,-50%)',
  },
})

const SearchBarWrapper = styled(Row, {
  position: 'relative',
  width: '100%',
  height: '57px',
  padding: '16px 20px',
  borderBottom: '1px solid $GRAY2',
  background: '$white',
  gap: '10px',

  ['& [data-search]']: {
    position: 'absolute',
    right: '25px',
    top: '50%',
    transform: 'translate(-50%,-50%)',
  },
})

const SearchInput = styled('input', {
  width: '100%',
  height: '100%',
  border: 'none',
})
