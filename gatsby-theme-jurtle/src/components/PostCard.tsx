import * as React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import {Button, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 330,
  },
});

const PostCard: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default PostCard;
