import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

interface BarMenu {
  title: string;
  path: string;
  icon: any;
}
type Sidebar = BarMenu[];

export const SidebarData: Sidebar = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'useFetch Example',
    path: '/usefetch-example',
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: 'useEffect Example',
    path: '/useeffect-example',
    icon: <FaIcons.FaCartPlus />,
  },
];
