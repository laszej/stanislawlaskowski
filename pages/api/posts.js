// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const posts = [
  {
    id: 1,
    author: "Next.js app",
    content: "Witamy wszystkich na naszym czacie!",
  }
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ posts });
  } else if (req.method === "POST") {
    const newPost = req.body;
    newPost.id = Date.now();
    posts.push(newPost);
    res.status(201).json({ post: newPost });
  } else if (req.method === "DELETE") {
    const postId = req.query.id;
    const index = posts.findIndex((post) => post.id == postId);
    if (index >= 0) {
      posts.splice(index, 1);
      res.status(200).json({ message: "Post deleted" });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
