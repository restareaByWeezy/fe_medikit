import Logo from 'assets/svg/logo.svg'
import Row from 'components/common/_Grid/Row'
import Link from 'next/link'

import { styled } from 'styles/globalStitches'

const HomeHeader = () => {
  return (
    <Wrapper>
      <Logo />
      <Link href="/signin">로그인</Link>
    </Wrapper>
  )
}

export default HomeHeader

// STYLE /////////////////////////////
const Wrapper = styled(Row, {
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '60px',

  '& a': {
    color: '$secondary_text',
    fontSize: '$BODY1',
  },
})
