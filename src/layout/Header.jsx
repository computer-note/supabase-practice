import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-green-200 h-[100px] '>
      <navigator className='flex justify-around items-center bg-yellow-200 h-[50%]'>
        <Link to='/main'>MainPage</Link>
        <Link to='/login'>MainPage</Link>
        <Link to='/signup'>MainPage</Link>
        <Link to='/auth-test'>MainPage</Link>
      </navigator>
    </header>
  );
}

export default Header;
