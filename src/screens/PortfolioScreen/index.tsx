import React from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import PortfolioCoin from "../../components/PortfolioCoin";
import styles from './styles';

const image =  require('../../../assets/images/Saly-10.png');
const portfolioCoin=[
    {
    id:'1',
    name:'Virtual Dollar',
    symbol:'USD',
    image:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs2.coinmarketcap.com%2Fstatic%2Fimg%2Fcoins%2F200x200%2F1.png&imgrefurl=https%3A%2F%2Fcoinmarketcap.com%2Fcurrencies%2Fbitcoin%2F&tbnid=eSGHLH8WAkWCXM&vet=12ahUKEwiB3sii69jzAhUHnRoKHRxhCjoQMygaegUIARCJAg..i&docid=vjRFWMsfMFABIM&w=200&h=200&itg=1&q=bitcoin&ved=2ahUKEwiB3sii69jzAhUHnRoKHRxhCjoQMygaegUIARCJAg',
    amount:69.420,
    valueUSD:69.420,
    },
    {
    id:'2',
    name:'Bitcoin',
    symbol:'USD',
    image:'jjj',
    amount:1.12,
    valueUSD:59.420,
    },
    {
    id:'3',
    name:'Etherium',
    symbol:'USD',
    image:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs2.coinmarketcap.com%2Fstatic%2Fimg%2Fcoins%2F200x200%2F1027.png&imgrefurl=https%3A%2F%2Fcoinmarketcap.com%2Fcurrencies%2Fethereum%2F&tbnid=WIPvZiGKsjQlWM&vet=12ahUKEwic3_mW7NjzAhUKaBoKHTSXBvsQMygAegUIARDMAQ..i&docid=JT-o5bzu5N7U6M&w=200&h=200&itg=1&q=ethereum&ved=2ahUKEwic3_mW7NjzAhUKaBoKHTSXBvsQMygAegUIARDMAQ',
    amount:30,
    valueUSD:39.420,
    },
]

const PortfolioScreen = () => {
    return (
        <View style={styles.root}>
           <FlatList 
            data={portfolioCoin}
            renderItem={({item}) => <PortfolioCoin portfolioCoin={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponentStyle={{alignItems: 'center'}}
            ListHeaderComponent={() => (
              <>
                <Image style={styles.image} source={image} />
                <View style={styles.balanceContainer}>
                  <Text style={styles.label}>Portfolio balance</Text>
                  <Text style={styles.balance}>$69.90</Text>
                </View>
              </>
            )}
           />
        </View>
    )
}

export default PortfolioScreen


