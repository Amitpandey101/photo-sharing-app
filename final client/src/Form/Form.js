import { useState } from "react";
import FileBase64 from "react-file-base64";
import { Link } from "react-router-dom";
import Header from "../Header/header";
import axios from "axios";
import "./Form.css";

const Form = () => {
  const [newPostState, setnewPostState] = useState({
    image: "",
    author: "",
    location: "",
    description: "",
  });
  const handleUserPost = () => {
    axios({
      url: "https://full-and-final-server.herokuapp.com/new",
      method: "POST",
      headers: {},
      data: newPostState,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header />
      <br />
      <br />
      <div className="login-box">
        <h2 className="heading-color"> <strong> New Post </strong></h2>
        <form>
          <div className="user-box">
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setnewPostState({ ...newPostState, image: base64 })
              }
            />
            <label>Image</label>
          </div>

          <div className="user-box">
            <input
              type="text"
              onChange={(e) =>
                setnewPostState({ ...newPostState, author: e.target.value })
              }
            />
            <label>Author</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              onChange={(e) =>
                setnewPostState({ ...newPostState, location: e.target.value })
              }
            />
            <label>Location</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              onChange={(e) =>
                setnewPostState({
                  ...newPostState,
                  description: e.target.value,
                })
              }
            />
            <label>Description</label>
          </div>
<div className="button1">
          <Link to="/PostView">
            <button id="post-button" type="submit" onClick={handleUserPost}>
          
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              POST
            </button>
          </Link>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
