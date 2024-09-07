import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function History({ history }) {
  return (
    <View>
      <Text style={styles.historyTitle}>History</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text style={styles.historyItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  historyTitle: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 20,
    fontWeight: 'bold',
  },
  historyItem: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
  },

});

