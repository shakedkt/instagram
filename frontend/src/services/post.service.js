
// import utilService from './util.service.js'
import httpService from './http.service.js'
// var mockDataPosts = [
//   {
//     _id: 1
//     , desc: "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
//     createdBy: {
//       userName: "TonyeLghan",
//       fullName: "Tonye Lghan"
//       , avatar: "https://robohash.org/impedittemporalaborum.jpg?size=50x50&set=set1"
//     },
//     imgUrl: "https://i.picsum.photos/id/550/400/400.jpg",
//     likes: 994,
//     location: "Hats’avan",
//     comments:
//       [
//         {
//           postId: 366,
//           userName: "TonyeLghan",
//           txt: "Curabitur gravida nisi at nibh.",
//           createdAt: Date.now(),
//         }]
//   }
//   ,
//   {
//     _id: 2,
//     desc: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
//     createdBy: {
//       userName: "MaxineAstridge",
//       fullName: "Maxine Astridge",
//       avatar: "https://robohash.org/optioutexpedita.bmp?size=50x50&set=set1"
//     },
//     imgUrl: "https://i.picsum.photos/id/560/400/400.jpg",
//     likes: 4010,
//     location: "Shalinskoye",
//     comments:
//       [
//         {
//           postId: 111,
//           userName: "RenaeBuckston",
//           txt: "Curabitur gravida nisi at nibh.",
//           createdAt: Date.now(),
//         }]
//   }
//   ,
//   {
//     _id: 3,
//     desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
//     createdBy: {
//       userName: "SaideeTathacott",
//       fullName: "Saidee Tathacott",
//       avatar: "https://robohash.org/quasnequeautem.jpg?size=50x50&set=set1"
//     },
//     imgUrl: "https://i.picsum.photos/id/549/400/400.jpg",
//     likes: 538,
//     location: "Ketapang",
//     comments:
//       [
//         {
//           postId: 21,
//           userName: "EzraHedling",
//           txt: "Curabitur gravida nisi at nibh.",
//           createdAt: Date.now(),
//         }]
//   },
//   {
//     _id: 4, desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
//     createdBy: {
//       userName: "ZanetaDurnill",
//       fullName: "Zaneta Durnill",
//       avatar: "https://robohash.org/verorerumerror.bmp?size=50x50&set=set1"
//     },
//     imgUrl: "https://i.picsum.photos/id/553/400/400.jpg",
//     likes: 9784,
//     location: "Illapel",
//     comments:
//       [
//         {
//           postId: 212,
//           userName: "TroySteddall", 
//           txt: "Curabitur gravida nisi at nibh.",
//           createdAt: Date.now()
//         }]
//   }
//   ,
//   {
//     _id: 5, desc: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
//     createdBy: {
//       userName: "ThereseHousin",
//       fullName: "Therese Housin",
//       avatar: "https://robohash.org/cumprovidentfugiat.jpg?size=50x50&set=set1"
//     },
//     imgUrl: "https://i.picsum.photos/id/555/400/400.jpg",
//     likes: 8813,
//     location: "Köln",
//     comments:
//       [
//         {
//           postId: 213,
//             userName: "DarrickDureden",
//             txt: "Curabitur gravida nisi at nibh.",
//             createdAt: Date.now()
//           }
//         ]
//   }
// ]


// function _createPosts() {
//   var posts = storageService.load(KEY)

//   if (!posts || !posts.length) {
//     posts = mockDataPosts;
//     storageService.store(KEY, posts)
//   }
//   return posts;
// }

function query() {
  return httpService.get('post')
}


function addComment(comment) {
  return httpService.post(`post`, comment)

}

function add(post) {
  return httpService.post(`post`, post)
}

// function changeLike(post) {

// }

function deletePost(post) {
    return httpService.delete(`post/${post._id}`)

}

export const postService = {
  query,
  addComment,
  add,
  deletePost,
  //changeLike
}





