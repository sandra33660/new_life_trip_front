import React from "react";
import Screen from "../Screen/index";
import TripList from "../NewLifeTripList/tripList";
import { CircularProgress, Typography } from "@material-ui/core";
import useTrip from "../UseApiNLT/useTrip";
import Carroussel from "../Carroussel/index";

export default function TripListScreen() {
  const { isFetching, data: trip } = useTrip();
  return (
    <Screen>
      {isFetching && <CircularProgress />}
      {trip && <Carroussel data={trip} />}
      <Typography variant="h2" component="h2" align="center">
        Nos voyages
      </Typography>
      {trip && <TripList data={trip} />}
    </Screen>
  );
}
