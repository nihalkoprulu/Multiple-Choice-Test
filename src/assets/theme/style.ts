// Color Palette
export const themeColors = {
  primary: '#598DFD',
  secondary: '#015CB2',
  accent: '#78F8DE',
  text: '#262F43',
  success: '#3CC60A',
  error: '#E4333E',
  warning: '#F29D39',
  background: '#f5f5f5',
  black: '#000000',
  white: '#ffffff',
  gray: '#eeeeee'
};


// Breakpoints for Responsive Design
export const size = {
  mobile: '599px',               // Mobile devices
  tabletPortrait: '600px',       // Portrait tablets
  tabletLandscape: '900px',      // Landscape tablets
  desktopS: '900px',             // Small desktop
  desktopM: '960px',             // Medium desktop
  desktop: '1200px',             // Standard desktop
  desktopL: '1800px',            // Large desktop
};


// Media Queries for Responsive Design
export const device = {
  mobileOnly: `(max-width: ${size.mobile})`,
  mobileMin: `(min-width: ${size.mobile})`,
  tabletPortrait: `(min-width: ${size.tabletPortrait})`,
  tabletLandscape: `(min-width: ${size.tabletLandscape})`,
  desktopS: `(max-width: ${size.desktopS})`,
  desktopM: `(max-width: ${size.desktopM})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopMax: `(max-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`
};

