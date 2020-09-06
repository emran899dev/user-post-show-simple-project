import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        maxWidth: 1050,
    },
    media: {
        height: 140,
    },
});


const UserPosts = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    for(let i = 0; i<posts.length ;i++){
        const random = Math.floor(Math.random() * 90 + 1);
        posts[i].image = `https://randomuser.me/api/portraits/women/${random}.jpg`;
    }
    const Post = posts.map(post => {
        const { id, title, body, image} = post;
        return (
            <div style={{ marginTop: '20px' }}>
                <Card className={classes.root}>
                    <CardActionArea style={{ backgroundColor: '#5e99f7' }}>
                    <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img src={image} width="100%" alt="nai"/>
          </Avatar>
          }
        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h4">
                                ID: {id}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                               Post Title: {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                               Post: {body}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{ backgroundColor: '#5e99f7' }}>
                        <Link style={{ textDecoration: 'none' }} to={`/post/details/${id}`}>
                            <Button style={{ backgroundColor: '#1021e0', color: '#fff' }}>
                                Post Details
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>
        )
    })
    return (
        <div style={{ width: '45%', margin: 'auto' }}>
            <div style={{ marginTop: '20px' }}>
                <Card className={classes.root}>
                    <CardActionArea style={{ backgroundColor: '#87CEFA' }}>
                        <CardContent>
                            <Typography style={{ textAlign: 'center' }} gutterBottom variant="h4" component="h4">
                                User All Post
                        </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            {Post}
        </div>
    );
};

export default UserPosts;