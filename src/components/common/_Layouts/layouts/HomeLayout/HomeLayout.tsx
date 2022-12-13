import { styled } from 'styles/globalStitches'

import HomeHeader from '../../headers/HomeHeader/HomeHeader'

interface HomeLayoutProps {
  header?: JSX.Element
  footer?: JSX.Element
  content?: JSX.Element
}

const HomeLayout = ({
  header = <HomeHeader />,
  footer,
  content,
}: HomeLayoutProps) => {
  return (
    <Wrapper>
      {header}
      <div>{content}</div>
      {footer}
    </Wrapper>
  )
}

export default HomeLayout

// STYLE  ////////////////////////////
const Wrapper = styled('div', {
  width: '100%',
  height: '100%',
  padding: '20px',
  backgroundColor: '#f7f8f9',
})
