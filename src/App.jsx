import { useState } from 'react';
import dbApi from './supabase/supabase';

function App() {
  const [woodList, setWoodList] = useState([]);

  async function handleWoodFetchButtonClick() {
    //DB에서 woods 테이블 정보를 불러옵니다
    const response = await dbApi.getWoods();
    setWoodList(response.data);
  }

  return (
    <main>
      <button onClick={handleWoodFetchButtonClick}>
        fetch woods
      </button>
      <form>
        <input />
        <input />
        <input />
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
