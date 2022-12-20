import Col from 'components/common/_Grid/Col'
import { styled } from 'styles/globalStitches'

import RecentKeyWords from './RecentKeyWords'
import TrendKeyWords from './TrendKeyWords'

const SearchContent = () => {
  return (
    <Wrapper>
      <RecentKeyWords />
      <TrendKeyWords />
    </Wrapper>
  )
}

export default SearchContent

// STYLE ///////////////////////////

const Wrapper = styled(Col, {})
