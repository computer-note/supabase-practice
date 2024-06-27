import { useState } from 'react';
import useInput from './../hooks/useInput';
import authApi from '../supabase/authApi';
import authManager from '../manager/authManager';

function AuthTestPage() {
  const [emailInputRef, EmailInputLabelPair] = useInput(
    '이메일 입력:   ',
    'email-input'
  );
  const [passwordInputRef, PasswordInputLabelPair] = useInput(
    '패스워드 입력:   ',
    'password-input'
  );

  const [outputData, setOutputData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  async function handleOnSubmit(e) {
    e.preventDefault();

    const response = await authApi.loginUser(
      emailInputRef.current.value,
      passwordInputRef.current.value
    );

    if (response.error) {
      setOutputData([
        `${response.error.status} ${response.error.stack}`,
      ]);
      return;
    }

    //TODO: stringify 옵션 공부하기: replacerFn, spacer
    setOutputData(
      (
        JSON.stringify(response.data.user) +
        JSON.stringify(response.data.session)
      ).split(',')
    );
    authManager.setAccessToken(response.data.session.access_token);
    setIsLogin(true);
    e.target.reset();
  }

  function handleLogoutButtonClick() {
    authManager.setLogout();
    setIsLogin(false);
  }

  return (
    <main>
      <button onClick={handleLogoutButtonClick}>로그아웃하기</button>
      <p>로그인상태: {`${isLogin}`.toUpperCase()}</p>
      <p>test2@example.com</p>
      <form onSubmit={handleOnSubmit}>
        <p>로그인하기</p>
        {EmailInputLabelPair}
        {PasswordInputLabelPair}
        <button>로그인</button>
      </form>
      <hr />
      <div className='h-[100px] bg-amber-200'></div>
      <p>회원가입</p>

      <section className='  w-[600px] bg-green-100'>
        {outputData.map((data, idx) => (
          <ul key={idx} className='break-words'>
            {data}
          </ul>
        ))}
      </section>
    </main>
  );
}

export default AuthTestPage;
