import { IconBack } from 'assets/svg'
import { useRouter } from 'next/router'

const BackBtn = () => {
  const router = useRouter()

  return (
    <button onClick={() => router.back()}>
      <IconBack />
    </button>
  )
}

export default BackBtn
