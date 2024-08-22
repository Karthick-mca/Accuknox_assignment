import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addWidget, removeWidget } from '../store/dashboardSlice';
import Category from './Category';
import AddWidgetForm from './AddWidgetForm';
import SearchBar from './SearchBar';

const DashboardWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Dashboard = () => {
  const categories = useSelector(state => state.dashboard.categories);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleAddWidget = (categoryId, widget) => {
    dispatch(addWidget({ categoryId, widget }));
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidget({ categoryId, widgetId }));
  };

  const filteredCategories = categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget => 
      widget.name.toLowerCase().includes(search.toLowerCase())
    )
  }));

  return (
    <DashboardWrapper>
      <h1>Dashboard</h1>
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <AddWidgetForm
        categories={categories}
        onAddWidget={handleAddWidget}
      />
      {filteredCategories.map(category => (
        <Category
          key={category.id}
          category={category}
          onRemoveWidget={handleRemoveWidget}
        />
      ))}
    </DashboardWrapper>
  );
};

export default Dashboard;