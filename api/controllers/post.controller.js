import prisma from "../lib/prisma.js";
export const getPosts = async (req, res) => {
  const query = req.query;
  try {
    const posts = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: parseInt(query.property) || undefined,
        bedroom: parseInt(query.bathroom) || undefined,
        bathroom: parseInt(query.bathroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || 0,
          lte: parseInt(query.maxPrice) || 100000,
        },
      },
    });

    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error getting posts", error: err.message });
  }
};

export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Error getting post" });
  }
};
export const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;

  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,
        postDetail: {
          create: body.postDetail,
        },
      },
    });
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create post" });
  }
};

export const updatePost = async (req, res) => {
  try {
    res.status(200).json({ message: "works find" });
  } catch (err) {
    res.status(500).json({ message: "Error getting posts" });
  }
};
export const deletePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });
    if (post.userId !== tokenUserId) {
      return res.status(403).json({ message: "not authorized to delete" });
    }
    await prisma.post.delete({
      where: { id },
    });
    res.status(200).json({ message: "Post Delete Successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error getting posts" });
  }
};
