```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Buggy version
const buggySetItem = async (key, value) => {
  await AsyncStorage.setItem(key, value);
  const retrievedValue = await AsyncStorage.getItem(key);
  console.log('Buggy: ', retrievedValue); // Often returns null
};

// Corrected version
const correctedSetItem = async (key, value) => {
  await AsyncStorage.setItem(key, value);
  const retrievedValue = await AsyncStorage.getItem(key);
  console.log('Corrected: ', retrievedValue); // Returns the stored value
};

// Example Usage
const testAsyncStorage = async () => {
  await correctedSetItem('@my_key', 'my_value');
};
testAsyncStorage();

```