import React, { Component } from 'react';
import "./Post.css";
import { Avatar } from '@material-ui/core';
import postimage from "../../images/post.jpg"; 
import love from "../../images/love.svg"; 
import comment from "../../images/comment.svg"; 
import share from "../../images/share.svg"; 


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            commentList:[]
        }
    }

    componentDidMount(){
        this.getComments();
    }

    getComments=()=>{ //API backend
        let data=[
            {
                "username": "ASD",
                "commentId":"1234",
                "timeStamp":"123456",
                "description":"Comment 1"
            },
            {
                "username": "anindya",
                "commentId":"1234",
                "timeStamp":"123456",
                "description":"Comment 2"
            },
            {
                "username": "dasgupta",
                "commentId":"1234",
                "timeStamp":"123456",
                "description":"Comment 3"
            }
        ];
            this.setState({commentList: data});
    }

    render() { 
        return ( 
        <>
            <div className="post__container">
                {/* Header */}
                <div className="post__header">
                    <Avatar className="post__image" src="" />
                    <div className="post__username">{this.props.userName}</div>
                </div>

                {/* Image */}
                <div>
                    <img src={postimage} alt="" width="615px" /> 
                </div>

                {/* Analytics */}
                <div>
                    <div style={{"marginLeft":"10px"}}>
                        <img src={love} alt="" className="post_reactimage"/>
                        <img src={comment} alt="" className="post_reactimage"/>
                        <img src={share} alt="" className="post_reactimage"/>
                    </div>
                    <div style={{ "fontWeight":"bold","marginLeft":"20px  "}}>
                        {this.props.likes} likes    
                    </div>
                </div>

                {/* Comment Section */}
                <div>
                    {
                        this.state.commentList.map((item,index)=>(
                            index < 4 ?
                            <div key={index} className="post_comment">{item.username}: {item.description}</div> :<span></span>
                        ))
                    }
                    <input text="text" className="post__commentbox" placeholder="Añadir Un Comentario." />
                </div>
            
            </div> 
        </>
        );
    }
}

export default Post;