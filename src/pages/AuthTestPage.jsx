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

  function handleOnSubmit(e) {
    e.preventDefault();

    console.log('emailInputRef =>', emailInputRef);
    console.log('passwordInputRef =>', passwordInputRef);

    e.target.reset();
  }

  return (
    <main>
      <form onSubmit={handleOnSubmit}>
        {EmailInputLabelPair}
        {PasswordInputLabelPair}
        <button>로그인</button>
      </form>
    </main>
  );
}

export default AuthTestPage;
