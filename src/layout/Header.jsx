import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-green-200 h-[100px] '>
      go to...
      <navigator className='flex justify-around items-center bg-yellow-200 h-[50%]'>
        <Link to='/main'>MainPage</Link>
        <Link to='/login'>LoginPage</Link>
        <Link to='/signup'>SignupPage</Link>
        <Link to='/auth-test'>AuthTestPage</Link>
      </navigator>
    </header>
  );
}

export default Header;
