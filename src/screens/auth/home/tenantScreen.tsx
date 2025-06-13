import React, {useState} from 'react';
import {ScrollView, View, Text, Button, StyleSheet} from 'react-native';
import TenantInfoCard from '../../../components/Molucules/TenantInfoCard';
import RentForm from '../../../components/Molucules/RentForm';

const TenantScreen = () => {
  const [tenant, setTenant] = useState<Record<string, string> | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleFormSubmit = (data: Record<string, string>) => {
    setTenant(data);
    setShowForm(false);
  };

  const handleRemoveTenant = () => {
    setTenant(null);
    setShowForm(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {tenant ? (
        <TenantInfoCard data={tenant} />
      ) : showForm ? (
        <RentForm onSubmit={handleFormSubmit} />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No tenant added yet.</Text>
        </View>
      )}

      {/* Action buttons */}
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <Button
            title="Add Tenant"
            onPress={() => setShowForm(true)}
            disabled={!!tenant}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Remove Tenant"
            onPress={handleRemoveTenant}
            disabled={!tenant}
            color="#e63946"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    marginBottom: 12,
    color: '#444',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default TenantScreen;
