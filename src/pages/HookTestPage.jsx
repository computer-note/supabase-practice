import { useState } from 'react';
import useInput from './../hooks/useInput';
import useInputPack from '../hooks/useInputPack';

function HookTestPage() {
  const [counter, setCounter] = useState(0);

  const [emailInputRef, EmailInputLabelPair] = useInput(
    '이메일을 입력해주세요',
    'email-input'
  );
  const [passwordInputRef, PasswordInputLabelPair] = useInput(
    '패스워드를 입력해주세요',
    'password-input'
  );

  const {
    id: idInputPack,
    nickname: nicknameInputPack,
    email: emailInputPack,
    address: addressInputPack,
  } = useInputPack([
    'id',
    'password',
    'email',
    'address',
    'nickname',
  ]);

  /* VERSION 2 */
  // const inputPack = useInputPack([
  //   'id',
  //   'password',
  //   'email',
  //   'address',
  //   'nickname',
  // ]);

  /* VERSION 3 */
  // const inputPack = useInputPack([
  //   ['id', '아이디를 입력해주세요']
  //   ['password', '비밀번호를 입력해주세요']
  //   ['email', '이메일을 입력해주세요']
  //   ['address', '주소를 입력해주세요']
  //   ['nickname', '닉네임을 입력해주세요']
  // ]);

  function handleCountButtonClick() {
    setCounter(prev => prev + 1);
  }

  console.log('EmailInputLabelPair ↓');
  console.dir(EmailInputLabelPair);

  console.log('idInputPack.LabelElem  ↓');
  console.dir(idInputPack.LabelElem);

  return (
    <main>
      <button onClick={handleCountButtonClick}>
        컴포넌트 리렌더링 하기 {counter}
      </button>

      <p className='h-[100px] bg-emerald-100 text-[2rem]'>
        useInput 사용
      </p>
      <section>
        {EmailInputLabelPair}
        {PasswordInputLabelPair}
      </section>

      <div className='h-[100px]'></div>

      <p className='h-[100px] bg-emerald-100 text-[2rem]'>
        useInputPack 사용
      </p>

      <section className='flex flex-col'>
        {/* VERSION 2 */}
        {/* {Object.keys(inputPack).map(key => {
          const LabelElem = inputPack[key].LabelElem;
          const InputElem = inputPack[key].InputElem;
          return (
            <div>
              <LabelElem className='bg-red-200'>{key}</LabelElem>
              <InputElem className='bg-slate-200' />
            </div>
          );
        })} */}
      </section>

      <section className='flex flex-col'>
        {/* VERSION 1 */}
        <div>
          <idInputPack.LabelElem className='bg-red-200'>
            아이디를 입력해주세요
          </idInputPack.LabelElem>
          <idInputPack.InputElem className='bg-slate-200' />
        </div>
        <div>
          <emailInputPack.LabelElem className='bg-red-200'>
            이메일을 입력해주세요.
          </emailInputPack.LabelElem>
          <emailInputPack.InputElem className='bg-slate-200' />
        </div>
        <div>
          <nicknameInputPack.LabelElem className='bg-red-200'>
            닉네임을 입력해주세요.
          </nicknameInputPack.LabelElem>
          <nicknameInputPack.InputElem className='bg-slate-200' />
        </div>
        <div>
          <addressInputPack.LabelElem className='bg-red-200'>
            주소를 입력해주세요
          </addressInputPack.LabelElem>
          <addressInputPack.InputElem className='bg-slate-200' />
        </div>
      </section>
    </main>
  );
}

export default HookTestPage;
