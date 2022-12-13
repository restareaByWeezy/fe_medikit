import { createStitches } from '@stitches/react'

export const { getCssText } = createStitches()

export const { styled, css } = createStitches({
  utils: {
    // Abbreviated margin properties
    m: (value: string) => ({
      margin: value,
    }),
    mt: (value: string) => ({
      marginTop: value,
    }),
    mr: (value: string) => ({
      marginRight: value,
    }),
    mb: (value: string) => ({
      marginBottom: value,
    }),
    ml: (value: string) => ({
      marginLeft: value,
    }),
    mx: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: string) => ({
      padding: value,
    }),
    pt: (value: string) => ({
      paddingTop: value,
    }),
    pr: (value: string) => ({
      paddingRight: value,
    }),
    pb: (value: string) => ({
      paddingBottom: value,
    }),
    pl: (value: string) => ({
      paddingLeft: value,
    }),
    px: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: (value: string) => ({
      width: value,
      height: value,
    }),
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    br: (value: string) => ({
      borderRadius: value,
    }),
  },
  theme: {
    colors: {
      primary: '#429AEB',

      // GrayScale
      GRAY9: '#0a0a0a',
      GRAY8: '#1b1d1f',
      GRAY7: '#26282b',
      GRAY6: '#464c53',
      GRAY5: '#73787f',
      GRAY4: '#9ea4aa',
      GRAY3: '#c9cdd2',
      GRAY2: '#e8ebed',
      GRAY1: '#f7f8f9',

      BLUE9: '#0C2C70',
      BLUE8: '#153F88',
      BLUE7: '#2159A9',
      BLUE6: '#3078CA',
      BLUE5: '#429AEB',
      BLUE4: '#6FBAF3',
      BLUE3: '#8DD0F9',
      BLUE2: '#B4E5FD',
      BLUE1: '#D9F4FE',

      GTRANS4: 'rgba(176, 179, 188, 0.7)',
      GTRANS3: 'rgba(176, 179, 188, 0.5)',
      GTRANS2: 'rgba(176, 179, 188, 0.3)',
      GTRANS1: 'rgba(176, 179, 188, 0.1)',

      // TextColor
      primary_text: '#1b1d1f', //Gray 8
      secondary_text: '#464c53', //Gray 6
      tertiary_text: '#9ea4aa', //Gray 4
      white: '#ffffff',

      // btn
      primary_btn: '#429AEB',
      primary_pressed: '#3078CA',
      secondary_btn: '#464C53',
      secondary_pressed: '#26282B',
      tertiary_btn: '#E8EBED',
      tertiary_pressed: '#C9CDD2',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fontSizes: {
      H1: '32px',
      H2: '26px',
      H4: '18px',
      BODY1: '15px',
      BODY2: '12px',
      BODY3: '11px',
      CAPTION: '10px',
    },
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {
      bold: 700,
      semiBold: 600,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {
      H1: '32px',
      H2: '26px',
      H4: '18px',
      BODY1: '15px',
      BODY2: '12px',
      BODY3: '11px',
      CAPTION: '10px',
    },
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {
      GNB: 1000,
      DROPDOWN: 1001,
      CHECK_ICON: 11,
      CHECK_BOX: 10,
    },
    transitions: {},
  },
})
