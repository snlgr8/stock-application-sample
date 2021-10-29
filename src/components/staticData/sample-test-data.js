export const CollectionCategory = [
  {
    title: 'Cosmetics',
    id: 'cosmetics',
  },
  {
    title: 'Electronics',
    id: 'electronics',
  },
];

export const CollectionsData = [
  {
    id: '100',
    name: 'Maybelline Lipstick',
    category: CollectionCategory[0],
    price: '400',
    imageUrl: '',
    quantity: '',
  },

  { id: '101', name: 'Eno', category: 'Medicince', price: '40', imageUrl: '' },
];

export const ConsumerList = [
  {
    id: 100,
    name: 'Sonal',
    email: 'Test@gmail.com',
    phoneNumber: '12345',
    userProfileUrl: '',
  },
  {
    id: 101,
    name: 'Sejal',
    email: 'Test2@gmail.com',
    phoneNumber: '9812345',
    userProfileUrl: '',
  },
];

export const Order = [
  {
    id: '100',
    collectionItem: CollectionsData[0],
    consumer: ConsumerList[0],
    quantity: 1,
    orderDate: new Date(),
  },
  {
    id: '100',
    collectionItem: CollectionsData[1],
    consumer: ConsumerList[1],
    quantity: 3,
    orderDate: new Date(),
  },
];
