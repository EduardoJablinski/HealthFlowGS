'use client'
import React from 'react';
import GlobalStyle from '../globalStyles';
import MobileFrame from '../components/MobileFrame';
import styled from 'styled-components';

const Logo = styled.img`
  max-width: 70%;
  height: auto;
  margin-bottom: 00px; 
`;

const HomeTitle = styled.h1`
  color: #315A89;
  text-align: center;
  font-family: Arial;
  font-size: 28px;
  font-style: normal;
  line-height: normal;
  font-weight: bold;
  margin: 80px 20px 20px;
`;

const Text = styled.h1`
  color: #1B365C;
  text-align: center;
  font-family: Arial;
  font-size: 22px;
  font-style: normal;
  line-height: normal;
  font-weight: bold;
  padding: 8px;
  margin: 0px 40px 40px;
  max-height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center; 
  justify-content: center; 
`;


const FichaOk: React.FC = () => {
  return (
    <div>
      <MobileFrame>
      <Logo
            src="/Logo_Healthflow.png"
            alt="Logo"
            unoptimized={true}
            />
        <GlobalStyle/>
        <HomeTitle>Ficha enviada com sucesso!</HomeTitle>
        <Text>
          Sua ficha foi recebida e encaminhada ao médico. Por favor, aguarde até que seu nome seja chamado.
        </Text>
      </MobileFrame>
    </div>
  );
};

export default FichaOk;
