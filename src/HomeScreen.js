import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const HomeScreen = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [manualLat, setManualLat] = useState('');
  const [manualLong, setManualLong] = useState('');

  // Function to update the manual latitude and longitude
  const updateLocation = () => {
    setLatitude(parseFloat(manualLat));
    setLongitude(parseFloat(manualLong));
  };

  useEffect(() => {
    // You can add code here to update the map automatically when latitude and longitude change.
  }, [latitude, longitude]);

  return (
    <View>
      <MapView
        style={{ width: '100%', height: 300 }}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude, longitude }} />
      </MapView>
      <Text>Latitude: {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
      <TextInput
        placeholder="Enter Latitude"
        onChangeText={(text) => setManualLat(text)}
      />
      <TextInput
        placeholder="Enter Longitude"
        onChangeText={(text) => setManualLong(text)}
      />
      <Button title="Update Location" onPress={updateLocation} />
    </View>
  );
};

export default HomeScreen;
