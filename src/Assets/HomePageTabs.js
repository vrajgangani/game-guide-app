import { Tab1 } from "../Pages/Tabs/Tab1";
import { Tab2 } from "../Pages/Tabs/Tab2";
import { Tab3 } from "../Pages/Tabs/Tab3";


const HomePageTabs = [
    {
      key: '1',
      label: 'Home 1',
      children:<Tab1 />,
    },
    {
      key: '2',
      label: 'Home 2',
      children:<Tab2/>
    },
    {
      key: '3',
      label: 'Home 3',
      children: <Tab3/>,
    },
];
  

export default HomePageTabs;