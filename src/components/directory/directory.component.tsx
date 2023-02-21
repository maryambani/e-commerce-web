import { Key } from 'react';
import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

import './directory.styles.tsx';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: 'Hats',
    imageUrl: 'https://cdn.midjourney.com/9c7c10a9-2df5-40b0-aa26-8edbb11bb932/grid_0.png',
    route: 'shop/hats'
  },
  {
    id: 2,
    title: 'tops',
    imageUrl: 'https://cdn.midjourney.com/0f296569-076d-4ee4-af21-a211ffd6811b/grid_0.png',
    route: 'shop/tops'
  },
  {
    id: 3,
    title: 'sweaters',
    imageUrl: 'https://cdn.midjourney.com/618fa8ef-7ff9-43e2-823d-26d7b31a77dd/grid_0.png',
    route: 'shop/sweaters'
  },
  {
    id: 4,
    title: 'bottoms',
    imageUrl: 'https://cdn.midjourney.com/9724dba4-e80a-4f02-9c25-dc6a70a53c4c/grid_0.png',
    route: 'shop/bottoms'
  },
  {
    id: 5,
    title: 'dresses',
    imageUrl: 'https://cdn.midjourney.com/1c657db0-b9e3-4137-9d7e-83e65e41dcab/grid_0.png',
    route: 'shop/dresses'
  },
];

const Directory = () => {
  
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
