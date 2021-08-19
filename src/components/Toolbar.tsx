import React from 'react';
import { IconContext } from 'react-icons';
import * as BiIcons from 'react-icons/bi';
import styled from 'styled-components';

interface Props {}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #060b26;
  height: 100%;
`;

const StyledIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #060b26;
  transition: 0.3s;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    background-color: whitesmoke;
  }
`;

export const Toolbar: React.VFC<Props> = () => {
  const test = () => console.log('test');

  return (
    <Wrapper>
      <IconContext.Provider value={{ color: 'lightgray', size: '30px' }}>
        <StyledIcon onClick={test}>
          <BiIcons.BiMap />
        </StyledIcon>
        <StyledIcon>
          <BiIcons.BiLayer />
        </StyledIcon>
        <StyledIcon>
          <BiIcons.BiLandscape />
        </StyledIcon>
        <StyledIcon>
          <BiIcons.BiMapAlt />
        </StyledIcon>
      </IconContext.Provider>
    </Wrapper>
  );
};
