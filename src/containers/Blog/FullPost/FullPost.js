import React, { Component } from 'react';
import axios from 'axios'
import './FullPost.css'
import {withRouter} from 'react-router-dom'
import Spinner from '../../../UI/Spinner/spinner'


class FullPost extends Component {

    state={
        loadedPost: null,
        loading: false
        
    }

    componentDidMount(){
        if(this.props.match.params.dynamicPostId){
            this.setState({ loading: true})
            let passedId=this.props.match.params.dynamicPostId
            console.log('this is the passed id ', passedId)
            // to control  unlimited request calls
            if(!this.state.loadedPost || this.state.loadedPost && this.state.loadedPost.id !== this.props.id){
            axios.get('/posts/'+ this.props.match.params.dynamicPostId)
            .then(response=>{
            this.setState({loadedPost: response.data})
            })
            }
        }  }

        postDeleteHandler=()=>{
            axios.delete('/posts/'+ this.props.match.params.id)
            .then((response)=>{
                console.log('[response] from post deleted', response)
            })
        }

    render () {


        let post = <p style={{textAlign :'center'}}>Please select a Post!</p>;
        if(this.state.loading){post=<Spinner/>}
        if(this.state.loadedPost){
            post = (
            <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <div className="Edit">
                    <button onClick={this.postDeleteHandler} className="Delete">Delete</button>
                </div>
            </div>

        );}
        
        return post;
    }
}

export default withRouter(FullPost);