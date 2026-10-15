import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import wellnessReducer from './wellnessSlice';

export const store = configureStore({
  reducer: {
    wellness: wellnessReducer
  }
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
