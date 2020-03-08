import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.5rem"
  },
  cardContentLeft: {
    width: "30%",
    padding: 0
  },
  cardContentRight: {
    width: "70%"
  }
});

const ListItem = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContentLeft}>
        {item.poster_path && (
          <CardMedia
            className={classes.media}
            image={`https://image.tmdb.org/t/p/w400${item.poster_path}`}
            title={item.title ? item.title : item.name}
            alt={item.title + "poster"}
            component="img"
          />
        )}
      </CardContent>
      <CardContent className={classes.cardContentRight}>
        <Typography variant="h5" component="h2">
          {item.title ? item.title : item.name}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Release Date: {item.release_date} | Popularity: {item.popularity}
        </Typography>
        <Typography
          align="left"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {item.overview}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ListItem;
