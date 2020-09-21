const textPrimaryPurple = "#42316C"
const textPrimaryGray = "#FCF3EF"
const textSecondaryPurple = "#554087"
const textSecondaryGray = "#FCF3EF"
const textPrimaryCyan = "#2AA9A9"
const backgroundCyan = "#2AA9A9"
const backgroundWhite = "#F2F2F2"
// const backgroundWhiteTwo = "#F9F9F9"
const backgroundGray = "#F0F0F0"
const lineGray = "#E7E7E7"

module.exports = {
  important: true,
  theme: {
    fontFamily: {
      primary: ["Montserrat"],
      secondary: ["Inconsolata"],
    },
    colors: {
      title_purple: {
        primary: textPrimaryPurple,
        secondary: textSecondaryPurple,
      },
      title_gray: {
        primary: textPrimaryGray,
        secondary: textSecondaryGray,
      },
      subtitle_purple: {
        primary: textPrimaryPurple,
        secondary: textSecondaryPurple,
      },
      subtitle_gray: {
        primary: textPrimaryGray,
        secondary: textSecondaryGray,
      },
      text_cyan: {
        primary: textPrimaryCyan,
      },
      text_purple: {
        primary: textPrimaryPurple,
        secondary: textSecondaryPurple,
      },
      text_gray: {
        primary: textPrimaryGray,
        secondary: textSecondaryGray,
      },
      white: "#ffffff",
      background_gray: backgroundGray,
      background_white: backgroundWhite,
      background_cyan: backgroundCyan,
      line_gray: lineGray,
    },
    extend: {
      fontSize: {
        mainTitle: "3.75rem",
        post_title: "4.5rem",
      },
      height: {
        card: "23.1rem",
      },
    },
  },
  variants: {},
}
