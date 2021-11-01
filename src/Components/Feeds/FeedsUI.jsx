import React, { useEffect } from "react";

import {
  FeedsContainer,
  FeedWrapper,
  FeedAdminDetails,
  AdminImage,
  AdminName,
  FeedActionsList,
  FeedImageWrapper,
  FeedImage,
  FeedActionsButtons,
  FeedActionButtonWrapper,
  LoadingText,
  Loading,
} from "./FeedStyle";
import HeartLogo from "../../Icons/HeartLogo";
import InstagramCommentLogo from "../../Icons/InstagramCommentLogo";
import ShareLogo from "../../Icons/ShareLogo";
import SaveLogo from "../../Icons/SaveLogo";

function FeedsUI(props) {
  const { feeds, getFeeds, lastFeedRef, loadingFeed, fetchFeedError } = props;

  useEffect(() => {
    getFeeds();
  }, []);
  return (
    <FeedsContainer>
      {feeds.map((feed, inx) => {
        const FeedBody = (
          <>
            <FeedAdminDetails>
              <AdminImage src="https://picsum.photos/id/237/40/40" />
              <AdminName>{feed.author}</AdminName>
              <FeedActionsList>...</FeedActionsList>
            </FeedAdminDetails>
            <FeedImageWrapper>
              <FeedImage src={`https://picsum.photos/id/${feed.id}/1000/1000`} />
            </FeedImageWrapper>
            <FeedActionsButtons>
              <FeedActionButtonWrapper>
                <HeartLogo />
              </FeedActionButtonWrapper>
              <FeedActionButtonWrapper>
                <InstagramCommentLogo />
              </FeedActionButtonWrapper>
              <FeedActionButtonWrapper>
                <ShareLogo />
              </FeedActionButtonWrapper>
              <FeedActionButtonWrapper>
                <SaveLogo />
              </FeedActionButtonWrapper>
            </FeedActionsButtons>
          </>
        );
        if (inx === feeds.length - 1) {
          return (
            <FeedWrapper ref={lastFeedRef} key={feed.id}>
              {FeedBody}
            </FeedWrapper>
          );
        } else {
          return <FeedWrapper key={feed.id}>{FeedBody}</FeedWrapper>;
        }
      })}
      {loadingFeed && (
        <Loading>
          <LoadingText>Loading more feeds</LoadingText>
        </Loading>
      )}
      {fetchFeedError !== "" && (
        <Loading>
          <LoadingText>{fetchFeedError}</LoadingText>
        </Loading>
      )}
    </FeedsContainer>
  );
}

export default FeedsUI;
