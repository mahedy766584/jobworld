import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Animation from '../../Components/ReactAnimation/Animation';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    const location = useLocation();
    console.log(location.pathname)

    if (user?.email) {
        return children;
    }

    if (loading) {
        return <div className='w-full h-screen bg-white'>
            <Animation/>
        </div>
    }

    return (
        <Navigate
            state={location.pathname} to={'/login'} replace
        ></Navigate>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;