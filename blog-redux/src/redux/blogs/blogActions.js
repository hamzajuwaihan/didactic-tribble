import { ADD_BLOG, DELETE_BLOG, FETCH_BLOGS } from "./blogTypes";

// payload is curage الحمولة
export const addBlog = (blog) => {
    return {
        type: ADD_BLOG,
        payload: blog
    }
}
export const fetchBlogs = (blogs) => {
    return {
        type: FETCH_BLOGS,
        payload: blogs
    }
}
export const deleteBlog = (blog) => {
    return {
        type: DELETE_BLOG,
        payload: blog.id
    }
}