// Font Weights
export const fontWeights = {
  bold: 700,        // Bold text weight
  semiBold: 600,    // Semi-bold text weight
  medium: 500,      // Medium text weight
  regular: 400,     // Regular text weight
  light: 300,       // Light text weight (optional)
};

// Font Sizes
export const fontSizes = {
  xSmall: '12px', 
  small: '14px',      
  regular: '16px',    
  medium: '18px',    
  large: '20px',   
  xLarge: '24px',     
  xxLarge: '32px',    
};


export const typography = {
  bodyRegular: `
    font-size: ${fontSizes.regular};
    font-weight: ${fontWeights.regular};
  `,
  bodySemiBold: `
    font-size: ${fontSizes.regular};
    font-weight: ${fontWeights.semiBold};
  `,
  bodyBold: `
    font-size: ${fontSizes.regular};
    font-weight: ${fontWeights.bold};
  `,
  headingH1: `
    font-size: ${fontSizes.xLarge};
    font-weight: ${fontWeights.bold};
  `,
  headingH2: `
    font-size: ${fontSizes.large};
    font-weight: ${fontWeights.semiBold};
  `,
  headingH3: `
    font-size: ${fontSizes.medium};
    font-weight: ${fontWeights.bold};
  `,
};