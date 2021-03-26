import React, { Component } from 'react';
import axios from 'axios'
import './NewPost.css';
import {withRouter, Redirect} from 'react-router-dom'

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    componentDidMount(){
        console.log('router props from Newpost', this.props)}

    postDataHandler=()=>{
       const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.title
        }

        axios.post('/posts/', data)
        .then((response)=>{
            //NAVIGATE PROGRAMATICALLY, this is same like redirect below that after
            //submitting post redirect to /posts
            this.props.history.push('/posts')
            console.log('[response] of newpost', response )
            //this.setState({submitted: true})
        })
    }

    render () {
        let redirect= null;
        if(this.state.submitted){
            redirect= <Redirect to='/posts'/>
        }

        return (
           
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default withRouter(NewPost) ;