import React from 'react';
import { Collection } from './PhotosComponents/Collection';
import Styles from './Photos.module.scss';

// API https://634e6075f34e1ed8268a056d.mockapi.io/photo_collections

const cats = [
  { "name": "Все" },
  { "name": "Море" },
  { "name": "Горы" },
  { "name": "Архитектура" },
  { "name": "Города" }
];

function Photos() {
  const [categoryId, setCategoryId] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const [collections, setCollections] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId ? `category=${categoryId}` : '';

    fetch(
      `https://634e6075f34e1ed8268a056d.mockapi.io/photo_collections?page=${page}&limit=3&${category}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении данных');
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);

  return (
    <div className={Styles.Photos}>
      <div className={Styles.wrapper}>
        <h1>Моя коллекция фотографий</h1>
        <div className={Styles.top}>
          <ul className={Styles.tags}>
            {
              cats.map((obj, i) => (
                <li
                  onClick={() => setCategoryId(i)}
                  className={categoryId == i ? `${Styles.active}` : ''}
                  key={obj.name}
                >
                  {obj.name}
                </li>
              ))
            }
          </ul>
          <input
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            className={Styles.search_input}
            placeholder="Поиск по названию"
          />
        </div>
        <div className={Styles.content}>
          {
            isLoading ? (
              <h3>Идёт загрузка ...</h3>
            ) : (
              collections
                .filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
                .map((obj, index) => (
                  <Collection key={index} name={obj.name} images={obj.photos} />
                ))
            )
          }

        </div>
        <ul className={Styles.pagination}>
          {
            [...Array(5)].map((_, i) => (
              <li onClick={() => setPage(i + 1)} className={page == i + 1 ? `${Styles.active}` : ''}>
                {i + 1}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Photos;
