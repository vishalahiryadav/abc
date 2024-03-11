import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Home({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await getDocs(postsCollectionRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="homePage">
      {postList.map((post) => (
        <div className="post" key={post.id}>
          <div className="postHeader">
            <div className="title">
              <h1>{post.title}</h1>
            </div>
            <div className="User ID">
              <h1>{auth.currentUser.uid}</h1>
            </div>

            <div className="picture">

              <img src={post.pic} alt="jai himd" />
            </div> 
            <div className="deletePost">
              {isAuth && post.author && post.author.id === auth.currentUser.uid && (
                <button onClick={() => deletePost(post.id)}>
                  &#128465;
                </button>
              )}
              
            </div>
          </div>
          <div className="postTextContainer">{post.postText}</div>
          <h3>@{post.author && post.author.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Home;
