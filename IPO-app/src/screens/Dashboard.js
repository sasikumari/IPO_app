import React, { useEffect, useState } from 'react';
import { View, Text , StyleSheet , ScrollView } from 'react-native';
import axios from 'axios';


const IPOCalendarScreen = () => {
  
  const [ipoData, setIPOData] = useState([]);
  

  useEffect(() => {
    const fetchIPOData = async () => {
      try {
        const response = await axios.get('https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=pk_925be79e680e4937a6078d74ee9b7dc2');
        setIPOData(response.data);
      } catch (error) {
        console.error('Error fetching IPO data:', error);
      }
    };

    fetchIPOData();
  }, []);

  

  return (

    <View style={styles.container}>
      
    <View style={styles.header}>
      <Text>IPO Calendar</Text>
      </View>
      
      <View style={styles.table}>
        <View style={styles.header}>
          <Text style={styles.headerText}>company Name</Text>
          <Text style={styles.headerText}> updated</Text>
          <Text style={styles.headerText}>shares</Text>
          <Text style={styles.headerText}>volume</Text>
        
        </View>
        <ScrollView>

      {ipoData.map((ipoItem) => (
        <View key={ipoItem.id}  style={styles.row}>
          <Text>{ipoItem.companyName}</Text>
          <Text>{ipoItem.updated}</Text>
          <Text>{ipoItem.shares}</Text>
          <Text>{ipoItem.volume}</Text>
          
                 </View>
       
      ))
}
</ScrollView>
    </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  table: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  headerText: {
    fontWeight: 'bold',
    flex: 1, // Equal width for columns
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  rowText: {
    flex: 1, // Equal width for columns
    textAlign: 'center',
  },
});

export default IPOCalendarScreen;
