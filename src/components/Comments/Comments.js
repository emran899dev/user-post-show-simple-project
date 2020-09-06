import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1645,
    // marginLeft:'230px',
    marginTop: '10px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Comments = (props) => {
  // console.log(props.comment);
  const { comment } = props
  const { name, email, body, image } = comment

  const classes = useStyles();
  return (
    <div >

      <Card  className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img src={image} width="100%" alt="nai"/>
          </Avatar>
          }
          title={name}
          subheader={email}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Comment: {body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
};

export default Comments;