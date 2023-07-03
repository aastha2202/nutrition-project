import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import DashboardAdmin from './layouts/dashboard/DashboardAdmin';
import SimpleLayout from './layouts/simple';
//
import ItemsOfDietPlan from './pages/Diet/ItemsOfDietPlan';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
//import DashboardAppPage from './pages/Dashboard/DashboardAppPage';
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile";

import Adminuser from './Admin/AdminDashboard/Adminuser';
// 
import Adminproteins from './Admin/AdminDiet/Adminproteins';
// import Adminitems from './Admin/AdminDiet/AdminDietCategory';
//  import AdminDietCategory from './Admin/AdminDiet/AdminDietCategory';
 import Adminitems from './Admin/AdminDiet/Adminitems';

// import CreateDietItems from './Admin/AdminDiet/component/CreateDietItems';

import AdminExercises from './Admin/AdminExercise/AdminExercises';
import AdminAerobic from './Admin/AdminExercise/AdminAerobic';
import RegisterUser from './pages/RegisterUser'
import DietPlan from './pages/Diet/DietPlan';
import Exercise from './pages/Exercises/Exercise';
import Adminprofile from './Admin/AdminProfile/Adminprofile';
import ItemOfExercise from './pages/Exercises/ItemOfExercise';
import CreateExerciseItems from './Admin/AdminExercise/CreateExerciseItems';
import Userstats from './Admin/UserStats/Userstats';
import Adminsearch from './Admin/AdminSearch/Adminsearch'
import ListAllDietPlan from './Admin/AdminDiet/ListAllDietPlan';
 import DashboardAdminApp from "./Admin/AdminProfile/DashboardAdminApp";
import ResetPassword from "./pages/ResetPassword";
import Loader from "./pages/loader";
 import HelpCenter from "./pages/HelpCenter/HelpCenter";
 import TermConditions from './pages/HelpCenter/TermConditions';
 import PrivacyPolicy from './pages/HelpCenter/PrivacyPolicy';
 import AboutUs from './pages/HelpCenter/AboutUs';
// ----------------------------------------------------------------------
//  import Login from './user/Login/Login';
// import Home from './user/Home/Home';
// import Diet from './user/Diet/Diet';
// import Exercise from './user/Exercise/Exercise';
// import ItemsOfCategory from './user/Diet/ItemsOfCategory';



export default function Router() {
    const routes = useRoutes([
          
        {
            path: '/login',
            element: < LoginPage /> ,

            

        },  
        {
            path: '/registeruser',
            element: < RegisterUser />
        },
        {
            path: 'resetpassword',
            element: < ResetPassword /> ,
        },
        {
            path: 'loader',
            element: < Loader /> ,
        },
        
        {
            path: '/dashboard',
            element: < DashboardLayout /> ,
            children: [
                { element: < Navigate to = "/dashboard/app" /> , index: true },
                { path: 'app', element: < Home /> },
                { path: 'user', element: < UserPage /> },
                { path: 'products', element: < ProductsPage /> },
                {
                    path: 'itemsofdietplan',
                    element: < ItemsOfDietPlan />
                },
                 
                {
                    path: 'profile',
                    element: <Profile  /> ,
                },

               
                {
                    path: 'adminuser',
                    element: < Adminuser />
                },

                {
                    path: 'adminproteins',
                    element: < Adminproteins />
                },
                
                
                {
                    path: 'dietplan',
                    element: <DietPlan/> ,
                },
                {
                    path: 'exercise',
                    element: < Exercise /> ,
                },
                { path: 'itemofexercise', element: < ItemOfExercise /> },
                { path: 'helpcenter', element: <HelpCenter/> },
                { path: 'helpcenter/termconditions', element: <TermConditions/> },
                { path: 'helpcenter/privacypolicy', element: <PrivacyPolicy/> },
                { path: 'helpcenter/aboutus', element: <AboutUs/> },
                

            ],
            

        },
        {
            path: '/dashboardadmin',
            element: < DashboardAdmin/> ,
            children: [
                { element: < Navigate to = "/dashboardadmin/app" /> , index: true },
                { path: 'login', element: < LoginPage /> },
                { path: 'AdminDietCategory', element: < Adminitems /> },
                { path: 'adminexercise', element: < AdminExercises /> },
                {
                    path: 'dashboardadminapp',
                    element: < DashboardAdminApp />
                },
                {
                    path: 'adminaerobic',
                    element: <AdminAerobic  />
                },
                {
                    path: 'adminuser',
                    element: <Adminuser  />
                },
                {
                    path: 'adminproteins',
                    element: <Adminproteins  />
                },
                {
                    path: 'adminuser',
                    element: < Adminuser />
                },
                {
                    path: 'adminprofile',
                    element: < Adminprofile />
                },

                {
                    path: 'userstats',
                    element: < Userstats />
                },

                {
                    path: 'alldietplan',
                    element: < ListAllDietPlan/ >
                },

                {
                    path: 'adminsearch',
                    element: < Adminsearch />
                },
                
            ]

        },

        {
            element: < SimpleLayout /> ,
            children: [
                { element: < Navigate to = "/login" /> , index: true },
                { path: '404', element: < Page404 /> },
                { path: '*', element: < Navigate to = "/404" /> },
            ],
        },
        {
            path: '*',
            element: < Navigate to = "/404"
            replace /> ,
        },
    ]);

    return routes;
}