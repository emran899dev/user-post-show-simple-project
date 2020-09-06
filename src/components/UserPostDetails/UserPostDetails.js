import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Comments from '../Comments/Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';


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

const UserDetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(posts => setPost(posts))
    }, []);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(comments => setComments(comments))
    }, [])

   

    for(let i = 0; i<comments.length ;i++){
        const random = Math.floor(Math.random() * 90 + 1);
        comments[i].image = `https://randomuser.me/api/portraits/men/${random}.jpg`;
    }

    const { id, title, body } = post;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <div>
            <Card style={{ backgroundColor: "#91969e", color: 'white' }} className={classes.root}>
                <CardContent>
                    <Typography  variant="body2" color="textSecondary" component="p" style={{  color: 'white' }}>
                        ID:{id}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{  color: 'white' }}>
                        Title:{title}
                    </Typography>
                    <Typography paragraph>User Post: {body}</Typography>
                </CardContent>

                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FontAwesomeIcon style={{ color: 'green' }} icon={faComment} />-{comments.length}
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
                        <Typography paragraph>FeedBack Comment:</Typography>
                        <Typography>
                            {
                                comments.map(comment => <Comments comment={comment}></Comments>)
                            }
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
};

export default UserDetails;