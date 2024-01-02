import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { FiLogOut, FiTrash2, FiEdit, FiArrowLeft } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';

export const From = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
  padding: 12px 16px;
  background-color: #f7f7f7;
  border-radius: 8px;
  width: 100%;
  &:focus,
  &:active,
  &:hover {
    outline: none;
  }
  &[type='checkbox'] {
    width: 16px;
    height: 16px;
    accent-color: #ff0266;
  }
`;

export const InputText = styled.textarea`
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
  padding: 12px 16px;
  width: 100%;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border: none;
  background-color: #f7f7f7;
  border-radius: 8px;
  resize: none;
  min-height: 100px;
  &:focus,
  &:active,
  &:hover {
    outline: none;
  }
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;
  font-weight: bold;
  color: #ff0266;
`;

export const Button = styled.button<{
  $primary?: boolean;
  $secondary?: boolean;
}>`
  padding: 12px 20px;
  border: 0;
  ${({ $primary }) =>
    $primary &&
    `
    background: #ff0266;
    color: white;
  `}
  ${({ $secondary }) =>
    $secondary &&
    `
    background: white;
    border: 1px solid #ff0266;
    color: #000;
  `}
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  &:disabled {
    background: #e0e0e0;
    cursor: not-allowed;
  }
`;

export const FlexButton = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const SignUpText = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  font-size: 14px;
  color: #7a7a7a;
`;

export const LinkSingUp = styled(Link)`
  color: #ff0266;
  padding-left: 4px;
`;

export const CommonLink = styled(Link)`
  color: #ff0266;
  padding-left: 4px;
`;

export const Header = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const SubHeader = styled.h2`
  font-size: 16px;
  margin: 0;
  color: #00000042;
`;

export const InputGroupCheckBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;

export const Navbar = styled.nav`
  margin-top: 8px;
  display: flex;
  align-items: center;
  position: relative;
  gap: 16px;
  margin-bottom: 16px;
`;

export const WelcomeText = styled.span`
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: #7a7a7a;
`;

export const Title = styled.h1`
  font-size: 16px;
  margin: 0;
`;

export const Title3Light = styled.h1`
  font-size: 18px;
  margin: 0;
  font-weight: normal;
`;

export const Title2Light = styled.h1`
  font-size: 14px;
  margin: 0;
  font-weight: normal;
`;

export const FloatLeftIcon = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  > div[role='button'] {
    cursor: pointer;
  }
`;

export const FloatRightIcon = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  > div[role='button'] {
    cursor: pointer;
  }
`;

export const DateTitle = styled.h3`
  font-size: 12px;
  margin: 0;
  padding: 6px 0;
  background: #e0e0e0;
  text-align: center;
  margin-bottom: 8px;
  font-weight: normal;
`;

export const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ApBoxLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ApType = styled.span`
  color: #7a7a7a;
  font-size: 12px;
`;

export const IconTrash = styled(FiTrash2)<{ width?: string; height?: string }>`
  color: #ff0266;
  width: ${(props) => props.width || '20px'};
  height: ${(props) => props.height || '20px'};
`;

export const IconEdit = styled(FiEdit)<{ width?: string; height?: string }>`
  color: #ff0266;
  width: ${(props) => props.width || '20px'};
  height: ${(props) => props.height || '20px'};
`;

export const IconLogout = styled(FiLogOut)<{ width?: string; height?: string }>`
  color: #ff0266;
  width: ${(props) => props.width || '20px'};
  height: ${(props) => props.height || '20px'};
`;

export const IconPlus = styled(AiOutlinePlus)`
  color: #ff0266;
  width: ${(props) => props.width || '20px'};
  height: ${(props) => props.height || '20px'};
`;

export const IconArrowLeft = styled(FiArrowLeft)`
  color: #ff0266;
  width: ${(props) => props.width || '20px'};
  height: ${(props) => props.height || '20px'};
`;

export const WarpButton = styled.div`
  padding: 0 32px;
  box-sizing: border-box;
  width: 480px;
  background: white;
  position: absolute;
  bottom: 16px;
  left: 0;
`;

export const Select = styled.select`
  padding: 12px 8px;
  background: #f2f2f2;
  width: 100%;
  border-radius: 6px;
  border: 0;
  >
`;

export const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SelectBoxDate = styled.div`
  display: flex;
  flex-direction: row;

  gap: 8px;
  width: 100%;
`;

export const DateBox = styled.div<{ isSelect?: boolean }>`
  flex-basis: 64px;
  height: 64px;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  font-size: 14px;
  border-radius: 8px;
  border-color: transparent;
  border-width: 2px;
  border-style: solid;
  ${(props) =>
    props.isSelect &&
    `
    border-color: #ff0266;
  `}
`;

export const DragBox = styled.div`
  position: relative;
  cursor: move;
`;

export const WarpDrag = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const Hr = styled.hr`
  border: 0;
  border-top: 1px solid #e0e0e0;
  margin: 16px 0;
`;

export const SelectTimeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-flow: row wrap;
  gap: 14px;
`;

export const TimeBox = styled.div<{ isActive?: boolean; disabled?: boolean }>`
  flex-basis: 30%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  cursor: pointer;
  border-color: #00000042;
  border-width: 2px;
  border-style: solid;

  ${(props) =>
    props.isActive &&
    `
    border-color: #ff0266;
  `}

  ${(props) =>
    props.disabled &&
    `
    opacity: 0.2;
    cursor: not-allowed;
    pointer-events: none;
  `}
`;

export const NoSlotTime = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
`;

export const LoginError = styled.div`
  color: red;
  font-size: 12px;
  padding: 16px 0;
  font-weight: bold;
`;

export const CheckBoxItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  > span {
    font-size: 14px;
    color: #000;
    font-weight: normal;
  }
`;

export const CheckBoxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const WarpScroll = styled.div`
  overflow-y: scroll;
  max-height: 90vh;
  padding-bottom: 64px;
  box-sizing: border-box;
  padding-right: 8px;
`;
