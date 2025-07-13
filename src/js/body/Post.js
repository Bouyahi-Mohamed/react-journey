import { Component } from "react";
import '../../css/post.css';

class Post extends Component {
    render() {
        return (
            <div className="ContainerPost">
                <PostContent />
                <PostContent />
                <PostContent />
                <PostContent />
                <PostContent />
                <PostContent />
            </div>
        );
    }
}

function PostContent() {

    return (
        <div className="Post">
            <h2>Post Title</h2>
            <hr />
            <p>This is the content of the post.</p>
        </div>
    )
}

export default Post;