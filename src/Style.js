const colors = {
  lightGray: "#CCCCCC",
  midGray: "#B0B0B0",
  hoverLightGray: "#EEEEEE",
};

const style = {
  globalFontSize: {
    fontSize: "16px",
    "@media screen and (max-width: 1000px)": {
      fontSize: "16px",
    },
  },
  mainBody: {
    // border: "2vw solid #F2F2F2",
    // padding: "10px",
    composes: "$globalFontSize",
    display: "flex",
    flexDirection: "column",
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif, serif',
    minHeight: "100vh",
    alignItems: "center",
    backgroundColor: "#cac3fc",
  },
  mainHeader: {
    padding: "1em 1em 1em",
    boxSizing: "border-box",
    height: "4.5em",
    width: "100vw",
    boxShadow: "rgb(0, 0, 0, 0.2) 0px 3px 5px",
    backgroundColor: "#afa4f9",
  },
  headerItem: {
    float: "right",
    padding: ".4em 1em",
    backgroundColor: "#cac3fc",
    border: "solid",
    borderRadius: "5px",
    borderWidth: "1px",
    borderColor: colors.lightGray,
    boxShadow: `${colors.lightGray} 0px 3px 0px 0px`,
    "&:hover": {
      backgroundColor: "#7c64f4",
      borderColor: colors.midGray,
      boxShadow: `${colors.midGray} 0px 3px 0px 0px`,
      cursor: "pointer",
    },
    "&:active": {
      transform: "translateY(3px)",
      boxShadow: `${colors.midGray} 0px 3px 0px 0px inset`,
    },
  },
  successMessage: {
    float: "right",
  },
  bodyItems: {
    textAlign: "center",
    width: "100%",
  },
  input: {
    padding: "10px",
    border: "1px solid #808080",
    borderRadius: "20px",
    width: "400px",
    fontSize: "12px",
    backgroundColor: "#F2F2F2",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    padding: "2em",
  },
  recipeCard: {
    borderRadius: "12px",
    overflow: "hidden",
    height: "25em",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    backgroundColor: "#F2F2F2",
    width: "18%",
    boxSizing: "border-box",
    margin: "1%",
    '@media screen and (max-width: 1000px)': {
      display: 'block',
      width: "100%",
      margin: '15px 0px 15px 0px'
    }
  },
  recipeImage: {
    width: "100%",
    maxWidth: '500px',
    maxHeight: "50%",
    height: "max-content",
  },
  recipeText: {
    textAlign: "left",
    padding: "10px",
  },
  recipeName: {
    margin: 0
  },
  recipeCard2: {
    borderRadius: "12px",
    overflow: "auto",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    textAlignLast: 'left',
    textWrap: 'left',
    padding: '20px',
    position: 'fixed',
    backgroundColor: 'white',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "75vw",
    height: "75vh"
  },
  popupWindow: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: "199",
    backgroundColor: "#000000A0",
    boxShadow: "rgba(0, 0, 0, .8) 0px 0px 200px 50px inset",
  },
  xButton: {
    display: 'block',
    marginBottom: '20px'
  }
};

export default style;
