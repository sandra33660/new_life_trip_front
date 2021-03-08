import React from "react";
import { arrayOf, shape, func } from "prop-types";
import { isNilOrEmpty } from "ramda-adjunct";
import ActivityCard from "../Card/activity";
import { Typography, Grid } from "@material-ui/core";

export default function ActivityList({ data, addToCart }) {
  if (isNilOrEmpty(data))
    return (
      <Typography variant="body1" component="p">
        Pas d'activités en ce moment
      </Typography>
    );
  return (
    <Grid container justify="space-evenly">
      {data.map((activity) => (
        <Grid key={activity.idActivity} item xs={4}>
          <ActivityCard {...activity} addToCart={addToCart} />
        </Grid>
      ))}
    </Grid>
  );
}
ActivityList.propTypes = {
  data: arrayOf(shape(ActivityList.propTypes)),
  addToCart: func,
};

ActivityList.defaultProps = {
  data: [],
  addToCart: Function.prototype,
};
