import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class PostPage extends Component {
    state = {
        post: {},
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`/wp-json/wp/v2/posts/${this.props.match.params.id}`)
            .then(res => this.setState({
                post: res.data,
                isLoaded: true
            }))

    }
    render () {
        const { post, isLoaded } = this.state;
        if(isLoaded) {
            return (
                <Fragment>
                    <Link to='/'>Go Back</Link>
                    <hr/>
                    <h1>{post.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.content.render}}></div>
                </Fragment>
            )
        }
        //loading heck yeaaaa
        return (<h3>Loading...</h3>);
    }
}