import { Tab1 } from "../Pages/Tabs/Tab1";
import { Tab2 } from "../Pages/Tabs/Tab2";


const HomePageTabs = [
    {
      key: '1',
      label: 'Images',
      children:<Tab1 />,
    },
    {
      key: '2',
      label: 'Videos',
      children:<Tab2/>
    },
];
  

export default HomePageTabs;