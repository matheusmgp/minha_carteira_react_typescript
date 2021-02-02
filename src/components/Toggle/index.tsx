import React, { useState } from 'react';
import { Container,ToggleLabel,ToggleSelector } from './style';

const Toggle : React.FC = () => {
  const [online, setOnline] = useState(false);
  return (  
  <Container>
        <ToggleLabel>Claro</ToggleLabel>
        <ToggleSelector 
          checked={online} 
          uncheckedIcon={false}
          checkedIcon={false}
          onChange={() => setOnline(!online)}
        />
        <ToggleLabel>Escuro</ToggleLabel>
    </Container>
  )
}

export default Toggle;