// component
import SvgColor from '../../../components/svg-color';
import { useState } from 'react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HomeIcon from '@mui/icons-material/Home';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
// ----------------------------------------------------------------------

const icon = (name) => < SvgColor src = { `/assets/icons/navbar/${name}.svg` }
sx = {
    { width: 1, height: 1 }
}
/>;

// const [isNavOpen, setIsNavOpen] = useState(false);

//   const handleNavClose = () => {
//     setIsNavOpen(false);
//   };

//   const handleCloseNav = () => {
//     handleNavClose();
    // path: '/dashboard/app',
    // Additional logic specific to the "Home" link, if needed
//   };

const navConfig = [{
        title: 'Home',
        path: '/dashboard/app',
        icon: <HomeIcon/>,
        id: 1,
        // onClick: handleCloseNav()
    },
    {
        title: 'Diet',
        path: '/dashboard/DietPlan',
        icon: <LocalDiningIcon/>,
        id: 1,

    },
    {
        title: 'Exercise',
        path: '/dashboard/Exercise',
        // icon: icon('ic_cart'),
        //  icon:<ExerciseIcon/>,
        icon:<FitnessCenterIcon/>,
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