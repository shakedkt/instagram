import { postService } from '../services/post.service.js';
import { cloudinaryService } from '../services/cloudinary-service.js'

export const postStore = {
    state: {
        posts: [],
    },
    mutations: {
        setPosts(state, { posts }) {
            state.posts = posts;
        },
        addPost(state, {post}) {
            state.posts.unshift(post)
        },
        addComment(state, { comment }) {
            const post = state.posts.find(post => {
                return post._id === comment.postId
            })
            post.comments.unshift(comment)
        },
        
        deletePost(state, { post }) {
            state.posts = state.posts.filter(currPost => currPost._id !== post._id)
        },
        changelike(state, { post }) {

            console.log(post);

        }
    },
    getters: {
        posts(state) {
            return state.posts;
        },
    },
    actions: {
        async loadPosts(context) {
            const posts = await postService.query();
            console.log('posts store', posts);
            
            context.commit({type: 'setPosts', posts})
        },
        async addComment(context, { comment }) {
            await postService.addComment(comment);
            context.commit({
                type: 'addComment',
                comment
            })
        },
        async addImg(context, { ev }) {
            console.log(ev);
            const res = await cloudinaryService.uploadImg(ev);
            return res
        },
        async addPost(context, { post }) {
          post = await postService.add(post);
            context.commit({
                type: 'addPost',
                post
            })
            return post
        },
        async deletePost(context, { post }) {
            await postService.deletePost(post);
            context.commit({
                type: 'deletePost',
                post
            })
        },
        async editPost(context, { post }) {
            await postService.editPost(post);
            context.commit({
                type: 'editPost',
                post
            })
        },
        async changelike(context, {post}) {
            await postService.changelike(post);
            context.commit({
                type: 'changelike',
                post
            })
        }
    }
}   