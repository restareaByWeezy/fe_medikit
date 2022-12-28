import BackBtn from 'components/common/Button/BackBtn'
import Text from 'components/common/Text'
import { styled } from 'styles/globalStitches'
interface BoardHeaderProps {
  title?: string
}

const BoardHeader = ({ title }: BoardHeaderProps) => {
  return (
    <Wrapper>
      <BackBtn />
      <Text size="h4" weight="semiBold">
        {title}
      </Text>
    </Wrapper>
  )
}

export default BoardHeader

const Wrapper = styled('header', {
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  height: '57px',
  backgroundColor: '$white',
  borderBottom: '1px solid $GRAY2',

  ['button']: {
    position: 'absolute',
    top: '50%',
    left: '20px',
    background: 'transparent',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
  },

  ['h1']: {
    fontSize: '$H4',
  },
})
