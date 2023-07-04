import React from 'react';
import { Navigate } from "react-router-dom";

// Компонент высшего порядка (НОС)
const ProtectedRoute = ({ element: Component, ...props  }) => {
  return (
    props.loggedIn ? <Component {...props} /> : <Navigate to="/login" replace/>
)};

export default ProtectedRoute;