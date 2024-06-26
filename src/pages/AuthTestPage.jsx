import { useState } from 'react';
import authApi from '../supabase/authApi';
import useInput from './../hooks/useInput';

function AuthTestPage() {
  const [emailInputRef, EmailInputLabelPair] = useInput(
    'email',
    'email-input'
  );
  const [passwordInputRef, PasswordInputLabelPair] = useInput(
    'password',
    'password-input'
  );
  const [outputData, setOutputData] = useState([]);

  async function handleOnSubmit(e) {
    e.preventDefault();

    const response = await authApi.loginUser(
      emailInputRef.current.value,
      passwordInputRef.current.value
    );

    console.log('response ↓');
    console.dir(response);

    if (response.error) {
      setOutputData([
        `${response.error.status} ${response.error.stack}`,
      ]);
    } else {
      //TODO: stringify 옵션 공부하기
      //replacerFn, spacer
      setOutputData(
        (
          JSON.stringify(response.data.user) +
          JSON.stringify(response.data.session)
        ).split(',')
      );
    }
    e.target.reset();
  }

  return (
    <main>
      <p>test2@example.com</p>
      <form onSubmit={handleOnSubmit}>
        {EmailInputLabelPair}
        {PasswordInputLabelPair}
        <button>로그인</button>
      </form>
      <hr />
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
