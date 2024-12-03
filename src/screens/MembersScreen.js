// Import necessary React Native components
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const MembersScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.heroSection}>
        <Image source={{ uri: 'https://cps-smartfarm.github.io/assets/images/gallery/members3.jpg' }} style={styles.heroImage} />
        <View style={styles.overlay}>
          <Text style={styles.heroTitle}>Members</Text>
          <Text style={styles.heroSubtitle}>These are the members of the project</Text>
        </View>
      </View>

      {/* Members List */}
      <View style={styles.membersList}>
        {members.map((member, index) => (
          <View key={index} style={styles.member}>
            <Image source={{ uri: member.image }} style={styles.profileImage} />
            <View style={styles.memberInfo}>
              <Text style={styles.memberName}>{member.name}</Text>
              <Text style={styles.memberRole}><Text style={{ fontWeight: 'bold' }}>Role:</Text> {member.role}</Text>
              <Text style={styles.memberSummary}>{member.summary}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Developed by{' '}
          <Text style={styles.footerLink} onPress={() => Linking.openURL('https://felipealencar.github.io')}>
            felipealencar
          </Text>
        </Text>
        <Text style={styles.footerText}>
          Theme built by{' '}
          <Text style={styles.footerLink} onPress={() => Linking.openURL('https://www.csrhymes.com')}>
            C.S. Rhymes
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

// Example Data for Members
const members = [
  {
    name: 'Flavio Esposito',
    role: 'Lead PI, Associate Professor (Saint Louis University)',
    summary: 'Flavio Esposito is an Associate Professor of Computer Science and a Fellow of the Research Institute at Saint Louis University. He received his PhD in Computer Science from Boston University, USA, and a MS in Telecommunications Engineering from the University of Florence, Italy. His research interests are Cyber-Physical Systems, in general, and Computer Networks, Edge Computing, and Applied Artificial Intelligence, in particular.',
    image: 'https://cps-smartfarm.github.io/assets/images/profiles/flavio.jpeg',
  },
  // Add more members as needed
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroSection: {
    position: 'relative',
    height: 200,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  heroSubtitle: {
    color: '#fff',
    fontSize: 18,
  },
  membersList: {
    padding: 20,
  },
  member: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  memberRole: {
    fontSize: 14,
    color: '#555',
  },
  memberSummary: {
    fontSize: 12,
    color: '#777',
  },
  footer: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#555',
  },
  footerLink: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default MembersScreen;
