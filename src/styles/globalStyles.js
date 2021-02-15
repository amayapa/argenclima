const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

const colors = {
  blue: "#75AADB",
  brown: "#843511",
  yellow: "#FCBF49",
  lightBlue: "#e1f2fe",
  lila: "#B2B1CF",
  white: "#ffffff",
  black: "#333333",
};

module.exports = {
  device,
  colors,
  footerHg: "100px",
  navBarHg: "200px",
  pngShadow: "drop-shadow(2px 2px 3px rgb(0, 0, 0))",
};
