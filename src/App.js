import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
export default App;

import { StyleSheet, View, Text, Image, ScrollView, Linking, Platform } from 'react-native';
import { NativeRouter, Route, Link, Routes } from 'react-router-native';

// Common styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#007BFF',
    paddingVertical: 10,
  },
  navLink: {
    color: '#ffffff',
    fontSize: 16,
    textDecorationLine: 'none',
  },
  section: {
    padding: 15,
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 15,
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

const Navbar = () => (
  <View style={styles.navbar}>
    <Link to="/" style={styles.navLink}>
      <Text style={styles.navLink}>Home</Text>
    </Link>
    <Link to="/goals" style={styles.navLink}>
      <Text style={styles.navLink}>Goals</Text>
    </Link>
    <Link to="/members" style={styles.navLink}>
      <Text style={styles.navLink}>Members</Text>
    </Link>
    <Link to="/publications" style={styles.navLink}>
      <Text style={styles.navLink}>Publications</Text>
    </Link>
    <Link to="/outreach" style={styles.navLink}>
      <Text style={styles.navLink}>Outreach</Text>
    </Link>
    <Link to="/source-codes" style={styles.navLink}>
      <Text style={styles.navLink}>Source Codes</Text>
    </Link>
  </View>
);

const Home = () => (
  <ScrollView style={styles.container}>
    <View style={styles.section}>
      <Text style={styles.title}>Sharing Farm Intelligence</Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://cps-smartfarm.github.io/images/smart-ag.jpeg' }}
      />
      <Text style={styles.text}>
        Welcome to the Sharing Farm Intelligence project! Explore our efforts in integrating edge
        computing into smart farming.
      </Text>
    </View>
  </ScrollView>
);

const Goals = () => (
  <ScrollView style={styles.container}>
    <View style={styles.section}>
      <Text style={styles.title}>Goals</Text>
      <Text style={styles.text}>
        Our goal is to enhance precision agriculture using edge computing and IoT. We aim to
        revolutionize the farming experience with intelligent and efficient solutions.
      </Text>
    </View>
  </ScrollView>
);

const Members = () => (
  <ScrollView style={styles.container}>
    <View style={styles.section}>
      <Text style={styles.title}>Members</Text>
      <Text style={styles.text}>
        Meet our amazing team dedicated to transforming agriculture with cutting-edge technology.
      </Text>
    </View>
  </ScrollView>
);

const Publications = () => (
  <ScrollView style={styles.container}>
    <View style={styles.section}>
      <Text style={styles.title}>Publications</Text>
      <Text style={styles.text}>
        Explore our published research papers and findings. Stay updated on our journey towards
        smarter farming.
      </Text>
    </View>
  </ScrollView>
);

const Outreach = () => (
  <ScrollView style={styles.container}>
    <View style={styles.section}>
      <Text style={styles.title}>Outreach Activities</Text>
      <Text style={styles.text}>
        We actively engage with the community to inspire the next generation in STEM education. 
        Discover our initiatives and events aimed at sharing knowledge.
      </Text>
    </View>
  </ScrollView>
);

const SourceCodes = () => (
  <ScrollView style={styles.container}>
    <View style={styles.section}>
      <Text style={styles.title}>Source Codes</Text>
      <Text style={styles.text}>
        View our source code repositories on GitHub:
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL('https://github.com/Shakoor-Lab-Organization/learn_ioat')
          }
        >
          {' '}
          A Real-time Gaming Framework for IoT and Smart Agriculture
        </Text>
      </Text>
    </View>
  </ScrollView>
);

const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/members" element={<Members />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/outreach" element={<Outreach />} />
        <Route path="/source-codes" element={<SourceCodes />} />
      </Routes>
    </View>
  </NativeRouter>
);


