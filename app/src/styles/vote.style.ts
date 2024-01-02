import styled from 'styled-components';

export const VoteBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 16px 0;
  box-sizing: border-box;
  background: white;
  position: relative;
  row-gap: 1rem;
  column-gap: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: semibold;
  margin-bottom: 16px;
  color: #ff0266;
`;

export const SearchInput = styled.input`
  padding: 12px;
  box-sizing: border-box;
  width: 100%;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-radius: 8px;
  border-bottom: 1px solid #e0e0e0;
  border: 1px solid #e0e0e0;
  &:focus,
  &:active,
  &:hover {
    border: 1px solid #313131;
    outline: none;
  }
`;
