import { createSlice } from '@reduxjs/toolkit';
import { initialDashboard } from '../data/initialDashboard';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialDashboard,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);
      if (category) {
        category.widgets.push({ ...widget, id: Date.now() });
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(w => w.id !== widgetId);
      }
    },
    addCategory: (state, action) => {
      state.categories.push({
        id: Date.now(),
        name: action.payload,
        widgets: []
      });
    },
  },
});

export const { addWidget, removeWidget, addCategory } = dashboardSlice.actions;
export default dashboardSlice.reducer;