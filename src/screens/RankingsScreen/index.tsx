import React from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import UserRangeItem from "../../components/UserRankingItem";
import styles from './styles';

const image =  require('../../../assets/images/Saly-20.png');
const portfolioCoin=[
    {
    id:'1',
    name:'Virtual Dollar',
    symbol:'USD',
    image:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    netWorth:6942,
    },
    {
    id:'2',
    name:'Bitcoin',
    symbol:'USD',
    image:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    netWorth:5942,
    },
    {
    id:'3',
    name:'Etherium',
    symbol:'USD',
    image:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    netWorth:3920,
    },
]


const RankingsScreen = () => {
    return (
        <View style={styles.root}>
           <FlatList 
            data={portfolioCoin}
           renderItem={({item, index}) => <UserRangeItem user={item} place={index +1} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponentStyle={{alignItems: 'center'}}
            ListHeaderComponent={() => (
              <>
                <Image style={styles.image} source={image} />
                <Text style={styles.label}>Rankings</Text>
              </>
            )}
           />
        </View>
    )
}

export default RankingsScreen 