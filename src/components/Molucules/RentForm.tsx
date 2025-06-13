import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

interface RentFormProps {
  onSubmit: (data: Record<string, string>) => void;
}

const RentForm: React.FC<RentFormProps> = ({onSubmit}) => {
  const [formData, setFormData] = useState<Record<string, string>>({
    fullName: '',
    mobileNumber: '',
    email: '',
    nidNumber: '',
    rentAmount: '',
    rentStartDate: '',
    address: '',
  });

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({...prev, [key]: value}));
  };

  const handleSubmit = () => {
    const allFilled = Object.values(formData).every(
      value => value.trim() !== '',
    );
    if (!allFilled) {
      Alert.alert(
        'Validation Error',
        'Please fill all fields before submitting.',
      );
      return;
    }
    onSubmit(formData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.entries(formData).map(([key, value]) => (
        <View key={key} style={styles.inputGroup}>
          <Text style={styles.label}>{key.replace(/([A-Z])/g, ' $1')}</Text>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={text => handleChange(key, text)}
            placeholder={`Enter ${key}`}
          />
        </View>
      ))}
      <Button title="Submit Tenant Info" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
    textTransform: 'capitalize',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
});

export default RentForm;
