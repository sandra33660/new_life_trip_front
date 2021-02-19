import React from "react";
/* import { TRIP_MAX_COUNT } from "../Trip/index"; */
import Price from "../Price/index";
import {
  CardActions,
  Button,
  CardMedia,
  Card,
  Typography,
  CardContent,
} from "@material-ui/core";
import { string, number, func } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

/* import { useCounter } from "react-use"; */

const imageSize = 375;
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: imageSize,
    margin: `${theme.spacing(2)}px auto`,
    marginTop: "20%",
  },
  button: {
    flexGrow: 1,
    backgroundColor: "#84C0B4",
    color: "#FFFFFF",
  },
  container: { alignItems: "flexStart" },
}));

export default function TripCard({
  idTrip,
  title,
  details,
  price,
  photos,
  addToCart,
  numberOfParticipants,
  startDate,
  finalDate,
}) {
  const classes = useStyles();

  /*  const [tripCount, { dec, inc }] = useCounter(1, TRIP_MAX_COUNT, 1);
  const addedTrip = Array.from(new Array(tripCount), () => ({
    idTrip,
    title,
    price,
    numberOfParticipants,
    startDate,
    finalDate,
  })); */
  return (
    <Card className={classes.root}>
      {photos && (
        <CardMedia
          component="img"
          alt={title}
          height="175"
          image={photos}
          title={title}
        />
      )}
      <CardContent className={classes.container}>
        <Typography gutterBottom variant="h4" component="h4">
          {title}
        </Typography>
        <Typography variant="h5" color="textSecondary" component="h5">
          {details}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {numberOfParticipants} personnes
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          du {finalDate}
          <br></br>
          au {startDate}
        </Typography>
        <Typography variant="h4" component="h4">
          <Price value={price} /> / personnes{" "}
        </Typography>{" "}
      </CardContent>
      <CardActions>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => {
            /* addToCart(...addedTrip); */
          }}
        >
          Choisir les activités
        </Button>
      </CardActions>
    </Card>
  );
}
TripCard.propTypes = {
  idTrip: number,
  title: string.isRequired,
  details: string.isRequired,
  price: number.isRequired,
  photos: string,
  addToCart: func,
  numberOfParticipants: number,
};
TripCard.defaultProps = {
  photos: null,
  addToCart: Function.prototype,
};
