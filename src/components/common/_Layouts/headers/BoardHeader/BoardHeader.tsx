import BackBtn from 'components/common/Button/BackBtn'
import Text from 'components/common/Text'
import { useRouter } from 'next/router'
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
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '57px',
  backgroundColor: '$white',

  ['button']: {
    position: 'absolute',
    top: '50%',
    left: '20px',
    background: 'transparent',
    border: 'none',
    padding: '0px',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
  },

  ['h1']: {
    fontSize: '$H4',
  },
})
