import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
//import {useNavigation} from "@react-navigation/native";
import styles from './styles'
//import formatMoney from "../../utils/formatMoney";

export interface UserRankingItemProps {
    user:{
    image: string,
    name: string,
    netWorth:number
    },
    place:number
}

const UserRankingItem = (props: UserRankingItemProps) => {
   const {
    user:{
        image,
        name,
        netWorth
        },
        place
    } = props;

  //const navigation = useNavigation();

  return (
    <View style={styles.root} >
    {/* onPress={() => navigation.navigate('CoinDetails', { id })} */}
      <View style={styles.left}>
      <Text>{place}</Text>
        <Image style={styles.image} source={{ uri: image}} />
        <View>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Text style={styles.value}>${netWorth}</Text>
      </View>
    </View>
  );
};

export default UserRankingItem;

