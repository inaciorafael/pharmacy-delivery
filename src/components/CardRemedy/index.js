import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import {
  Container,
  ImageContainer,
  TitleRemedy,
  Description,
  Details,
  PrescritionsDetails,
  PrescriptionPrice,
} from './styles';

import RemedyImage from '../../assets/Remedy.png';
import startImage from '../../assets/icon_star_green.png';

const CardRemedy = ({titleRemedy, price, image }) => {
  return (
    <TouchableOpacity>
      <Container>
        <ImageContainer>
          <Image source={image} style={{flex: 1}} />
        </ImageContainer>
        <TitleRemedy>{titleRemedy}</TitleRemedy>
        <Description>For suspension preparation</Description>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 2}}>
          <Details>By prescription</Details>
          <Image source={startImage} style={{marginLeft: 8}} />
          <PrescritionsDetails>4.8 (120+)</PrescritionsDetails>
          <PrescriptionPrice>$15.5</PrescriptionPrice>
        </View>
      </Container>
    </TouchableOpacity>
  );
};

export default CardRemedy;
