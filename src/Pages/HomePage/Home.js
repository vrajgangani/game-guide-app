import React from 'react'
import { Tabs } from 'antd';
import { Home1 } from './Home1/Home1';
import {Home2} from './Home2/Home2'
import { Home3 } from './Home3/Home3';

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Home 1',
    children:<Home1/>,
  },
  {
    key: '2',
    label: 'Home 2',
    children:<Home2/>
  },
  {
    key: '3',
    label: 'Home 3',
    children: <Home3/>,
  },
];

 const Home = () => {
  return (
    <Tabs defaultActiveKey="1" centered items={items} onChange={onChange} />
  )
}

export default Home;