import styled from "styled-components";

export const FeedsContainer = styled.div`
  margin: 8px;
`;
export const FeedWrapper = styled.div`
  overflow: hidden;
  border: 1px solid lightgrey;
  margin-bottom: 8px;
`;
export const FeedAdminDetails = styled.div`
  width: 100%;
  // background-color: yellow;
  height: 60px;
  display: flex;
  align-items: center;
`;
export const AdminImage = styled.img`
  width: 42px;
  height: 42px;
  padding: 2px;
  border: 1px solid purple;
  border-radius: 50%;
  margin: 0px 8px;
`;

export const AdminName = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin: 0px;
`;
export const FeedActionsList = styled.button`
  margin: 0px 32px;
  padding: 0px;
  margin-left: auto;
  cursor: pointer;
  border: none;
  outline: none;
  background: inherit;
  font-weight: 800;
  font-size: 20px;
`;
export const FeedImageWrapper = styled.div`
`;
export const FeedImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  background-color: red;
`;
export const FeedActionsButtons = styled.div`
  display: flex;
  padding: 5px 10px;
  & > button:last-child {
    margin-left: auto;
  }
`;

export const FeedActionButtonWrapper = styled.button`
  border: none;
  outline: none;
  background: inherit;
  cursor: pointer;
  padding: 7px;
`;
export const Loading = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoadingText = styled.p`
  font-weight: 800;
`;
