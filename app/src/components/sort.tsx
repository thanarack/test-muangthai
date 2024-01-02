import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 12px;
  display: flex;
  align-items: center;
`;

const DropdownButton = styled.button`
  color: #fff;
  background-color: #3c3c3c;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: 14px;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  padding: 10px;
`;

const DropdownMenu = styled.ul<{ $open: boolean }>`
  position: absolute;
  top: 120%;
  right: 0;
  width: 100%;
  background-color: #f9f9f9;
  padding: 0;
  margin: 0;
  list-style: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(92, 92, 92, 0.2);
  display: ${({ $open }) => ($open ? 'block' : 'none')};
  z-index: 99;
  font-size: 14px;
`;

const DropdownMenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e5e5e5;

  }
`;

type TSort = {
  select: number;
  onSelect: (id: number) => void;
};

const DropdownSort: React.FC<TSort> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortData] = useState([
    {
      id: 1,
      name: 'Title A-Z',
      sort: 'Title A-Z',
    },
    {
      id: 2,
      name: 'Title Z-A',
      sort: 'Title Z-A',
    },
    {
      id: 3,
      name: 'Vote Max-Min',
      sort: 'Vote Max-Min',
    },
    {
      id: 4,
      name: 'Vote Min-Max',
      sort: 'Vote Min-Max',
    },
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (id: number) => {
    props.onSelect(id);
    setIsOpen(!isOpen);
  };

  const mapNameData = sortData.find((item) => item.id === props.select);

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        Sort By - {mapNameData?.name}
      </DropdownButton>
      <DropdownMenu $open={isOpen}>
        {sortData.map((item) => (
          <DropdownMenuItem key={item.id} onClick={() => onSelect(item.id)}>
            {item.sort}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default DropdownSort;
