import { useDarkMode } from '../context/DarkModeContext.jsx';
import ButtonIcon from './ButtonIcon.jsx';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
