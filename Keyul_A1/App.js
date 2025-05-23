import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const categories = [
    { id: 1, title: 'All' },
    { id: 2, title: 'Music' },
    { id: 3, title: 'Podcasts' },
    { id: 4, title: 'Audiobooks' },
  ];

  const playlists = [
    { id: 1, name: 'Hot Hits Canada' },
    { id: 2, name: 'Pop Favourites' },
    { id: 3, name: 'Hip-Hop Central' },
    { id: 4, name: '80s Hard Rock' },
    { id: 5, name: 'All About Country' },
    { id: 6, name: 'Garba Mix ' },
    { id: 7, name: 'Daily Wellness' },
    { id: 8, name: 'Release Radar' },
  ];

  const recents = [
    { id: 1, name: 'Pop mix', image: require('./assets/RecentPlay.jpg') },
    { id: 2, name: 'Dakla Hits', image: require('./assets/RecentPlay.jpg') },
    { id: 3, name: 'Garba Hits ', image: require('./assets/RecentPlay.jpg') },
    { id: 4, name: 'Bhajan Sangeet ', image: require('./assets/RecentPlay.jpg') },
    { id: 5, name: 'Hip-Hop Central', image: require('./assets/RecentPlay.jpg') },
    { id: 6, name: '80s Hard Rock', image: require('./assets/RecentPlay.jpg') },
  ];
  

  const audiobooks = [
    {
      id: 1,
      title: 'Mastering Conversations',
      author: 'Helen Stone',
      image: require('./assets/audiobook.jpg'),
    },
    {
      id: 2,
      title: 'Control your mind and master your emotions',
      author: 'Sandeep Mahesawari',
      image: require('./assets/audiobook.jpg'),
    },
    {
      id: 3,
      title: 'Shrimad Bhagavad Geeta in Gujarati',
      author: 'Sagar Patel ',
      image: require('./assets/audiobook.jpg'),
    },
  ];
  
  

  return (
    <ScrollView style={styles.container}>
      {/* Category Bar */}
      <View style={styles.categoryBar}>
        <TouchableOpacity style={styles.appleButton}>
          <Ionicons name="logo-apple" size={24} color="white" />
        </TouchableOpacity>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={[styles.categoryButton, cat.title === 'All' && styles.categorySelected]}>
            <Text style={styles.categoryText}>{cat.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

     {/* Playlist Buttons */}
<View style={styles.playlistGrid}>
  {playlists.map((playlist) => (
    <TouchableOpacity key={playlist.id} style={styles.playlistItem}>
      <Ionicons name="musical-notes" size={24} color="red" />
      <Text style={styles.playlistText}>{playlist.name}</Text>
    </TouchableOpacity>
  ))}
</View>

{/* Recents Section */}
<Text style={styles.sectionTitle}>Recents</Text>
<View style={styles.recentsGrid}>
  {recents.map((item) => (
    <TouchableOpacity key={item.id} style={styles.recentItem}>
      <ImageBackground
        source={item.image}
        style={styles.albumArt}
        imageStyle={{ borderRadius: 8 }}
      >
        <View style={styles.overlay}>
          <Text style={styles.albumText} numberOfLines={1}>
            {item.name}
          </Text>
        </View>
      </ImageBackground>
      <Text style={styles.subText}>Playlist</Text>
      <Text style={styles.subText}>User 1</Text>
    </TouchableOpacity>
  ))}
</View>



     {/* Audiobooks Section */}
<Text style={styles.sectionTitle}>Audiobooks for you</Text>
<View style={styles.audiobookGrid}>
  {audiobooks.map((book) => (
    <View key={book.id} style={styles.card}>
      <Image source={book.image} style={styles.cardImage} />
      <TouchableOpacity style={styles.heartIcon}>
        <Text style={{ fontSize: 18 }}>❤️</Text>
      </TouchableOpacity>
      <Text style={styles.premiumLabel}>Included in Premium</Text>
      <Text style={styles.cardTitle} numberOfLines={1}>{book.title}</Text>
      <Text style={styles.cardAuthor}>{book.author}</Text>
    </View>
  ))}
</View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    padding: 16,
    backgroundColor: 'black',
  },
  categoryBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  appleButton: {
    marginRight: 10,
    backgroundColor: 'crimson',
    padding: 10,
    borderRadius: 50,
  },
  categoryButton: {
    padding: 10,
    backgroundColor: '#282828',
    marginRight: 10,
    borderRadius: 15,
  },
  categorySelected: {
    backgroundColor: '#1DB954',
  },
  categoryText: {
    color: 'white',
    fontWeight: 'bold',
  },
  playlistGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#282828',
    padding: 10,
    borderRadius: 8,
    width: '48%',
    marginBottom: 10,
  },
  playlistText: {
    color: 'white',
    marginLeft: 10,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recentsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  
  recentItem: {
    width: '30%',
    marginBottom: 15,
  },
  
  albumArt: {
    width: '100%',
    aspectRatio: 1, 
    justifyContent: 'flex-end',
    overflow: 'hidden',
    color: ' red'
    
  },
  
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  
  albumText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  subText: {
    fontSize: 12,
    color: '#ccc',
    marginTop: 2,
  },
  
  audiobookGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  
  card: {
    backgroundColor: '#1c1c1e',
    borderRadius: 8,
    width: '48%',
    marginBottom: 16,
    padding: 8,
    position: 'relative',
  },
  
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 6,
  },
  
  heartIcon: {
    position: 'absolute',
    right: 12,
    top: 100,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 4,
  },
  
  premiumLabel: {
    color: 'limegreen',
    fontSize: 12,
    marginTop: 6,
  },
  
  cardTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 2,
  },
  
  cardAuthor: {
    color: '#aaa',
    fontSize: 12,
  },
  
});


