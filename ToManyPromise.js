function updateLastUserActivityTime(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.lastActivityTime = new Date();
        console.log(`User's last activity time updated: ${user.lastActivityTime}`);
        resolve(user);
      }, 1000);
    });
  }
  // Assume these are the initial posts and user object
  let posts = ['Post One', 'Post Two'];
  let user = {
    name: 'John',
  };
  
  // Create a function to create a post
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        console.log(`Post created: ${post}`);
        resolve(post);
      }, 1000);
    });
  }
  
  // Create a function to delete the last post
  function deleteLastPost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const deletedPost = posts.pop();
        console.log(`Post deleted: ${deletedPost}`);
        resolve(deletedPost);
      }, 1000);
    });
  }
  
  // Call the createPost function to create a new post and update the last activity time of the user
  createPost('Post Three')
    .then((post) => updateLastUserActivityTime(user))
    .then((user) => {
      // Once both promises are resolved, log all the posts and the last activity time of the user
      console.log(`All posts created: ${posts}`);
      console.log(`User's last activity time: ${user.lastActivityTime}`);
      return deleteLastPost();
    })
    .then((deletedPost) => {
      // Once the post deletion promise is resolved log the updated set of posts
      console.log(`All posts after deletion: ${posts}`);
    })
    .catch((error) => {
      console.error(error);
    });