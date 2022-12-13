import { ChangeEvent, useState } from 'react'

import { IconCloseGray, IconSearch, IconBack } from 'assets/svg'
import Col from 'components/common/_Grid/Col'
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
        <IconBack data-back />
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

const SearchBarWrapper = styled('div', {
  position: 'relative',
  width: '100%',
  height: '57px',
  padding: '16px 20px 16px 60px',
  borderBottom: '1px solid $GRAY2',
  background: '$white',

  ['& [data-back]']: {
    position: 'absolute',
    left: '35px',
    top: '50%',
    transform: 'translate(-50%,-50%)',
  },

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
