import React from 'react';
import {StyleSheet, TextInput, Image, TouchableOpacity, View} from 'react-native';

import {Container} from './styles';

import SearchIcon from '../../assets/searchIcon.png';
import ArrowButtonIcon from '../../assets/ArrowButtonIcon.png';

const HomeSearch = () => {
  return (
    <Container>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={SearchIcon} style={{height: 20, width: 20}} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#fff"
          style={{fontSize: 25, marginLeft: 16, color: '#fff'}}
        />
      </View>
      <View>
        <TouchableOpacity
          style={[styles.shadowButton, {
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            height: 60,
            width: 100,
            alignItems: 'center',
            justifyContent: 'center'
          }]}>
          <Image source={ArrowButtonIcon} style={{marginRight: 33 }} />
        </TouchableOpacity>
      </View>
    </Container>
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

export default HomeSearch;
