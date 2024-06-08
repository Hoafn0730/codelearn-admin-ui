import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }: { children: ReactNode }) {
    const isLogin = useSelector((state: any) => state.account.isLogin);

    return isLogin ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
