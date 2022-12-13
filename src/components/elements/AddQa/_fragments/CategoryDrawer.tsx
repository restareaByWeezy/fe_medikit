import { Dispatch, SetStateAction } from 'react'

import { SwipeableDrawer } from '@mui/material'
import { styled } from 'styles/globalStitches'

import TagList from './CategoryList'

interface TagDrawerProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  setCategory: Dispatch<SetStateAction<string>>
}

const iOS =
  typeof navigator !== 'undefined' &&
  /iPad|iPhone|iPod/.test(navigator.userAgent)

const CategoryDrawer = ({ open, setOpen, setCategory }: TagDrawerProps) => {
  const handleToggle = () => {
    setOpen(prev => !prev)
  }

  return (
    <Drawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      anchor={'bottom'}
      open={open}
      onOpen={handleToggle}
      onClose={handleToggle}
    >
      <TagList setCategory={setCategory} setOpen={setOpen} />
    </Drawer>
  )
}

export default CategoryDrawer

const Drawer = styled(SwipeableDrawer, {
  ['& .MuiPaper-root']: {
    backgroundColor: 'transparent',
  },

  '::-webkit-scrollbar': {
    display: 'none',
  },
})
