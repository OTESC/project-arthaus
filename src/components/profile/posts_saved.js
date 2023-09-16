import React, { useState, useRef } from "react";
import Tab from 'react-bootstrap/Tab';
import TabContent from 'react-bootstrap/TabContent'
import Tabs from 'react-bootstrap/Tabs';
import AI from "../../assets/art/AI.png";
import giraffe from "../../assets/art/jiraffe.png";
import scenery from "../../assets/art/scenery.png";
import scrapper from "../../assets/art/scrapper.png";
import scrappers from "../../assets/art/scrappers.png";
import smiley from "../../assets/art/smiley.png";
import vr from "../../assets/art/vr.png";
import AI_dark from "../../assets/profile_images/AI_dark.png";
import giraffe_dark from "../../assets/profile_images/giraffe_dark.png";
import scrappers_dark from "../../assets/profile_images/scrappers_dark.png";
import smiley_dark from "../../assets/profile_images/smiley_dark.png";

const PostsSaved = () => {

  const [key, setKey] = useState('saved');

  const posted_images = [giraffe, scenery, scrappers, AI, vr, smiley, scrapper];
  const saved_images = [giraffe_dark, AI_dark, smiley_dark, scrappers_dark];

  const postedImages = (
    <div data-masonry='{"percentPosition": true}' className="posted_images">
      <div className="col">
        <img src={posted_images[0]} className="img-thumbnail" alt="8" />
        <img src={posted_images[1]} className="img-thumbnail" alt="12" />
        <img src={posted_images[2]} className="img-thumbnail" alt="14" />
      </div>
      <div className="col">
        <img src={posted_images[3]} className="img-thumbnail" alt="1" />
        <img src={posted_images[4]} className="img-thumbnail" alt="18" />
      </div>
      <div className="col">
        <img src={posted_images[5]} className="img-thumbnail" alt="15" />
        <img src={posted_images[6]} className="img-thumbnail" alt="13" />
      </div>
    </div>
  );

  const [postedContent, setPostedContent] = useState([postedImages]);
  const clickPosted = () => {
    setPostedContent(postedContent === [postedImages] ? "" : [postedImages]);
  };

  const savedImages = (
    <div>
      <div data-masonry='{"percentPosition": true}' className="saved_images ">
        <div className="col" id="posts">
          <p className="all_posts">All Posts</p>

          <img src={saved_images[0]} className="img-thumbnail" alt="8" />
          <p className="portraits">Portraits</p>

          <img src={saved_images[2]} className="img-thumbnail" alt="12" />
        </div>

        <div className="col" id="saved">
          <p className="AI">Artificial Intelligence</p>
          <img src={saved_images[1]} className="img-thumbnail" alt="1" />
          <p className="architecture">Architecture</p>
          <img src={saved_images[3]} className="img-thumbnail" alt="18" />
        </div>
      </div>
    </div>
  );

  const [savedContent, setSavedContent] = useState([savedImages]);
  const clickSaved = () => {
    setSavedContent(savedContent === [savedImages] ? "" : [savedImages])
  };

  return (
    <Tabs
      id="fill-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      fill
    >

      <TabContent eventKey="saved" title="Saved Tab">
        <div data-masonry='{"percentPosition": true}' className="posted_images">
          <div className="col">
            <img src={posted_images[0]} className="img-thumbnail" alt="8" />
            <img src={posted_images[1]} className="img-thumbnail" alt="12" />
            <img src={posted_images[2]} className="img-thumbnail" alt="14" />
          </div>
          <div className="col">
            <img src={posted_images[3]} className="img-thumbnail" alt="1" />
            <img src={posted_images[4]} className="img-thumbnail" alt="18" />
          </div>
          <div className="col">
            <img src={posted_images[5]} className="img-thumbnail" alt="15" />
            <img src={posted_images[6]} className="img-thumbnail" alt="13" />
          </div>
        </div>
      </TabContent>

      <TabContent eventKey="posts" title="Posts Tab">
        <div data-masonry='{"percentPosition": true}' className="saved_images ">
          <div className="col" id="posts">
            <p className="all_posts">All Posts</p>

            <img src={saved_images[0]} className="img-thumbnail" alt="8" />
            <p className="portraits">Portraits</p>

            <img src={saved_images[2]} className="img-thumbnail" alt="12" />
          </div>

          <div className="col" id="saved">
            <p className="AI">Artificial Intelligence</p>
            <img src={saved_images[1]} className="img-thumbnail" alt="1" />
            <p className="architecture">Architecture</p>
            <img src={saved_images[3]} className="img-thumbnail" alt="18" />
          </div>
        </div>
      </TabContent>

    </Tabs>
  );
};
export default PostsSaved;
