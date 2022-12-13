import { Dispatch, SetStateAction } from 'react'

import { Stack } from '@mui/system'
import { styled } from 'styles/globalStitches'

import { data } from './dummyData'

interface ItemProps {
  tag: string
  icon: string
}

interface TagListProps {
  setCategory: Dispatch<SetStateAction<string>>
  setOpen: Dispatch<SetStateAction<boolean>>
}

const TagList = ({ setCategory, setOpen }: TagListProps) => {
  const handleClick = (item: string) => {
    setCategory(item)
    setOpen(false)
  }

  const list = data.map((item: ItemProps, idx: number) => {
    return (
      <Tag onClick={() => handleClick(item.tag)} key={item.tag + idx}>
        {item.tag}
      </Tag>
    )
  })

  return (
    <TagWrapper>
      <ListWrapper spacing={'40px'}>{list}</ListWrapper>
    </TagWrapper>
  )
}

export default TagList

// STYLE /////////////

const TagWrapper = styled('div', {
  backgroundColor: '$white',
  padding: '32px 20px 0',
  borderRadius: ' 20px 20px 0px 0px',
  cursor: 'pointer',
  overflow: 'hidden',
})

const ListWrapper = styled(Stack, {
  height: '65vh',
  overflow: 'scroll',
})

const Tag = styled('button', {
  display: 'flex',
  cursor: 'pointer',
})
