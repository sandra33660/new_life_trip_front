import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { string, number } from "prop-types";
import useActivity from "../UseApiNLT/useActivity";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: `${theme.spacing(1)}px auto`,
    paddingBottom: theme.spacing(6),
    maxWidth: "70%",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(6),
    backgroundColor: "rgba(0, 0, 000, 0.25)",
    color: "white",
  },
  footer: { backgroundColor: "rgba(0, 0, 000, 0.25)", color: "white" },
  button: {
    color: "white",
  },
  img: {
    display: "block",
    height: 600,
    overflow: "hidden",
    width: "100%",
  },
}));

export default function ActivityCarroussel() {
  const { data: activityCarroussel } = useActivity();
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = activityCarroussel.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {activityCarroussel.map((activity, index) => (
          <div key={activity.idActivity}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={activity.activitiesPhotoAlbum}
                alt={activity.activitiesPhotoAlbum}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        className={classes.footer}
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            className={classes.button}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            suivant
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            className={classes.button}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            précédent
          </Button>
        }
      />
    </div>
  );
}
ActivityCarroussel.propTypes = {
  idTrip: number,

  activitiesPhotoAlbum: string,
};
ActivityCarroussel.defaultProps = {
  activitiesPhotoAlbum: null,
};
