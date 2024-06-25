import { useRef } from 'react';

function useInput(labelName, inputId) {
  const ref = useRef(null);

  const LabelInputPair = (
    <>
      <label htmlFor={inputId}>{labelName}</label>
      <input id={inputId} ref={ref} />
    </>
  );

  return [ref, LabelInputPair];
}

export default useInput;
