import * as React from 'react';
import {View, Text, SafeAreaView, ImageBackground, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar, Title} from 'react-native-paper';


function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userProfile}>
          <View style={styles.userTitle}>

            <View>
              <Title style={{color: '#111111', marginTop: 15, fontSize: 25}}>
              Store
              </Title>
            </View>
          </View>
       
        <View style={styles.Info}>
          
          <View style={styles.card}>
            <View style={styles.row}>
              <Ionicons
                name="person"
                color="#000066"
                size={20}
                style={{marginRight: 4}}
              />
              <Text style={{color: '#000066', marginLeft: 20}}>
                First Name
              </Text>
            </View>
            <Text style={styles.cardInfo}>sample first name</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.row}>
              <Ionicons name="person" color="##000066" size={20} />
              <Text style={{color: '#000066', marginLeft: 20}}>
                Last Name 
              </Text>
            </View>
            <Text style={styles.cardInfo}>sample last name</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.row}>
              <Ionicons name="male-female-sharp" color="#000066" size={20} />
              <Text style={{color: '#000066', marginLeft: 20}}>Gender</Text>
            </View>
            <Text style={styles.cardInfo}>Male</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.row}>
              <Ionicons name="mail" color="#000066" size={20} />
              <Text style={{color: '#000066', marginLeft: 20}}>Email</Text>
            </View>
            <Text style={styles.cardInfo}>Maran@gmail.com</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  userProfile: {
    flex: 1,
    backgroundColor: 'white',
  },
  Title: {
    alignItems: 'center',
    marginTop: 60,
  },
  Info: {
    marginLeft: 20,
    marginRight: 20,
  },
  row: {
    flexDirection: 'row',
  },
  cardInfo: {
    marginLeft: 40,
    color: 'black',
  },
  card: {
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
  },
};

export default ProfileScreen;