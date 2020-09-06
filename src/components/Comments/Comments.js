import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 810,
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
    const {comment} = props
    const {name,email,body} = comment

const classes = useStyles();
  return (
      <div style={{width: '1076px', marginTop: '10px',marginLeft: ''}}>
            <Card style={{width: '1076px'}} className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                </IconButton>
                }
                title={name}
                subheader={email}
            />
            
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {body}
                </Typography>
            </CardContent>
            </Card>
        </div>
    )
};

export default Comments;