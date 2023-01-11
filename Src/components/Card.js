import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Avatar, Button,Text,Card } from 'react-native-paper';


const Card1 = ({title,description,price,id,handler}) => {

  
  const handleCartAdd = () => {
    handler({id,title,description,price});
}

  // const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      

      <Card style={{width:'100%'}}>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    <Card.Content>
      <Text variant="titleLarge">{title}</Text>
      <Text variant="bodyMedium">{description}</Text>
      <Text variant="bodyMedium">{price}</Text>
      
    </Card.Content>
    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
    <Card.Actions>
      {/* <Button>Cancel</Button> */}
      <Button onClick={handleCartAdd}>Add</Button>
    </Card.Actions>
  </Card>
    </View>
  );
}

export default Card1;