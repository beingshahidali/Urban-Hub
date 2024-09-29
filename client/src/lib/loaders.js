import apiRequest from "./apiRequest";
import { defer } from "react-router-dom";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};
export const listPageLoader = async ({ request, params }) => {
  try {
    const query = request.url.split("?")[1] || ""; // Ensure query is an empty string if undefined
    const postPromise = await apiRequest("/posts?" + query);

    return defer({
      postResponse: postPromise,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    // Handle error gracefully, maybe return a fallback or an error message
    return { error: "Failed to load posts" };
  }
};

export const profilePageLoader = async () => {
  const postPromise = apiRequest("/users/profilePosts");
  return defer({
    postResponse: postPromise,
  });
};
