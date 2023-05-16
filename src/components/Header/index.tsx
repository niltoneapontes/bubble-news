import { ReactComponent as Logo } from '../../assets/logo.svg';
import SearchInput from '../SearchInput';

export default function Header() {
  return (
    <div className='flex items-center justify-between w-full'>
      <Logo className='h-16'></Logo>
      <SearchInput></SearchInput>
    </div>
  )
}
