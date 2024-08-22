import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const WidgetWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const WidgetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const WidgetTitle = styled.h3`
  margin: 0;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
  font-size: 16px;
`;

const Widget = ({ widget, onRemove }) => {
  return (
    <WidgetWrapper>
      <WidgetHeader>
        <WidgetTitle>{widget.name}</WidgetTitle>
        <RemoveButton onClick={onRemove}>
          <FaTimes />
        </RemoveButton>
      </WidgetHeader>
      <p>{widget.text}</p>
    </WidgetWrapper>
  );
};

export default Widget;