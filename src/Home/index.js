import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

import {Container, Header, ButtonOp, Title, TitleCategory} from './styles';

import CardRemedy from '../components/CardRemedy';
import Search from '../components/HomeSearch';

import MenuIcon from '../svg/MenuIcon';
import CartIcon from '../svg/CartIcon';
import Notification from '../svg/Notification';
import IconArrowRight from '../svg/IconArrowRight';

import Avatar from '../assets/Avatar.png';
import RemedyImage from '../assets/Remedy.png';
import RemedyImage2 from '../assets/Remedy2.png';

const Home = () => {
  return (
    <View style={{backgroundColor: '#34C47C', flex: 1}}>
      <Container>
        <Header>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <TouchableOpacity style={{marginLeft: 30, marginBottom: 5}}>
              <MenuIcon />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Notification />
              </TouchableOpacity>
              <TouchableOpacity>
                <CartIcon />
              </TouchableOpacity>
              <Image source={Avatar} />
            </View>
          </View>
        </Header>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={{flexDirection: 'row', marginTop: 28}}>
            <ScrollView
              horizontal
              style={{height: 60, width: '100%'}}
              showsHorizontalScrollIndicator={false}>
              <ButtonOp colorBackground="#34C47C" style={{marginLeft: 30}}>
                <Title colorTitle="#fff">Medicines for diseases</Title>
              </ButtonOp>
              <ButtonOp
                colorBackground="#ffffff"
                style={[styles.shadowButton, {marginLeft: 16}]}>
                <Title colorTitle="#8E99AF">Medical goods</Title>
              </ButtonOp>
            </ScrollView>
          </View>
          <View
            style={{
              marginTop: 24,
              marginLeft: 30,
              marginRight: 30,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TitleCategory>Antibiotics</TitleCategory>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: '#34C47C', fontSize: 14}}>All</Text>
              <IconArrowRight style={{marginLeft: 6}} />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CardRemedy titleRemedy="Adice" image={RemedyImage} />
            <CardRemedy titleRemedy="Azibiot" image={RemedyImage2} />
          </ScrollView>
          <View
            style={{
              marginBottom: 24,
              marginLeft: 30,
              marginRight: 30,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TitleCategory>Vitamins</TitleCategory>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: '#34C47C', fontSize: 14}}>All</Text>
              <IconArrowRight style={{marginLeft: 6}} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Container>
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  shadowButton: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});

export default Home;
