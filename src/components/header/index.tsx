import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../context/auth';

import { Avatar, Container } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <div />
      <FiLogOut
        size={40}
        style={{ marginRight: 30, cursor: 'pointer' }}
        color="#fff"
        onClick={() => signOut()}
      />
    </Container>
  );
};

export default Header;
