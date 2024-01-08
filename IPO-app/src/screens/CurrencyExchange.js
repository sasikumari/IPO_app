import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const CurrencyExchangeScreen = () => {
  const [exchangeRates, setExchangeRates] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get('https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=pk_925be79e680e4937a6078d74ee9b7dc2');
        setExchangeRates(response.data.rates);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latest Currency Exchange Rates</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {exchangeRates && (
            <View>
              {Object.keys(exchangeRates).map((currency) => (
                <Text key={currency}>
                  {currency}: {exchangeRates[currency]}
                </Text>
              ))}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default CurrencyExchangeScreen;
