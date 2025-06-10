
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Switch, Button, Alert } from 'react-native';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState('usuario@email.com');
   function handleLogout() {
    Alert.alert('Sair', 'Você saiu da sua conta!');
    // Aqui você pode adicionar a lógica real de logout
  }
   function handleSave() {
    Alert.alert('Salvo', 'Suas configurações foram salvas!');
    // Aqui você pode adicionar lógica para salvar as configurações
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <View style={styles.section}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Tema escuro</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
        />
      </View>

      <View style={styles.section}>
        <Button title="Salvar configurações" onPress={handleSave} />
      </View>

      <View style={styles.section}>
        <Button title="Sair" color="red" onPress={handleLogout} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    alignSelf: "center",
  },
  section: {
    marginBottom: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  label: {
    fontSize: 18,
    fontWeight: "400"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    minWidth: 160,
    marginLeft: 16
  }
});