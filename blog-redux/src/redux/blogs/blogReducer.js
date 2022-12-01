import axios from "axios";
import { ADD_BLOG, DELETE_BLOG, FETCH_BLOGS } from "./blogTypes";

const initialState = {
    blogs: []
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BLOG:
            axios.post('http://127.0.0.1:8000/api/blogs', action.payload);
            return {
                ...state,
                blogs: [...state.blogs, action.payload]
            }
        case DELETE_BLOG: return {
            ...state,
            blogs: state.blogs.filter((blog) => blog.id !== action.payload)
        }
        case FETCH_BLOGS: return {
            ...state,
            blogs: action.payload
        }


        default: return state
    }
}

export default blogReducer;