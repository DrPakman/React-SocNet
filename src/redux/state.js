let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likes: "15" },
      { id: 2, message: "It's my first post!", likes: "20" },
      { id: 3, message: "Blabla", likes: "11" },
      { id: 4, message: "Ok", likes: "11" },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Alex" },
      { id: 2, name: "Tom" },
      { id: 3, name: "Bob" },
      { id: 4, name: "Anna" },
      { id: 5, name: "Sam" },
      { id: 6, name: "Jane" },
    ],
    messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "I am good" },
      { id: 4, message: "Bye" },
      { id: 5, message: "Bye" },
    ],
  },

  sidebar: {
    friends: [
      { id: 1, name: "Alex" },
      { id: 2, name: "Lisa" },
      { id: 3, name: "Bob" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id:5 ,
    message: postMessage,
    likes: 0
  };
  state.profilePage.posts.push(newPost);

}

export default state;
