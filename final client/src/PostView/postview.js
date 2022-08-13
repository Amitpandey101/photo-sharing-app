import { useEffect, useState } from "react";
import "./postview.css";
const PostView = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://full-and-final-server.herokuapp.com/all")
      .then((data) => {
        return data.json();

      })
      .then((userData) => {
      console.log(userData)
        setUserData(userData.data.reverse());
      });
  }, []);
  return (
    <>
  
    <div className="main">
      <div className="wrapper">
        <div class="left-col">
          {userData.map((user, i) => {
        
            return (
              <div className="post">
                <div className="info" key={i}>
                  <div className="user">
                  
                    <div class="profile-pic"><img src="" alt=""/></div>
                        <p class="username">  {user.author}</p>
                        </div>
                        <img src="option.PNG" class="options" alt=""/>
                  </div>
                  
                  <img src={user.image} class="post-image" alt=""/>
                  
                  <div class="post-content">
                    <div class="reaction-wrapper">
                        <img src="like.PNG" class="icon" alt=""/>
                        <img src="comment.PNG" class="icon" alt=""/>
                        <img src="send.PNG" class="icon" alt=""/>
                        <img src="save.PNG" class="save icon" alt=""/>
                    </div>
                    <p class="likes">{user.likes}</p>
                    <p class="description"><span> {user.author}</span>{user.description}</p>
                    <p class="post-time">{user.date}</p>
                </div>
                  
                <div class="comment-wrapper">
                    <img src="img/smile.PNG" class="icon" alt=""/>
                    <input type="text" class="comment-box" placeholder="Add a comment"/>
                    <button class="comment-btn">post</button>
                </div>
                </div>
             
            );
          })}
        </div>
        </div>
        </div>
    </>
  );
};
export default PostView;
