import React from 'react';
import {useQuery, gql} from '@apollo/client';
import {View, Text, FlatList, ScrollView} from 'react-native';

const QUERY = gql`
  query {
    countries {
      name
      code
      capital
      currency
    }
  }
`;

const Country = ({item}: {item: any}) => {
  return (
    <View style={{backgroundColor: '#00FFFF'}}>
      <Text>{item.name}</Text>
      <Text>{item.code}</Text>
      <Text>{item.capital}</Text>
      <Text>{item.currency}</Text>
    </View>
  );
};

const Home = () => {
  const {data} = useQuery(QUERY);
  return <FlatList data={data.countries} renderItem={Country} />;
};

export default Home;
