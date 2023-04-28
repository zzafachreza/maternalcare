import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import YoutubePlayer from "react-native-youtube-iframe";
import { SafeAreaView } from 'react-native';
import { colors } from '../utils';
export default function Youtube({ navigation, route }) {

  const link = route.params.link;
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <YoutubePlayer
        height={300}
        play={true}
        videoId={link}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})