import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

const GoalsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Image source={require('../assets/images/nsf.png')} style={styles.logo} />
        <Text style={styles.navTitle}>Sharing Farm Intelligence</Text>
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <Image source={require('../assets/images/goals.jpeg')} style={styles.heroImage} />
        <View style={styles.overlay}>
          <Text style={styles.heroTitle}>Goals</Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={styles.section}>
        <Text style={styles.paragraph}>
          In the era of data sharing, it is still challenging, insecure, and time-consuming for scientists to share lessons
          learned from agricultural data collection and data processing. The focus of this project is to mitigate such
          challenges by intersecting expertise in plant science, secure networked systems, software engineering, and
          geospatial science. The proposed cyber-physical system will be evaluated in the laboratory and deployed on real
          crop farms in Missouri, Illinois, and Tennessee. All results will be shared with international organizations whose
          goal is to increase food security and improve human health and nutrition.
        </Text>
        <Text style={styles.paragraph}>
          The proposed system will securely orchestrate data gathered using sensors, such as hyperspectral and thermal
          cameras to collect imagery on soybean, sorghum, and other crops. Preprocessed plant datasets will be then offered
          to scientists and farmers in different formats via a web-based system, ready to be processed by deep learning
          algorithms or consumed by thin clients. Data collected from different crop farms will be used to train distributed
          deep learning systems, using novel architectures that optimize privacy and training time. Such machine learning
          systems will be used to predict plant stress and detect pathogens. Finally, the cyber-physical system will integrate
          novel data processing software with existing NSF-funded hardware platforms, introducing novel algorithmic
          contributions in edge computing and giving feedback to farmers, closing the loop.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Developed by <Text onPress={() => Linking.openURL('https://felipealencar.github.io')}>felipealencar</Text></Text>
        <Text style={styles.footerText}>Theme built by <Text onPress={() => Linking.openURL('https://www.csrhymes.com')}>C.S. Rhymes</Text></Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#00796b',
  },
  logo: {
    width: 50,
    height: 50,
  },
  navTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  hero: {
    position: 'relative',
    width: '100%',
    height: 200,
    backgroundColor: '#00796b',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  section: {
    padding: 15,
  },
  paragraph: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
  },
  footer: {
    padding: 15,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#00796b',
  },
});

export default GoalsScreen;
