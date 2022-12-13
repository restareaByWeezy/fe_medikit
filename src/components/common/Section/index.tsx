import { ReactNode } from 'react'

import styles from './Section.module.scss'

interface SectionProps {
  title: string
  children?: ReactNode
  size?: string
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default Section
