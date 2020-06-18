import React from 'react';
import {Text, View, Image} from 'react-native';

import {
  Container,
  ImageContainer,
  TitleRemedy,
  Description,
  Details,
} from './styles';

import RemedyImage from '../../assets/Remedy.png';
import startImage from '../../assets/icon_star_green.png';

const CardRemedy = () => {
  return (
    <Container>
      <ImageContainer>
        <Image source={RemedyImage} style={{flex: 1}} />
      </ImageContainer>
      <TitleRemedy>Adice</TitleRemedy>
      <Description>For suspension preparation</Description>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 2}}>
        <Details>By prescription</Details>
        <Image source={startImage} style={{marginLeft: 8}} />
      </View>
    </Container>
  );
};

export default CardRemedy;
