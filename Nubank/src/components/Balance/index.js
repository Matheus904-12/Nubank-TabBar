import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { MotiView } from 'moti';

export default function Balance({ saldo, gastos }) {
  return (
    <MotiView
      style={styles.container}
      from={{
        rotateX: '-100deg',
        opacity: 0,
      }}
      animate={{
        rotateX: '0deg',
        opacity: 1,
      }}
      transition={{
        type: 'timing',
        delay: 300,
        duration: 900,
      }}
    >
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>
            {saldo}
          </Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>
            {gastos}
          </Text>
        </View>
      </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000', // Alterado de branco para preto
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  itemTitle: {
    fontSize: 20,
    color: '#fff', // Alterado de cinza claro para cinza escuro
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencySymbol: {
    color: '#f5f5f5', // Alterado de cinza claro para cinza escuro
    marginRight: 6,
  },
  balance: {
    fontSize: 22,
    color: '#2ecc71', // Cor mantida (verde)
  },
  expenses: {
    fontSize: 22,
    color: '#e74c3c', // Cor mantida (vermelho)
  },
});
