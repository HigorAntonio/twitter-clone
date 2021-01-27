import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Nome de usuário</h1>
        <h2>@nome_de_usuario</h2>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

        <ul>
          <li>
            <LocationIcon />
            Astolfo Dutra, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 1 janeiro de 1970
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>128</strong>
          </span>
          <span>
            <strong>64</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
