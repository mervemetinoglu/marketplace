import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectTheme, toggleTheme } from '@/features/theme';

export const useThemeToggle = () => {
  const dispatch = useAppDispatch();
  const { isDarkMode } = useAppSelector(selectTheme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return {
    isDarkMode,
    handleToggleTheme,
  };
};
