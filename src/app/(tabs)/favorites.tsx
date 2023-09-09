import { ActivityIndicator, FlatList } from 'react-native';
import TrackListItem from '../../components/TrackListItem';
import { Text } from '../../components/Themed';
import { gql, useQuery } from '@apollo/client';
const query = gql`
  query MyQuery($userId: String!) {
    favoritesByUserid(userid: $userId) {
      id
      trackid
      userid
      track {
        id
        name
        preview_url
        artists {
          id
          name
        }
        album {
          id
          name
          images {
            width
            url
            height
          }
        }
      }
    }
  }
`;
export default function FavoritesScreen() {
  const { data, loading, error } = useQuery(query, {
    variables: { userId: 'Faysal' },
  });
  if (loading) return <ActivityIndicator />;
  if (error) return <Text>{`Error! ${error.message}`}</Text>;
  const tracks = (data?.favoritesByUserid || []).map((fav: any) => fav.track);
  return (
    <FlatList
      data={tracks}
      renderItem={({ item }) => <TrackListItem track={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}
