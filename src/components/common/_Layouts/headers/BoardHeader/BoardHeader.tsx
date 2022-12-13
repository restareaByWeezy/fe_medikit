import IconBack from 'assets/svg/iconBack.svg'
import Text from 'components/common/Text'
import { useRouter } from 'next/router'
import { styled } from 'styles/globalStitches'
interface BoardHeaderProps {
  title?: string
}

const BoardHeader = ({ title }: BoardHeaderProps) => {
  const router = useRouter()

  return (
    <Wrapper>
      <button onClick={() => router.back()}>
        <IconBack />
      </button>
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
