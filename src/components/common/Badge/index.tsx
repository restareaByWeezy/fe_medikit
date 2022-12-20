import { MouseEvent } from 'react'

import { CSS } from '@stitches/react'
import { IconDelete } from 'assets/svg'
import Image from 'next/image'

import { styled } from 'styles/globalStitches'

import Button from '../Button'
import Text from '../Text'

interface BadgeProps {
  title: string
  iconUrl?: string
  deleteIcon?: boolean
  iconPosition?: 'suffix' | 'prefix'
  css?: CSS
  handleDelete?: (e: MouseEvent<HTMLDivElement>) => void
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Badge = ({
  title,
  iconPosition,
  css,
  deleteIcon,
  handleClick,
  handleDelete,
}: BadgeProps) => {
  const iconGap = iconPosition === 'prefix' ? '0 0 0 6px' : '0 6px 0 0'
  return (
    <CustomButton data-title={title} onClick={handleClick} css={css} badge>
      {iconPosition === 'prefix' && (
        <Image width="14px" height="14px" src={'/iconExample.svg'} alt="icon" />
      )}
      <Text size="body3" weight="semiBold" css={{ m: iconGap }}>
        {title}
      </Text>
      {iconPosition === 'suffix' && (
        <Image width="14px" height="14px" src={'/iconExample.svg'} alt="icon" />
      )}
      {deleteIcon && (
        <div data-title={title} onClick={handleDelete}>
          <IconDelete />
        </div>
      )}
    </CustomButton>
  )
}

export default Badge

// STYLE /////////////////////

const CustomButton = styled(Button, {
  width: 'fit-content',
  height: '100%',
  whiteSpace: 'nowrap',
})
