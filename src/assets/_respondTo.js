const breakpoints = {
  xs: "320px", // min-width : 320px and max-width : 480px
  sm: "600px",
  md: "768px",
  ml: "1120px",
  lg: "1200px",
  xl: "1824px",
};

export const devices = {
  smartphone: `@media only screen and (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm})`,
  ipads: `@media only screen and (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`,
  laptops: `@media only screen and (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.ml})`,
  desktops: `@media only screen and (min-width: ${breakpoints.ml}) and (max-width: ${breakpoints.lg})`,
  screen_large: `@media only screen and (min-width: ${breakpoints.lg})`,
};
