import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Image and Title */}
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://cps-smartfarm.github.io/assets/images/smart-ag.jpeg' }}
          style={styles.heroImage}
        />
        <Text style={styles.heroTitle}>Home</Text>
        <Text style={styles.heroSubtitle}>Sharing Farm Intelligence via Edge Computing</Text>
      </View>

      {/* Welcome Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.text}>
          The era of data sharing is here, but scientists still struggle to share lessons learned from agricultural data
          collection and data processing. It's challenging, insecure, and time-consuming. This project aims to mitigate
          these challenges by bringing together experts in plant science, secure networked systems, software engineering,
          and geospatial science.
        </Text>
        <Text style={styles.text}>
          The team will develop a cyber-physical system to securely orchestrate data gathered using sensors, such as
          hyperspectral and thermal cameras, to collect imagery on soybean, sorghum, and other crops. Preprocessed plant
          datasets will be offered to scientists and farmers in different formats via a web-based system, ready to be processed
          by deep learning algorithms or consumed by thin clients.
        </Text>
        <Text style={styles.text}>
          Data collected from different crop farms will be used to train distributed deep learning systems using novel
          architectures that optimize privacy and training time. Such machine learning systems will be used to predict plant
          stress and detect pathogens. Finally, the cyber-physical system will integrate novel data processing software with
          existing NSF-funded hardware platforms, introducing novel algorithmic contributions in edge computing and giving
          feedback to farmers, closing the loop.
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          style={styles.video}
          source={{ uri: 'https://www.youtube.com/embed/99mV_EAidtk?si=G4p_7kq-oBPTMIJi' }}
        />
      </View>

      {/* Collaboration Section */}
      <View style={styles.collaborationSection}>
        <Text style={styles.collabTitle}>Collaboration</Text>
        <Text style={styles.collabText}>
          The partnership between a plant science center, a remote sensing lab, and a computer science department is a unique
          opportunity to develop innovative solutions in the field of agriculture.
        </Text>
      </View>

      {/* Partners Section */}
      <View style={styles.partners}>
        <Image
          source={{ uri: 'https://cps-smartfarm.github.io/assets/images/slu.png' }}
          style={styles.partnerImage}
        />
        <Image
          source={{ uri: 'https://cps-smartfarm.github.io/assets/images/donald.png' }}
          style={styles.partnerImage}
        />
      </View>

      {/* Contact Section */}
      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>Contact us</Text>
        <Text style={styles.contactText}>
          We also collaborate with companies and other research centers to develop new solutions for agriculture. Please
          take a look at the source code related to this project on{' '}
          <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/CPS-SmartFarm')}>
            GitHub
          </Text>
          , and{' '}
          <Text style={styles.link} onPress={() => Linking.openURL('mailto:flavio.esposito@slu.edu')}>
            get in touch
          </Text>{' '}
          if you are interested in collaborating with us.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  hero: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  heroImage: {
    width: '100%',
    height: 200,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#188eac',
    marginTop: 10,
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#188eac',
  },
  section: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#188eac',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
  },
  videoContainer: {
    padding: 20,
  },
  video: {
    height: 200,
  },
  collaborationSection: {
    backgroundColor: '#188eac',
    padding: 20,
    color: '#ffffff',
  },
  collabTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  collabText: {
    fontSize: 16,
    color: '#ffffff',
  },
  partners: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
  partnerImage: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  contactSection: {
    padding: 20,
    backgroundColor: '#ffffff',
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#188eac',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#333333',
  },
  link: {
    color: '#188eac',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
