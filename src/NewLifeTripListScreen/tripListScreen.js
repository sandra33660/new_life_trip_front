import React from "react";
import Screen from "../Screen/index";
import TripList from "../NewLifeTripList/tripList";
import { CircularProgress } from "@material-ui/core";
import useTrip from "../UseApiNLT/useTrip";

export default function TripListScreen() {
  const { isFetching, data: trip } = useTrip();
  return (
    <Screen>
      {isFetching && <CircularProgress />}
      {trip && <TripList data={trip} />}
    </Screen>
  );
}
