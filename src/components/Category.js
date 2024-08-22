import React from 'react';
import styled from 'styled-components';
import Widget from './Widget';

const CategoryWrapper = styled.div`
  background-color: #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const CategoryTitle = styled.h2`
  margin-top: 0;
`;

const Category = ({ category, onRemoveWidget }) => {
  return (
    <CategoryWrapper>
      <CategoryTitle>{category.name}</CategoryTitle>
      {category.widgets.map(widget => (
        <Widget
          key={widget.id}
          widget={widget}
          onRemove={() => onRemoveWidget(category.id, widget.id)}
        />
      ))}
    </CategoryWrapper>
  );
};

export default Category;