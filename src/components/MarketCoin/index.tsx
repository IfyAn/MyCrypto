import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import styles from './styles'
import PercentageChange from "../PercentageChange";
//import formatMoney from "../../utils/formatMoney";

export interface PortfolioCoinProps {
    marketCoin:{
    id: string,
    image: string,
    name: string,
    symbol: string,
    valueUSD: number,
    valueChange24H: number,
    }
}

const PortfolioCoin = (props: PortfolioCoinProps) => {
   const {
    marketCoin:{
        id,
        image,
        name,
        symbol,
        valueChange24H,
        valueUSD,
        }
    } = props;

  const navigation = useNavigation();

  return (
    <Pressable style={styles.root} onPress={() => navigation.navigate('CoinDetails')} >

      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image}} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Text style={styles.value}>${valueUSD}</Text>
        <PercentageChange value={valueChange24H} />
      </View>
    </Pressable>
  );
};

export default PortfolioCoin;

