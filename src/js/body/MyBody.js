import { Component } from "react";
import Post from './Post';
import SideBar from './SideBar';
import '../../css/MyBody.css';
class MyBody extends Component {



render() {
    return (
        <div className="ContentMybody">

            <Post />
            <SideBar />
        </div>
    )
}
}
export default MyBody;