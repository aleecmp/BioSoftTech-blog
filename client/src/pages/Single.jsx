import { useEffect, useState, useContext } from 'react';
import { images } from '../constants';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from '../components';
import moment from 'moment';
import { AuthContext } from '../context/authContext';
import DOMPurify from 'dompurify';
import axios from 'axios';

const Single = () => {
  const [post, setPost] = useState({});
  

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split('/')[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${postId}`);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  if (!currentUser) {
    return (
      <div className="nouser">
        Please log in to view this page.
        <Link to="/login">Login</Link>
      </div>
    );
  }

  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to="/write?edit=2" state={post}>
                <img src={images.editImage} alt="" />
              </Link>
              <img
                onClick={handleDelete}
                src={images.deleteImage}
                alt=""
              />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>{' '}
      </div>
      <Menu cat={post.cat} postId={postId} />
    </div>
  );
};

export default Single;
