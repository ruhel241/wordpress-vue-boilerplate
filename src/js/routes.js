import AllPosts from './Components/AllPosts';
import Settings from './Components/Settings';
import Supports from './Components/Supports';

export const routes = [
    {
        path: '/',
        name: 'allposts',
        component: AllPosts
    },
    
    {
        path: '/settings',
        name: 'settings',
        component: Settings
    },
    {
        path: '/supports',
        name: 'supports',
        component: Supports
    }
];
