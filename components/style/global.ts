const globalVariable = {
  headerBackgroundColor: 'rgba(112,155,231,1)',
  headerHeight: '100px',
  headerHeightMobile: '50px',
  inactiveColor: '#709BE7',
  activeColor: '#fff',
  defaultSubColor: '#595F6F',
  footerHeight: '290px',
  lowerBackgroundColor: 'rgba(247,248,251,1)',
  mainHighLightColor: '#0F358E',
  mainDefaultColor: '#1F1F1F',
  infoColor: '#0A225A',
  defaultCardbackgroundColor: '#F7F8FB',
  lowerDefaultColor: '#6D7281',
  introColor: '#000',
  mediaMobileSize: '1200px',
}

const globalStyle = {
  absCenterFlex: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  absCenterPos: `
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  `,
  lastChildNoMargin: (direction: string, lineLastNumber?: string) => {
    if (lineLastNumber) {
      return `
        &:nth-child(${lineLastNumber}) {
          margin-${direction}: 0;
        }
      `
    }
    return `
      &:last-child {
        margin-${direction}: 0;
      }
    `
  },
  fullCover: `
    width: 100%;
    height: 100%;
  `,
  aInitial: (defaultColor: string, activeColor: string) => `
    color: ${defaultColor};
    &.visited {
      color: ${defaultColor};
    }
    &:hover {
      color: ${activeColor};
    }
    &:active {
      color: ${activeColor};
    }
  `,
}

export default {
  ...globalStyle,
  ...globalVariable,
}