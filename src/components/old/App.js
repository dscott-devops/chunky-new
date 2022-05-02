import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { FaTwitter } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiTwotoneStar,
  AiOutlinePicture,
  AiOutlineAlignLeft,
  AiOutlineFileGif,
  AiOutlineSmile, AiOutlineDown
} from "react-icons/ai";
import { BiHomeCircle } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { MdBookmarkBorder } from "react-icons/md";
import { BsCardText } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";

const App = () => {
  return (
    <div className="App">
      <div className="Main">
        <div className="Left_Sidebar">
          <div className="Twitter">
            <AiOutlineTwitter color="#1DA1F2" fontSize="2.3rem" />
          </div>

          <div className="Icons">
            <BiHomeCircle color="#1DA1F2" fontSize="2rem" />
            <div>Home</div>
          </div>
          <div className="Icons">
            <BiHash color="#1DA1F2" fontSize="2rem" />
            <div>Explore</div>
          </div>
          <div className="Icons">
            <BiBell color="#1DA1F2" fontSize="2rem" />
            <div>Notification</div>
          </div>
          <div className="Icons">
            <MdMailOutline color="#1DA1F2" fontSize="2rem" />
            <div>Messages</div>
          </div>
          <div className="Icons">
            <MdBookmarkBorder color="#1DA1F2" fontSize="2rem" />
            <div>Bookmarks</div>
          </div>
          <div className="Icons">
            <BsCardText color="#1DA1F2" fontSize="2rem" />
            <div>Lists</div>
          </div>
          <div className="Icons">
            <FaUserCircle color="#1DA1F2" fontSize="2rem" />
            <div>Profiles</div>
          </div>
          <div className="Icons">
            <FaEllipsisH color="#1DA1F2" fontSize="2rem" />
            <div>More</div>
          </div>
          <div className="Icons">
            <button className="btn">Chunk</button>
          </div>
        </div>

        <div className="Main_Area">
          <div className="Home">
            <div className="home">
              Home
              <div className="Star_icon">
                <AiTwotoneStar color="#1DA1F2" fontSize="2rem"></AiTwotoneStar>
              </div>
              <br></br>
            
            <div className="Create_post">
              <div className="Add_test">
                <div className="Profile">
                  <img
                    src="https://rts-llc.com/me.jpg"
                    alt="dp"
                    style={{
                      height: "35px",
                      width: "35px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <input type="Post" placeholder="What's Happenning" />
              </div>
            </div>
            
            <div className="Btns">
              <div className="Icon">
                <div className="Btns_icon">
                  <AiOutlinePicture fontSize="1.5rem" color="#1DA1F2" />
                </div>
                <div className="Btns_icon">
                  <AiOutlineFileGif fontSize="1.5rem" color="#1DA1F2" />
                </div>
                <div className="Btns_icon">
                  <AiOutlineAlignLeft fontSize="1.5rem" color="#1DA1F2" />
                </div>
                <div className="Btns_icon">
                  <AiOutlineSmile fontSize="1.5rem" color="#1DA1F2" />
                </div>
              </div>
              <div className="Tweet">
                <button className="btns-tweet">
                  Tweet
                  </button>
              </div>
            </div>
          </div>
            <div className="posted_Area">
              <div className="ProFile">
                <div className="User_Detail">
                <img
                    src="https://rts-llc.com/me.jpg"
                    alt="logo"
                    style={{
                      height: "35px",
                      width: "35px",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="User_Name">Darryl Scott</div>
                  <div className="User_id">@dscott</div>
                </div>
                <div className="Drop_down">
                <AiOutlineDown fontSize="1rem" />
                </div>
              </div>
              <div className="Quotes">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis justo et neque hendrerit tristique. Nullam vel dui iaculis tellus aliquam faucibus. Vivamus interdum nulla erat. Mauris metus nisl, ullamcorper ut nulla eu, sollicitudin posuere elit. Pellentesque non imperdiet diam, et ornare leo. Maecenas facilisis dui sed felis scelerisque aliquam. In id sapien dictum, fringilla dui et, volutpat libero. Maecenas eu convallis lectus. Cras in odio sapien. Nulla at mauris nec arcu elementum fringilla quis non ante. Phasellus sollicitudin ipsum odio, vitae lobortis arcu dapibus molestie. Vivamus tincidunt erat in arcu sodales, vel gravida lorem bibendum. Donec congue risus quis augue finibus imperdiet et sed orci. Duis pulvinar mauris diam, at lacinia nisl ullamcorper a. Sed a felis feugiat, maximus tellus quis, laoreet ante. 
              </div>
              <br></br>
              <div className="Profile_images">
              <img
                    src="https://rts-llc.com/ebonywall2.jpg"
                    alt="profile"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "fill",
                    }}
                  />
              </div>

              <div className="ProFile">
                <div className="User_Detail">
                <img
                    src="https://rts-llc.com/me.jpg"
                    alt="logo"
                    style={{
                      height: "35px",
                      width: "35px",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="User_Name">Darryl Scott</div>
                  <div className="User_id">@dscott</div>
                </div>
                <div className="Drop_down">
                <AiOutlineDown fontSize="1rem" />
                </div>
              </div>
              <div className="Quotes">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis justo et neque hendrerit tristique. Nullam vel dui iaculis tellus aliquam faucibus. Vivamus interdum nulla erat. Mauris metus nisl, ullamcorper ut nulla eu, sollicitudin posuere elit. Pellentesque non imperdiet diam, et ornare leo. Maecenas facilisis dui sed felis scelerisque aliquam. In id sapien dictum, fringilla dui et, volutpat libero. Maecenas eu convallis lectus. Cras in odio sapien. Nulla at mauris nec arcu elementum fringilla quis non ante. Phasellus sollicitudin ipsum odio, vitae lobortis arcu dapibus molestie. Vivamus tincidunt erat in arcu sodales, vel gravida lorem bibendum. Donec congue risus quis augue finibus imperdiet et sed orci. Duis pulvinar mauris diam, at lacinia nisl ullamcorper a. Sed a felis feugiat, maximus tellus quis, laoreet ante. 
              </div>
              <br></br>
              <div className="Profile_images">
              <img
                    src="https://rts-llc.com/ebonywall2.jpg"
                    alt="profile"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "fill",
                    }}
                  />
              </div>

            </div>
          </div>
        </div>

        <div className="Right_Sidebar">Right Right_Sidebar</div>
      </div>
    </div>
  );
};

export default App;
