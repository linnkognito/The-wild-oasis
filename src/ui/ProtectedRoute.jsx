import { useNavigate } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import { useEffect } from 'react';
import styled from 'styled-components';

import Spinner from './Spinner';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // Load auth user
  const { isLoading, isAuthenticated } = useUser();

  // No auth user? Redirect --> /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login');
    },
    [isAuthenticated, isLoading, navigate]
  );

  // Show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // Auth user = true --> Render app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
