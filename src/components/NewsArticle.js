import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: 10,
    backgroundColor: "cream",
    transition: "transform 450ms",
    fontFamily: "'Poppins', sans-serif",
    "&:hover": {
      transform: "scale(1.06)",
    },
  },
  myBtn: {
    transition: "transform 450ms",
    "&:hover": {
      backgroundColor: "#3f51b5",
      color: "white",
    },
  },
});

const NewsArticle = ({ data }) => {
  const classes = useStyles();

  if (data.description === null) data.description = "No Descrition";
  if (data.title === null) data.description = "No Title";
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="No Preview ☠️"
          height="200"
          image={
            data.urlToImage
              ? data.urlToImage
              : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
          }
          title={data.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {data.title.replace(/^(.{30}[^\s]*).*/, "$1") + " ..." + "\n"}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {
              data.description.replace(/^(.{100}[^\s]*).*/, "$1") +
                " ..." +
                "\n"
              // data.description
            }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          <Button size="small" color="primary" className={classes.myBtn}>
            Read More
          </Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default NewsArticle;
