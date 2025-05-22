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
    { id: 6, name: 'Upbeat mix' },
    { id: 7, name: 'Daily Wellness' },
    { id: 8, name: 'Release Radar' },
  ];

  const recents = [
    { id: 1, name: 'Pop mix', image: require('./assets/RecentPlay.jpg') },
    { id: 2, name: 'Hot Hits', image: require('./assets/RecentPlay.jpg') },
    { id: 3, name: 'Upbeat Mix', image: require('./assets/RecentPlay.jpg') },
    { id: 4, name: 'Daily Wellness', image: require('./assets/RecentPlay.jpg') },
    { id: 5, name: 'Hip-Hop Central', image: require('./assets/RecentPlay.jpg') },
    { id: 6, name: '80s Hard Rock', image: require('./assets/RecentPlay.jpg') },
  ];
  

}