import IconSearch from 'assets/svg/iconSearch.svg'
import Link from 'next/link'
import { styled } from 'styles/globalStitches'

const SearchBar = () => {
  const InputWrapper = styled('div', {
    position: 'relative',
    display: 'flex',
    width: '100%',
    cursor: 'pointer',
  })

  const Search = styled('span', {
    width: '100%',
    padding: '9px 20px',
    borderRadius: '20px',
    border: '1px solid $primary',
    color: '$tertiary_text',
  })

  const CustomIconSearch = styled(IconSearch, {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  })

  return (
    <Link href="/search">
      <InputWrapper>
        <Search>어떻게 아프신가요?</Search>
        <CustomIconSearch />
      </InputWrapper>
    </Link>
  )
}

export default SearchBar
