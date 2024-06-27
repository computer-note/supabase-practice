/*
useBulkInput(['id','password','email','nickname])
=> 
  {
  id: {getInputValue, InputElem, LabelElem, InputRef},
  password: {getInputValue, InputElem, LabelElem, InputRef},
  email: {getInputValue, InputElem, LabelElem, InputRef},
  nickname: {getInputValue, InputElem, LabelElem, InputRef}
  }
*/

import { useEffect, useRef, useState } from 'react';

/* VERSION I */

// function useInputPack(idList) {
//   const inputPack = {};

//   for (const id of idList) {
//     const ref = useRef(null);
//     const LabelElem = ({ children, ...rest }) => (
//       <label htmlFor={id} {...rest}>
//         {children}
//       </label>
//     );
//     const InputElem = props => <input ref={ref} id={id} {...props} />;
//     const getInputValue = () => ref.current.value;

//     inputPack[id] = { getInputValue, InputElem, LabelElem, ref };
//   }

//   return inputPack;
// }

/* VERSION II */

function useInputPack(idList) {
  const [inputPack, setInputPack] = useState(null);
  let pack = {};

  // if (inputPack) {
  //   return inputPack;
  // }

  for (const id of idList) {
    const ref = useRef(null);

    const LabelElem = ({ children, ...rest }) => (
      <label htmlFor={id} {...rest}>
        {children}
      </label>
    );
    const InputElem = props => <input ref={ref} id={id} {...props} />;
    const getInputValue = () => ref.current.value;

    pack[id] = { getInputValue, InputElem, LabelElem, ref };
    console.log('calculating...!!!');
  }

  useEffect(() => setInputPack(pack), []);

  if (inputPack) {
    return inputPack;
  } else {
    return pack;
  }
}

export default useInputPack;
