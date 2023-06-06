// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => < SvgColor src = { `/assets/icons/navbar/${name}.svg` }
sx = {
    { width: 1, height: 1 }
}
/>;

const navConfig = [{
        title: 'dashboard',
        path: '/dashboard/app',
        icon: icon('ic_analytics'),
        id: 1,

    },
    {
        title: 'Diet',
        path: '/dashboard/DietPlan',
        icon: icon('ic_user'),
        id: 1,

    },
    {
        title: 'Exercise',
        path: '/dashboard/Exercise',
        icon: icon('ic_cart'),
        id: 1,

    },

    
    {
        title: 'Dashboard',
        path: '/dashboardadmin/adminuser',
        icon: icon('ic_lock'),
        id: 0,



    },
    {
        title: 'Diet',
        path: '/dashboardadmin/AdminDietCategory',
        icon: icon('ic_cart'),
        id: 0,

    },
    {
        title: 'Exercise',
        path: '/dashboardadmin/AdminExercise',
        icon: icon('ic_cart'),
        id: 0,

    },



];

export default navConfig;