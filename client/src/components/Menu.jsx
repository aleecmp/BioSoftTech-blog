import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Menu = ({ cat, postId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts
        .filter((post) => {
          postId = Number(postId);
          return post.id !== postId;
        })
        .map((post) => {
          return (
            <div className="post" key={post.id}>
              <img src={`../upload/${post?.img}`} alt="" />
              <h2>{post.title}</h2>
              <Link className="link" to={`/post/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Menu;
