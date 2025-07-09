import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.scss';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'dark' ? '☀️ Light ' : '🌙 Dark '}
    </button>
  );
};

export default ThemeToggle;
