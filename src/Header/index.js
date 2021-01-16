import React, { useState } from "react";
import useDocumentScrollThrottled from "./Scroll";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});
function Header() {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? "shadow" : "";
  const hiddenStyle = shouldHideHeader ? "hidden" : "";

  const classes = useStyles();
  return (
    <div className="wrapper">
      <header className={`header ${shadowStyle} ${hiddenStyle}`}>
        <Logo />

        <Typography
          variant="h6"
          component={Link}
          className={classes.title}
          to="/"
        >
          Accueil
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          className={classes.title}
          to="/voyage"
        >
          Voyage
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          className={classes.title}
          to="/contact"
        >
          Contact
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          className={classes.title}
          to="/CGU"
        >
          CGU
        </Typography>
      </header>
    </div>
  );
}

export default Header;
