import React from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import MarketCoin from "../../components/MarketCoin";
import styles from './styles';

const image =  require('../../../assets/images/Saly-17.png');
const portfolioCoin=[
    {
    id:'1',
    name:'Virtual Dollar',
    symbol:'USD',
    image:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    valueChange24H:-9.9,
    valueUSD:69.420,
    },
    {
    id:'2',
    name:'Bitcoin',
    symbol:'USD',
    image:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    valueChange24H:2.9,
    valueUSD:59.420,
    },
    {
    id:'3',
    name:'Etherium',
    symbol:'USD',
      image:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    valueChange24H:-0.43,
    valueUSD:39.420,
    },
]

const PortfolioScreen = () => {
    return (
        <View style={styles.root}>
           <FlatList 
            data={portfolioCoin}
            renderItem={({item}) => <MarketCoin marketCoin={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponentStyle={{alignItems: 'center'}}
            ListHeaderComponent={() => (
              <>
                <Image style={styles.image} source={image} />
                <Text style={styles.label}>Market</Text>
              </>
            )}
           />
        </View>
    )
}

export default PortfolioScreen


