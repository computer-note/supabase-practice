import { useState } from 'react';
import useInput from './../hooks/useInput';
import woodDbApi from '../supabase/woodDbApi';

function MainPage() {
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
    const response = await woodDbApi.getWoods();
    setWoodList(response.data);
  }

  async function handleAddWoodSubmit(e) {
    e.preventDefault();

    const woodName = woodNameInputRef.current.value;
    const woodDesc = woodDescInputRef.current.value;
    const woodPrice = woodPriceInputRef.current.value;

    e.target.reset();

    const response = await woodDbApi.addWood({
      name: woodName,
      desc: woodDesc,
      price: woodPrice,
      //id: be filled by db
      //created_at: be filled by db
    });

    //refresh the local state with newly added wood
    const newlyAddedWood = response.data[0];
    setWoodList(prevList => [...prevList, newlyAddedWood]);
  }

  async function handleDeleteWoodButtonClick(woodId) {
    await woodDbApi.deleteWood(woodId);

    setWoodList(prevList =>
      prevList.filter(wood => wood.id !== woodId)
    );
  }

  async function handleUpdateWoodButtonClick(woodToUpdate) {
    const woodName = woodNameInputRef.current.value;
    const woodDesc = woodDescInputRef.current.value;
    const woodPrice = woodPriceInputRef.current.value;

    const response = await woodDbApi.updateWood({
      ...woodToUpdate,
      name: woodName || woodToUpdate.name,
      desc: woodDesc || woodToUpdate.desc,
      price: woodPrice || woodToUpdate.price,
    });

    setWoodList(prevList =>
      prevList.map(wood =>
        wood.id === woodToUpdate.id ? response.data[0] : wood
      )
    );
  }
  return (
    <main className='bg-slate-300'>
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
              <button
                onClick={() => handleUpdateWoodButtonClick(wood)}
              >
                수정하기
              </button>
              <button
                onClick={() => handleDeleteWoodButtonClick(wood.id)}
              >
                삭제하기
              </button>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export default MainPage;
