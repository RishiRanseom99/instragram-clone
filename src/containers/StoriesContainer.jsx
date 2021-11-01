import React, { useState, useRef, useCallback } from "react";
import axios from "axios";

function StoriesContainer(props) {
    const [loadingStories, setLoadingStories] = useState(false);
    const [fetchStoryError, updateFetchStoryError] = useState("");
    const [stories, updateStories] = useState([]);
    const storiesLimit = useRef(10);
    const pageNo = useRef(0);
    const lastStoryObserver = useRef();
    const lastStoryRef = useCallback(
      (lastFeedNode) => {
        if (loadingStories) {
          return;
        }
        if (lastStoryObserver.current) lastStoryObserver.current.disconnect();
        lastStoryObserver.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            getFeeds();
          }
        });
        if (lastFeedNode) {
            lastStoryObserver.current.observe(lastFeedNode);
        }
      },
      [loadingStories]
    );
  
    const getFeeds = async () => {
      try {
        setLoadingStories(true);
        const feedsResponse = await axios.get(
          `https://picsum.photos/v2/list?page=${pageNo.current + 1}&limit=${storiesLimit.current}`
        );
        pageNo.current += 1;
        updateStories((prevFeeds) => {
          return [...prevFeeds, ...feedsResponse.data];
        });
        updateFetchStoryError("");
      } catch (err) {
        updateFetchStoryError("Trouble in fetching stories");
      } finally {
        setLoadingStories(false);
      }
    };
    const child = React.Children.only(props.children);
    return React.cloneElement(child, {
        stories,
        getFeeds,
        lastStoryRef,
        loadingStories,
        fetchStoryError,
     
    });
}

export default StoriesContainer
