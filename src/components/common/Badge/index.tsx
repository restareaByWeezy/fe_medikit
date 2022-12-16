import { MouseEvent } from 'react'

import { CSS } from '@stitches/react'
import { IconDelete } from 'assets/svg'
import Image from 'next/image'

import Button from '../Button'

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
    <Button data-title={title} onClick={handleClick} css={css} badge>
      {iconPosition === 'prefix' && (
        <Image width="14px" height="14px" src={'/iconExample.svg'} alt="icon" />
      )}
      <span style={{ margin: iconGap }}>{title}</span>
      {iconPosition === 'suffix' && (
        <Image width="14px" height="14px" src={'/iconExample.svg'} alt="icon" />
      )}
      {deleteIcon && (
        <div data-title={title} onClick={handleDelete}>
          <IconDelete />
        </div>
      )}
    </Button>
  )
}

export default Badge
