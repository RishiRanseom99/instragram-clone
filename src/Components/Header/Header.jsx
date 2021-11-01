import React, { useState } from "react";
import {
  HeaderContainer,
  InstagramLogoContainer,
  SearchBoxWrapper,
  SearchBoxContent,
  SearchText,
  SearchBoxInput,
  HeaderButtonContainer,
  SvgIconWrapper,
} from "./HeaderStyles";
import InstragramLogo from "../../Icons/InstragramLogo";
import HomeIcon from "../../Icons/HomeIcon";
import CompassLogo from "../../Icons/CompassLogo";
import HeartLogo from "../../Icons/HeartLogo";
import PlusCircle from "../../Icons/PlusCircle";
import MessengerIcon from "../../Icons/MessengerIcon";
import SearchIcon from "../../Icons/SearchIcon";
function Header() {
  const [searchBoxStatus, updateSearchBoxStatus] = useState(false);
  return (
    <HeaderContainer>
      <InstagramLogoContainer>
        <InstragramLogo />
      </InstagramLogoContainer>
      <SearchBoxWrapper
        onClick={() => {
          updateSearchBoxStatus(true);
        }}
      >
        <SearchBoxContent>
          {!searchBoxStatus ? (
            <>
              <SearchIcon />
              <SearchText>Search</SearchText>
            </>
          ) : (
            <SearchBoxInput placeholder="Search" autoFocus />
          )}
        </SearchBoxContent>
      </SearchBoxWrapper>
      <HeaderButtonContainer>
        <SvgIconWrapper>
          <HomeIcon />
        </SvgIconWrapper>
        <SvgIconWrapper>
          <MessengerIcon />
        </SvgIconWrapper>
        <SvgIconWrapper>
          <PlusCircle />
        </SvgIconWrapper>
        <SvgIconWrapper>
          <CompassLogo />
        </SvgIconWrapper>
        <SvgIconWrapper>
          <HeartLogo />
        </SvgIconWrapper>
      </HeaderButtonContainer>
    </HeaderContainer>
  );
}

export default Header;
