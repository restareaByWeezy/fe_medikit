import { Fab } from '@mui/material'
import IconWrite from 'assets/svg/iconWrite.svg'
import Link from 'next/link'

const FloatingBtn = () => {
  return (
    <Link href="/addqa">
      <Fab color="primary" aria-label="add">
        <IconWrite />
      </Fab>
    </Link>
  )
}

export default FloatingBtn
