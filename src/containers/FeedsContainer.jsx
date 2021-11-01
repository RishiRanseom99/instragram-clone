import React, { useState, useRef, useCallback } from "react";
import axios from "axios";

function FeedsContainer(props) {
  const [loadingFeed, setLoadingFeed] = useState(false);
  const [fetchFeedError, updateFetchFeedError] = useState("");
  const [feeds, updateFeeds] = useState([]);
  const feedLimit = useRef(10);
  const pageNo = useRef(0);
  const lastFeedObserver = useRef();
  const lastFeedRef = useCallback(
    (lastFeedNode) => {
      if (loadingFeed) {
        return;
      }
      if (lastFeedObserver.current) lastFeedObserver.current.disconnect();
      lastFeedObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          getFeeds();
        }
      });
      if (lastFeedNode) {
        lastFeedObserver.current.observe(lastFeedNode);
      }
    },
    [loadingFeed]
  );

  const getFeeds = async () => {
    try {
      setLoadingFeed(true);
      const feedsResponse = await axios.get(
        `https://picsum.photos/v2/list?page=${pageNo.current + 1}&limit=${feedLimit.current}`
      );
      pageNo.current += 1;
      updateFeeds((prevFeeds) => {
        return [...prevFeeds, ...feedsResponse.data];
      });
      updateFetchFeedError("");
    } catch (err) {
      updateFetchFeedError("Trouble in fetching feeds");
    } finally {
      setLoadingFeed(false);
    }
  };
  const child = React.Children.only(props.children);
  return React.cloneElement(child, {
    feeds,
    getFeeds,
    lastFeedRef,
    loadingFeed,
    fetchFeedError,
  });
}

export default FeedsContainer;
