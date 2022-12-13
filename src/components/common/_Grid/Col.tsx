import { styled } from 'styles/globalStitches'

const Col = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  variants: {
    justify: {
      center: { justifyContent: 'center' },
      spaceBetween: { justifyContent: 'space-between' },
      spaceAround: { justifyContent: 'space-around' },
      spaceEvenly: { justifyContent: 'space-evenly' },
    },
    align: {
      center: { alignItems: 'center' },
    },
  },
})

export default Col
