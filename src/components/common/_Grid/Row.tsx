import { styled } from 'styles/globalStitches'

const Row = styled('div', {
  display: 'flex',
  flexDirection: 'row',
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
    direction: {
      reverse: { flexDirection: 'row-reverse' },
    },
  },
})

export default Row
