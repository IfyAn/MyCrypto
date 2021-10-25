import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, Pressable, ActivityIndicator} from 'react-native';
import { AntDesign } from "@expo/vector-icons";
// import { API, graphqlOperation } from 'aws-amplify';
// import { getCoin, listPortfolioCoins } from '../../graphql/queries';
import styles from "./styles";
import PercentageChange from "../../components/PercentageChange";
import CoinPriceGraph from "../../components/CoinPriceGraph";
import {useNavigation, useRoute} from "@react-navigation/native";
// import AppContext from "../../utils/AppContext";
// import formatMoney from "../../utils/formatMoney";

const historyString=JSON.stringify([
47222.9831719397,
47437.983432937,
44239.46776807,
46458.5784329497,
48672.5495671997,
475556.43456997,
479890.3176619397,
47254.9665719397,
47894.9831719397,
48622.9831719397,
48422.9831719397,
43092.9831719397,
47802.9095372397,
47222.09007719397,
47122.9831719397,
])

const CoinDetailsScreen = () => {
  const [coin, setCoin] = useState({
    id:'2',
    name:'Bitcoin',
    symbol:'USD',
    image:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    valueChange24H:2.9,
    valueChange1D:-0.9,
    valueChange7D:0.9,
    currentPrice:59.420,
    amount:3
  });
  //const [portfolioCoin, setPortfolioCoin] = useState(null);

//   const { userId } = useContext(AppContext);

   const navigation = useNavigation();
   const route = useRoute();

//   const fetchCoinData = async () => {
//     if (!route.params?.id) {
//       return;
//     }
//     try {
//       const response = await API.graphql(
//         graphqlOperation(getCoin, { id: route.params.id })
//       )
//       setCoin(response.data.getCoin);
//     } catch (e) {
//       console.error(e);
//     }
//   }

//   const fetchPortfolioCoinData = async () => {
//     if (!route.params?.id) {
//       return;
//     }
//     try {
//       const response = await API.graphql(
//         graphqlOperation(listPortfolioCoins,
//           { filter: {
//               and: {
//                 coinId: { eq: route.params?.id},
//                 userId: { eq: userId }
//               }
//             }}
//           )
//       )
//       if (response.data.listPortfolioCoins.items.length > 0) {
//         setPortfolioCoin(response.data.listPortfolioCoins.items[0])
//       }
//     } catch (e) {
//       console.error(e);
//     }
//   }

//   useEffect(() => {
//     fetchCoinData();
//     fetchPortfolioCoinData();
//   }, [])

  const onBuy = () => {
    navigation.navigate('CoinExchange', { isBuy: true, coin,  });
  }

  const onSell = () => {
    navigation.navigate('CoinExchange', { isBuy: false, coin });
  }

//   if (!coin) {
//     return <ActivityIndicator />
//   }

  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <View style={styles.left}>
          <Image style={styles.image} source={{ uri: coin.image}} />
          <View>
            <Text style={styles.name}>{coin.name}</Text>
            <Text style={styles.symbol}>{coin.symbol}</Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <AntDesign name={'staro'} size={30} color={'#2f95dc'} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>Current price</Text>
           <Text style={styles.value}>${coin.currentPrice}</Text> 
        </View>
     
        <View style={styles.valueContainer}>
          <Text style={styles.label}>1 hour</Text>
          <PercentageChange value={coin.valueChange24H} />
      </View>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>1 day</Text>
           <PercentageChange value={coin.valueChange1D} />    
      </View>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>7 day</Text>
           <PercentageChange value={coin.valueChange7D} />
      </View>
    </View>
   
  <CoinPriceGraph dataString={historyString} />
      <View style={styles.row}>
        <Text>Position</Text>
        <Text>
          {coin.symbol}
          {coin.amount}
          {' '}
           (${coin.currentPrice * coin.amount}) 
        </Text>
      </View>

      
      <View style={[styles.row, { marginTop: 'auto'}]}>
        <Pressable
          style={[styles.button, { backgroundColor: '#20b100' }]}
          onPress={onBuy}
          >
          <Text style={styles.buttonText}>Buy</Text>
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: '#ff0000' }]}
          onPress={onSell}
          >
          <Text style={styles.buttonText}>Sell</Text>
        </Pressable>
      </View>

    </View>
  );
};

export default CoinDetailsScreen;