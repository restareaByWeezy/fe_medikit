import { styled } from 'styles/globalStitches'

const Text = styled('span', {
  variants: {
    color: {
      primary: { color: '$primary_text' },
      secondary: { color: '$secondary_text' },
      tertiary: { color: '$tertiary_text' },
      white: { color: '$white' },
    },
    size: {
      h1: { fontSize: '$H1' },
      h2: { fontSize: '$H2' },
      h4: { fontSize: '$H4' },
      body1: { fontSize: '15px' },
      body2: { fontSize: '$BODY2' },
      body3: { fontSize: '$BODY3' },
      caption: { fontSize: '$CAPTION' },
    },
    weight: {
      bold: { fontWeight: '$bold' },
      semiBold: { fontWeight: '$semiBold' },
      normal: { fontWeight: 400 },
    },
  },
  defaultVariants: { color: 'primary', size: 'body1', weight: 'normal' },
})

export default Text
