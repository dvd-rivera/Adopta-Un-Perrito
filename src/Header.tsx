import React from 'react';

interface HeaderProps {
  titulo: string;
}

const Header: React.FC<HeaderProps> = ({ titulo }) => {
  return (
    <header>
      <h1 className='title'>{titulo}</h1>
    </header>
  );
};

export default Header;
