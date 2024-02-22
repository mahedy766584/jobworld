import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if(user?.email){
        return children;
    }

    if(loading){
        return <div>
            <p>Loading...............</p>
        </div>
    }

    return (
        <Navigate to={'/login'} replace></Navigate>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;