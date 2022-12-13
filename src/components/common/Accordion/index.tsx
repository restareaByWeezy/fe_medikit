import {
  Dispatch,
  ForwardedRef,
  forwardRef,
  ReactNode,
  SetStateAction,
} from 'react'

import * as Accordion from '@radix-ui/react-accordion'
import { keyframes } from '@stitches/react'
import IconCaret from 'assets/svg/iconCaret.svg'
import { styled } from 'styles/globalStitches'

interface CustomAccordionProps {
  title: string
  content: string
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const CustomAccordion = ({
  title,
  content,
  setIsOpen,
}: CustomAccordionProps) => {
  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <AccordionRoot type="single" collapsible>
      <Accordion.Item value="item">
        <div onClick={handleToggle}>
          <AccordionTrigger>{title}</AccordionTrigger>
        </div>
        <AccordionContent>{content}</AccordionContent>
      </Accordion.Item>
    </AccordionRoot>
  )
}

const StyledHeader = styled(Accordion.Header, {
  all: 'unset',
  display: 'flex',
})

const StyledTrigger = styled(Accordion.Trigger, {
  padding: '16px 20px',
  height: 48,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '$H4',
  fontWeight: '$bold',
  lineHeight: 24,
  color: '$secondary_text',
})

const StyledChevron = styled(IconCaret, {
  rotate: '270deg',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
})

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

const StyledContent = styled(Accordion.Content, {
  overflow: 'hidden',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
})

const AccordionRoot = styled(Accordion.Root, {
  backgroundColor: '$GRAY1',
})

const StyledContentText = styled('div', {
  padding: '4px 20px',
  color: '$secondary_text',
  fontSize: '$BODY1',
})

const AccordionTrigger = forwardRef(
  (
    { children, ...props }: { children: ReactNode },
    forwardedRef: ForwardedRef<HTMLButtonElement>,
  ) => (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <StyledChevron aria-hidden />
      </StyledTrigger>
    </StyledHeader>
  ),
)
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = forwardRef(
  (
    { children, ...props }: { children: ReactNode },
    forwardedRef: ForwardedRef<HTMLDivElement>,
  ) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  ),
)
AccordionContent.displayName = 'AccordionContent'

export default CustomAccordion
