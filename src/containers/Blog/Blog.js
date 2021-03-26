import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import './Blog.css';
import Posts from '../Blog/posts/posts'
import axios from '../../axios/axiosInstances'
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'
import NewPost from '../../containers/Blog/NewPost/NewPost'
import FullPost from '../../containers/Blog/FullPost/FullPost'

class Blog extends Component {
   
    state={
        auth: false
    }

    render () {
  
       
        return (
            <div className="blog">
            <header>
                <nav><ul>
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to={{
                        pathname : "/new-posts",
                        hash: '#submit',
                        search: 'search==true'

                    }}> 
                    //navlink is used to add styling of links*/}

                     
                    <li><NavLink exact activeClassName='myActiveClass' to="/posts">Home</NavLink></li>
                    <li><NavLink exact activeClassName='myActiveClass' 
                    //activeStyle={{color: 'Pink'}}
                    to={{
                        pathname : "/new-posts",
                        hash: '#submit',
                        search: 'search==true'

                    }}>
                    New post</NavLink></li>
                </ul></nav>
            </header>
            {/* <Route path='/posts' exact><Posts/></Route> */}
            
            <Switch>
            <Route path='/posts' exact><Posts/></Route>
            
            {//below one is the guard 
            // this.state.auth ? <Route path="/new-posts" exact ><NewPost/></Route>: null
            }
            
            <Route path="/new-posts" exact ><NewPost/></Route>
            <Route path="/:dynamicPostId" exact><FullPost/></Route> 
            <Redirect from="/" to="/posts" />

            {/* must be at end used to handle router error*/}
            <Route render={()=>{return(<h1>not found</h1>)}}/> 
            </Switch>
            </div>
        )
    
}
}
 //used to pass the dynamic id    path="/:any_name" 
 // dynamic path will consider path="/new-posts" as dynamicpostid thats y using
 //switch to only load one route
export default Blog;