import { CSS } from '@stitches/react'
import Image from 'next/image'

import Button from '../Button'

interface BadgeProps {
  title: string
  icon?: string
  iconPosition: 'suffix' | 'prefix'
  css?: CSS
}

const Badge = ({ title, icon, iconPosition, css }: BadgeProps) => {
  const iconGap = iconPosition === 'prefix' ? '0 0 0 6px' : '0 6px 0 0'
  return (
    <Button css={css} badge>
      {iconPosition === 'prefix' && (
        <Image width="14px" height="14px" src={'/iconExample.svg'} alt="icon" />
      )}
      <span style={{ margin: iconGap }}>{title}</span>
      {iconPosition === 'suffix' && (
        <Image width="14px" height="14px" src={'/iconExample.svg'} alt="icon" />
      )}
    </Button>
  )
}

export default Badge
