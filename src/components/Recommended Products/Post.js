import fire from "../../config";

export default {
  /**
   * this function will be fired when the app is first time run,
   * and it will fetch first 5 posts, here i retrieve them in desc order,
   * until show last added post first.
   */
  postsFirstBatch: async function () {
    try {
      const data = await fire
        .firestore()
        .collection("VendorReviews")
        .orderBy("date", "desc")
        .limit(2)
        .get();

      let posts = [];
      let lastKey = "";
      data.forEach((doc) => {
        // posts.push({
        //   postId: doc.id,
        //   postContent: doc.data().review,
        // });
        posts.push(doc.data());
        lastKey = doc.data().date;
      });

      return { posts, lastKey };
    } catch (e) {
      console.log(e);
    }
  },

  /**
   * this function will be fired each time the user click on 'More Posts' button,
   * it receive key of last post in previous batch, then fetch next 5 posts
   * starting after last fetched post.
   */
  postsNextBatch: async (key) => {
    try {
      const data = await fire
        .firestore()
        .collection("VendorReviews")
        .orderBy("date", "desc")
        .startAfter(key)
        .limit(2)
        .get();

      let posts = [];
      let lastKey = "";
      data.forEach((doc) => {
        // posts.push({
        //   postId: doc.id,
        //   postContent: doc.data().review,
        // });
        posts.push(doc.data());
        lastKey = doc.data().date;
      });
      return { posts, lastKey };
    } catch (e) {
      console.log(e);
    }
  },
};
