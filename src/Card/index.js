import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { string, number, Date } from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    /*  maxWidth: 345, */
    marginTop: "56.25%",
    marginLeft: "56.25%",
    paddingRight: "60.25%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Card(
  idTrip,
  title,
  startDate,
  finalDate,
  photo,
  details,
  numberOfParticipants
) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid>
      <Grid item xs={2}>
        <Card className={classes.root} id={idTrip}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                V
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={title}
            subheader={startDate}
          />
          <CardMedia
            className={classes.media}
            image={photo}
            title="destination"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {details}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Plus de détails</Typography>
              <Typography paragraph>{startDate}</Typography>
              <Typography paragraph>{finalDate}</Typography>
              <Typography paragraph>{numberOfParticipants}</Typography>
              <Typography>activités hebergement</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
      )
    </Grid>
  );
}
Card.prototype = {
  idTrip: number,
  title: string.isRequired,
  details: string.isRequired,
  photo: string,
  startDate: Date,
  finalDate: Date,
  numberOfParticipants: number,
};
Card.defaultProps = {
  photo: null,
};
