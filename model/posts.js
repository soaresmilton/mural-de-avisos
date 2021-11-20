module.exports = {
  posts: [
    {
      id: "dsuahduas",
      title: 'Campeonato de fifa',
      description: 'Irá ocorrer um campeonato de fifa'
    },
  ],

  getAll() {
    return this.posts;
  },

  newPost(title, description) {

    this.posts.push({ id: generateID(), title, description });
  }
}

function generateID() {
  return Math.random().toString(36).substring(2, 9);
}