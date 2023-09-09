import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { Track } from '../types';
import { usePlayerContext } from '../providers/PlayerProvider';

type TrackListItemProps = {
  track: Track;
};

const TrackListItem = ({ track }: TrackListItemProps) => {
  const { setTrack } = usePlayerContext();
  return (
    <Pressable
      onPress={() => {
        setTrack(track);
      }}
      style={styles.container}
    >
      <Image
        source={{ uri: track.album.images[0]?.url }}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>{track.name}</Text>
        <Text style={styles.artist}>{track.artists[0]?.name}</Text>
      </View>
    </Pressable>
  );
};

export default TrackListItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 5,
    marginRight: 10,
  },
  title: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  artist: {
    color: 'gray',
  },
});
