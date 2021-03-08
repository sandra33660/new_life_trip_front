import React from "react";
import Screen from "../Screen/index";
import ActivityList from "../NewLifeTripList/activityList";
import { CircularProgress, Typography } from "@material-ui/core";
import useActivity from "../UseApiNLT/useActivity";
import ActivityCarroussel from "../Carroussel/activityCarroussel";

export default function ActivityListScreen() {
  const { isFetching, data: activity } = useActivity();
  return (
    <Screen>
      {isFetching && <CircularProgress />}
      {activity && <ActivityCarroussel data={activity} />}
      <Typography variant="h2" component="h2" align="center">
        Nos Activités
      </Typography>
      {activity && <ActivityList data={activity} />}
    </Screen>
  );
}
