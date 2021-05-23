import React, { Component } from 'react';
import Blog from './FaceMask';
import axios from 'axios';
//import Login from "../../LandingPage/Header/Login";


class FaceMasks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs:[]
        }
    }

    async componentDidMount() {
        const blogs = await axios.get('/facemask');
        // console.log(blogs);
        this.setState({ blogs: blogs.data });
    }

    render() {

        let allBlogs = this.state.blogs.map(b => {
            return <Blog
                key={b._id}
                img={b.img}
                price={b.price}
                desc={b.desc}
            />
        })

      
        return (
            <>
          
           {allBlogs}
            </>
        );
    }
}

export default FaceMasks;
