import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-green-200 h-[100px] '>
      go to...
      <nav className='flex justify-around items-center bg-yellow-200 h-[50%]'>
        <Link to='/main'>MainPage</Link>
        <Link to='/login'>LoginPage</Link>
        <Link to='/signup'>SignupPage</Link>
        <Link to='/auth-test'>AuthTestPage</Link>
        <Link to='/hook-test'>HookTestPage</Link>
      </nav>
    </header>
  );
}

export default Header;
