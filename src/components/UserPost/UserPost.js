import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { PostContext } from '../../App';
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
    const [posts, setPosts] = useContext(PostContext)
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    const Post = posts.map(post => {
        const { id, title, body } = post;
        return (
            <div style={{ marginTop: '20px' }}>
                <Card className={classes.root}>
                    <CardActionArea style={{backgroundColor:'#87CEFA'}}>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h4">
                            ID: {id}
                        </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {body}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{backgroundColor:'#87CEFA'}}>
                        <Link style={{textDecoration:'none'}} to={`/post/details/${id}`}>
                            <Button  style={{backgroundColor: '#1021e0',color:'#fff'}}>
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
            <div style={{ width: '93%', backgroundColor: '#00CED1', padding: '10px 20px', marginTop: '20px', borderRadius: '5px' }}>
                <h3 style={{textAlign: 'center'}}>All User Posts </h3>
            </div>
            {Post}
        </div>
    );
};

export default UserPosts;