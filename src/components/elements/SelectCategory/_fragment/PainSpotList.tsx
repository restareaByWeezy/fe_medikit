import React, { Dispatch, MouseEvent } from 'react'

import { Divider, List, ListItem } from '@mui/material'
import { styled } from 'styles/globalStitches'

interface PainSpotListProps {
  open: boolean
  setSelectedCategory: Dispatch<string | undefined>
  setOpen: Dispatch<boolean>
  contentRef: React.RefObject<HTMLUListElement>
}

const PainSpotList = ({
  setOpen,
  open,
  setSelectedCategory,
  contentRef,
}: PainSpotListProps) => {
  //FIX: test
  const testArr = [1, 2, 3]

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    const text = e.currentTarget.dataset.text as string
    setSelectedCategory(text && text)
    setOpen(false)
  }

  const list = testArr.map((v, idx) => (
    <React.Fragment key={v}>
      <ListItem data-text={v} onMouseDown={handleClick}>
        {v}
      </ListItem>
      {idx !== testArr.length - 1 && <Divider />}
    </React.Fragment>
  ))

  return <>{open && <CustomList ref={contentRef}>{list}</CustomList>}</>
}

export default PainSpotList

const CustomList = styled(List, {
  position: 'absolute !important',
  top: '100%',
  left: '0',
  width: '100%',
  marginTop: '6px !important',
  padding: '0 !important',
  backgroundColor: '$GRAY2',
  border: '1px solid $GRAY2',
  borderRadius: '4px',

  '& li': {
    cursor: 'pointer',
    height: '47px',
  },
})
