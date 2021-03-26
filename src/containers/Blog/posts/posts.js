import React, { Component} from 'react'
import './posts.css'
import axios from '../../../axios/axiosInstances'
import Post from '../../../components/Post/Post'
import {Link, withRouter, Route} from 'react-router-dom'
import FullPost from '../../Blog/FullPost/FullPost'


class posts extends Component {

    state={
        posts: [],
        error: false
    }

    postSelectHandler=(id)=>{
        // this.props.history.push({
        //     pathname: /' + id
        // })

        this.props.history.push('/'+ id)
    }

    componentDidMount(){
        console.log('router props from posts', this.props)
        axios.get('/posts') //this is aysnchoronus
        .then((response)=>
        {const post = response.data.slice(0,4)  // to get limited posts
        const updatedPost= post.map((post)=>{
            return ({
                ...post,
                author: "Areej Anjum"
            })
        })
        this.setState({posts: updatedPost})
        console.log("[Response] ", response)}// can only setstate in then 
    ).catch((error)=>{
        console.log(error);
        this.setState({error: true})
    })
    }

    render() {

        let posts= <p style={{textAlign :'center'}}>Something went wrong</p>
// error handling 
        if(!this.state.error){
            posts = this.state.posts.map((post)=>{

            //     return(
            //     <Link to={'/'+ post.id}  key={post.id + post.title}>
            //     <Post 
            //     title={post.title}
            //     author={post.author}
            //    // {...this.props}  // to send props got from render to post component from posts component
            //     //else wrap post component with withrouter to access all props coming form posts component
            //     clicked={()=>this.postSelectHandler(post.id)}
            //     /> </Link>
            //     )})}


            //navigate programatically
                return(
                  
                    <Post 
                    key={post.id + post.title}
                    title={post.title}
                    author={post.author}
                   // {...this.props}  // to send props got from render to post component from posts component
                    //else wrap post component with withrouter to access all props coming form posts component
                    clicked={()=>this.postSelectHandler(post.id)}
                    /> 
                    )})}

        return (
            <div>
                <section className="Posts">
                    {posts}         
                </section>
            </div>
        )
    }
}

export default withRouter(posts);