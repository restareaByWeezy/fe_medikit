import { styled } from 'styles/globalStitches'

import styles from './BoardLayout.module.scss'

interface HomeLayoutProps {
  header?: JSX.Element
  footer?: JSX.Element
  content?: JSX.Element
}

const BoardLayout = ({
  //
  header,
  footer,
  content,
}: HomeLayoutProps) => {
  return (
    <>
      {header}
      <Wrapper>{content}</Wrapper>
      {footer}
    </>
  )
}

export default BoardLayout

const Wrapper = styled('div', {
  width: '100%',
  height: 'calc(100vh - 57px)',
  backgroundColor: '$GRAY1',
  fontSize: '18px',
  padding: '24px 20px',
})
