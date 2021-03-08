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
    margin: `${theme.spacing(1)}px auto`,
    marginTop: "20%",
  },
  button: {
    flexGrow: 1,
    backgroundColor: "#84C0B4",
    color: "#FFFFFF",
  },
  container: {
    alignItems: "flexStart",
  },
}));

export default function ActivityCard({
  idActivity,

  price,
  activitiesPhotoAlbum,

  numberOfPlacesTotal,
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
      {activitiesPhotoAlbum && (
        <CardMedia
          component="img"
          alt={activitiesPhotoAlbum}
          height="175"
          image={activitiesPhotoAlbum}
        />
      )}
      <CardContent className={classes.container}>
        <Typography variant="body2" color="textSecondary" component="p">
          {numberOfPlacesTotal} personnes
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          du {finalDate}
          <br></br>
          au {startDate}
        </Typography>
        <Typography variant="h6" component="h6">
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
          Reserver
        </Button>
      </CardActions>
    </Card>
  );
}
ActivityCard.propTypes = {
  idActivity: number,

  price: number.isRequired,
  activitiesPhotoAlbum: string,
  addToCart: func,
  numberOfPlacesTotal: number,
};
ActivityCard.defaultProps = {
  activitiesPhotoAlbum: null,
  addToCart: Function.prototype,
};
