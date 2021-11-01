/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import {
  StoriesContainer,
  StoriesWrapper,
  StoryItemWrapper,
  StoryItem,
  StoryItemCaption,
  StoriesButtonWrapper,
  StoriesButton,
  LoadingScreen,
} from "./StoriesStyles";

function StoriesUI(props) {
  const { stories, getFeeds, lastStoryRef, loadingStories, fetchStoryError } = props;
  useEffect(() => {
    getFeeds();
  }, []);
  return (
    <StoriesContainer>
      <StoriesWrapper>
        {stories.map((story, inx) => {
          const storyBody = (
            <>
              <StoryItem src={`https://picsum.photos/id/${story.id}/100/100`} />
              <StoryItemCaption>{story.author}</StoryItemCaption>
            </>
          );
          if (inx === stories.length - 1) {
            return (
              <StoryItemWrapper ref={lastStoryRef} key={story.id}>
                {storyBody}
              </StoryItemWrapper>
            );
          } else {
            return <StoryItemWrapper key={story.id}>{storyBody}</StoryItemWrapper>;
          }
        })}
        {loadingStories && (
          <>
            <StoryItemWrapper>
              <LoadingScreen />
              <StoryItemCaption>Loading...</StoryItemCaption>
            </StoryItemWrapper>
            <StoryItemWrapper>
              <LoadingScreen />
              <StoryItemCaption>Loading...</StoryItemCaption>
            </StoryItemWrapper>
          </>
        )}
      </StoriesWrapper>
      {/* <StoriesButtonWrapper>
        <StoriesButton>Prev</StoriesButton>
        <StoriesButton>Next</StoriesButton>
      </StoriesButtonWrapper> */}
    </StoriesContainer>
  );
}

export default StoriesUI;
