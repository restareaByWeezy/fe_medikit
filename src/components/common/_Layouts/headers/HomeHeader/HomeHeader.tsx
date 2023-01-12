import { Logo } from 'assets/svg'
import Row from 'components/common/_Grid/Row'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { styled } from 'styles/globalStitches'

const HomeHeader = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/')
  }

  return (
    <Wrapper>
      <LogoWrapper onClick={handleClick}>
        <Logo />
      </LogoWrapper>
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
    cursor: 'pointer',
  },
})

const LogoWrapper = styled('div', {
  cursor: 'pointer',
})
