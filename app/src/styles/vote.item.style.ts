import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  position: relative;
`;

export const NumberVote = styled.div`
  border-radius: 50%;
  background: #e0e0e0;
  height: 64px;
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: center;
  font-size: 26px;
`;

export const Description = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 1.5;
  margin-top: 16px;
  color: #525252;
  text-indent: 24px;
`;

export const Thumbnail = styled.img`
  width: auto;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  flex: 1;
  box-shadow: 0 4px 8px 0 rgba(37, 37, 37, 0.2);
`;

export const Container = styled.div<{ mode: string }>`
  border: 1px solid #e0e0e0;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(172, 172, 172, 0.1);
  transition: 0.3s;
  ${(props) =>
    props.mode === 'vote' &&
    `&:hover {
    background: #f2f2f2;
    cursor: pointer;
    ${NumberVote} {
      background: #ff0266;
      color: white;
    }
    ${Description} {
      color: #181818;
    }
  }`}
`;

export const HeadTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 2;
  gap: 8px;
`;

export const ModeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 16px;
  margin-top: 16px;
`;
