
import React, { useState, useEffect } from 'react'
import { View ,SafeAreaView,StyleSheet,styles,FlatList,Item} from 'react-native';
import Card1 from '../components/Card';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios, { AxiosError } from 'axios';
import { Avatar, Button,Text,Card} from 'react-native-paper';

const data = [
  {
    id: '1',
    title: 'First Item',
    description:'watch',
    price:'100000',
  },
  {
    id: '2',
    title: 'Second Item',
    description:'car',
    price:'100000',
  },
  {
    id: '3',
    title: 'Third Item',
    description:'shirt',
    price:'100000',
  },
];

export default function ProductScreen({ handleAdd}) {
  // const [data, setData] = React.useState();
  // const cartItems = useSelector((state) => state.cart.itemList);
  // console.log(cartItems);

  

  React.useEffect(() => {
      axios.get('https://dummyjson.com/products')
      .then(function (response) {
          // console.log(response.data.products);
          console.log('product data fetched')
          setData(response.data.products);
      })
      .catch(function (error) {
          console.log(error);
      });
  },[]);

  return (
  <SafeAreaView style={{padding: 5}}>
      <FlatList
        data={data}
        keyExtractor={data => data.id.toString()}
        contentContainerStyle={{paddingBottom: 60}}
        style={{
          // shadowColor: theme.colors.medium,
          shadowOpacity: 0.7,
          shadowOffset: {height: 5, width: 0},
        }}
        renderItem={({item}) => (
          <Card1
            id={item.id}
            productName={item.title}
            price={'$ '+item.price}
            description={item.description}
            handler={handleAdd}
          />
        )}
      />
  </SafeAreaView>
  );
}


// export default function ProductScreen() {

//  const [selectedId, setSelectedId] = useState(null);

//   // const renderItem = ({item}) => {
//   //   const backgroundColor = item.id[0] === selectedId ? "#6e3b6e" : "#f9c2ff";
//   //   const color = item.id[0] === selectedId ? 'white' : 'black';

//     return (
//       <div>
//       {/* <Item
//         item={DATA}
//         // onPress={() => setSelectedId(item.id)}
//         backgroundColor={{ backgroundColor }}
//         textColor={{ color }}
//       /> */}
      
//     <SafeAreaView style={styles.design}>
//       <FlatList
//         data={DATA}
//         keyExtractor={DATA => DATA.id.toString()}
//         extraData={selectedId}

//         renderItem={({item}) => (
//           <Card1
//             id={item.id}
//             productName={item.title}
//             price={'$ '+item.price}
//             description={item.description}
//           />
//         )}
//       />
//     </SafeAreaView>
//     </div>
//      );
//     }
  


//   const styles = StyleSheet.create({
//   design: {

//     borderRadius: 20,
//     marginBottom: 10,
//     elevation: 20,
//   },
// })


//   // const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
//   // return (
//   //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//   //     <Text>Product</Text>

//   //     <Card style={{width:'100%'}}>
//   //   {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
//   //   <Card.Content>
//   //     <Text variant="titleLarge">Card title</Text>
//   //     <Text variant="bodyMedium">Card content</Text>
//   //   </Card.Content>
//   //   {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
//   //   <Card.Actions>
//   //     {/* <Button>Cancel</Button> */}
//   //     <Button>Add</Button>
//   //   </Card.Actions>
//   // </Card>
//   //   </View>
//   // );




// // const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

// // const MyComponent = () => (
// //   <Card>
// //     <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
// //     <Card.Content>
// //       <Text variant="titleLarge">Card title</Text>
// //       <Text variant="bodyMedium">Card content</Text>
// //     </Card.Content>
// //     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
// //     <Card.Actions>
// //       <Button>Cancel</Button>
// //       <Button>Ok</Button>
// //     </Card.Actions>
// //   </Card>
// // );

