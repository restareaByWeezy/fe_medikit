import { ChangeEvent, useState } from 'react'

import { IconCloseGray, IconSearch } from 'assets/svg'
import BackBtn from 'components/common/Button/BackBtn'
import Row from 'components/common/_Grid/Row'
import { styled } from 'styles/globalStitches'

const SearchHeader = () => {
  const [searchText, setSearchText] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value)
  }

  const handleClose = () => {
    setSearchText('')
  }

  return (
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
  )
}

export default SearchHeader

// STYLE //////////////////////////

const DeleteButton = styled('button', {
  ['& svg']: {
    position: 'absolute',
    right: '60px',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
})

const SearchBarWrapper = styled(Row, {
  position: 'relative',
  width: '100%',
  height: '57px',
  padding: '16px 20px',
  borderBottom: '1px solid $primary',
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
