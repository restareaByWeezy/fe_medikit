import { styled } from 'styles/globalStitches'

import SearchHeader from './headers/\bSearchHeader/SearchHeader'

interface SearchLayoutProps {
  header?: JSX.Element
  footer?: JSX.Element
  content?: JSX.Element
}

const SearchLayout = ({
  header = <SearchHeader />,
  footer,
  content,
}: SearchLayoutProps) => {
  return (
    <>
      {header}
      <Wrapper>{content}</Wrapper>
      {footer}
    </>
  )
}

export default SearchLayout

const Wrapper = styled('div', {
  width: '100%',
  height: 'calc(100vh - 57px)',
  backgroundColor: '$GRAY1',
  fontSize: '18px',
  padding: '20px',
})
