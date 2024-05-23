import type { AppDispatch } from '@app/store/index';
import { useDispatch } from 'react-redux';

export const useAppDispatch = useDispatch<AppDispatch>;