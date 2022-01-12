import React  from "react";
import { Text, View } from 'react-native';


import styles from './style';

const Card = ({ titulo, children }) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text>{titulo}</Text>
          </View>
          <View style={styles.cardContent}>
            {children}
          </View>
        </View>
      </View>

    )
}

export default Card;