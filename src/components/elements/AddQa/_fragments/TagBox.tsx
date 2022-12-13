import { KeyboardEvent, MouseEvent, useState } from 'react'

import IconDelete from 'assets/svg/iconDelete.svg'
import Row from 'components/common/_Grid/Row'
import { styled } from 'styles/globalStitches'

const TagBox = () => {
  const [tagItem, setTagItem] = useState('')
  const [tagList, setTagList] = useState<string[]>([])

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length !== 0 && e.key === 'Enter') {
      submitTagItem()
    }
  }

  const submitTagItem = () => {
    const updatedTagList = [...tagList]
    updatedTagList.push(tagItem)
    setTagList(updatedTagList)
    setTagItem('')
  }

  const deleteTagItem = (e: MouseEvent<HTMLButtonElement>) => {
    const deleteTagItem = e.currentTarget.dataset.idx
    const filteredTagList = tagList.filter(
      (tagItem, index) => index !== Number(deleteTagItem),
    )
    setTagList(filteredTagList)
  }

  return (
    <TagWrapper>
      {tagList.map((tagItem, idx) => {
        return (
          <Tag key={idx}>
            <span>#{tagItem}</span>
            <button data-idx={idx} onClick={deleteTagItem}>
              <IconDelete />
            </button>
          </Tag>
        )
      })}
      <InsertTag
        type="text"
        tabIndex={2}
        onChange={e => setTagItem(e.target.value)}
        value={tagItem}
        onKeyPress={onKeyPress}
      />
    </TagWrapper>
  )
}

export default TagBox

const TagWrapper = styled(Row, {
  width: '100%',
  marginTop: '6px',
  minHeight: '47px',
  border: '1px solid $GRAY2',
  gap: '2px',
  padding: '12px 16px',
  fontSize: '15px',
  borderRadius: '4px',
})

const Tag = styled(Row, {
  color: '$BLUE5',
  alignItems: 'center',
})

const InsertTag = styled('input', {
  border: 'none',
  ['&:focus']: {
    outline: 'none',
  },
})
