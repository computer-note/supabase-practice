import { useState } from 'react';
import dbApi from './supabase/supabase';
import useInput from './hooks/useInput';

function App() {
  const [woodList, setWoodList] = useState([]);
  const [woodNameInputRef, WoodNameInput] = useInput(
    '나무이름',
    'wood-name-input'
  );
  const [woodDescInputRef, WoodDescInput] = useInput(
    '나무설명',
    'wood-desc-input'
  );
  const [woodPriceInputRef, WoodPriceInput] = useInput(
    '나무가격',
    'wood-price-input'
  );

  async function handleWoodFetchButtonClick() {
    //DB에서 woods 테이블 정보를 불러옵니다
    const response = await dbApi.getWoods();
    setWoodList(response.data);
  }

  function handleAddWoodSubmit(e) {
    e.preventDefault();
    const woodName = woodNameInputRef.current.value;
    const woodDesc = woodDescInputRef.current.value;
    const woodPrice = woodPriceInputRef.current.value;

    console.log(
      'woodName',
      woodName,
      'woodDesc',
      woodDesc,
      'woodPrice',
      woodPrice
    );
  }

  return (
    <main>
      <button onClick={handleWoodFetchButtonClick}>
        fetch woods
      </button>
      <form onSubmit={handleAddWoodSubmit}>
        {WoodNameInput}
        {WoodDescInput}
        {WoodPriceInput}
        <button>나무 추가</button>
      </form>
      <section>
        <ol>
          {woodList?.map(wood => (
            <li key={wood.id}>
              <p>name {wood.name}</p>
              <p>price {wood.price}</p>
              <p>desc {wood.desc}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export default App;
