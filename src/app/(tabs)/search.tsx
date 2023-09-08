import { FlatList, TextInput, View, StyleSheet } from 'react-native';
import { tracks } from '../../../assets/data/tracks';
import TrackListItem from '../../components/TrackListItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Text } from '../../components/Themed';
export default function SearchScreen() {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <FontAwesome name="search" size={16} color={'gray'} />
        <TextInput
          placeholder="What do you want to listen to?"
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
        <Text onPress={() => setSearch('')}>Cancel</Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={({ item }) => <TrackListItem track={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#121314',
    padding: 8,
    borderRadius: 5,
    marginHorizontal: 10,
    color: 'white',
  },
});
