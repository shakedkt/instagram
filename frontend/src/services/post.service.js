
import httpService from './http.service.js'


function query() {
  return httpService.get('post')
}


function addComment(comment) {
  return httpService.put(`post/add-comment/${comment.postId}`, comment)
}

function add(post) {
  return httpService.post(`post`, post)
}

function changeLike(post) {
return httpService.put(`post/like/${post._id}`, post)
}

function deletePost(post) {
    return httpService.delete(`post/${post._id}`)

}

export const postService = {
  query,
  addComment,
  add,
  deletePost,
  changeLike
}





