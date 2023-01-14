import { styled } from 'styles/globalStitches'

interface BoardLayoutProps {
  header?: JSX.Element
  footer?: JSX.Element
  content?: JSX.Element
  noPadding?: boolean
}

const BoardLayout = ({
  header,
  footer,
  content,
  noPadding,
}: BoardLayoutProps) => {
  return (
    <Container>
      {header}
      <Wrapper noPadding={noPadding}>{content}</Wrapper>
      {footer}
    </Container>
  )
}

export default BoardLayout

const Wrapper = styled('div', {
  width: '100%',
  height: 'calc(100vh - 57px)',
  backgroundColor: '$GRAY1',
  fontSize: '18px',
  padding: '24px 20px',

  variants: {
    noPadding: {
      true: {
        padding: '0px',
      },
    },
  },
})

const Container = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: '480px',
})
