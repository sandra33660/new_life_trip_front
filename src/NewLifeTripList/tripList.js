import React from "react";
import { arrayOf, shape, func } from "prop-types";
import { isNilOrEmpty } from "ramda-adjunct";
import TripCard from "../Card/index";
import { Typography, Grid } from "@material-ui/core";

export default function TripList({ data, addToCart }) {
  if (isNilOrEmpty(data))
    return (
      <Typography variant="body1" component="p">
        Pas de voyage en ce moment
      </Typography>
    );
  return (
    <Grid container justify="space-evenly">
      {data.map((trip) => (
        <Grid key={trip.idTrip} item xs={4}>
          <TripCard {...trip} addToCart={addToCart} />
        </Grid>
      ))}
    </Grid>
  );
}
TripList.propTypes = {
  data: arrayOf(shape(TripCard.propTypes)),
  addToCart: func,
};

TripList.defaultProps = {
  data: [],
  addToCart: Function.prototype,
};
