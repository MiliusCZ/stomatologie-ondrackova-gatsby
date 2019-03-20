import Typography from 'typography';

const stomatologieOndrackovaTheme = {
  title: 'Stomatologie Onrackova',
  baseFontSize: '14px',
  baseLineHeight: 1.61,
  googleFonts: [
    {
      name: 'PT Sans',
      styles: [
        '400',
      ],
    },
  ],
  headerFontFamily: ['PT Sans', 'Verdana', 'sans-serif'],
  bodyFontFamily: ['PT Sans', 'Verdana', 'sans-serif'],
  bodyWeight: 400,
  headerWeight: 400,
  boldWeight: 700,
  headerGray: 20,
  scaleRatio: 3,
  overrideStyles: ({ rhythm }) => ({
    a: {
      color: '#54bad0',
      'text-decoration': 'none'
    },
    'a:hover, a:active': {
      'text-decoration': 'underline'
    },
    'h1': {
      'margin-bottom': rhythm(1),
    },
    'h2': {
      'margin-bottom': rhythm(1/4),
    },
    'h3, h4': {
      margin: 0
    }
  })
};

const typography = new Typography(stomatologieOndrackovaTheme);


export default typography;
