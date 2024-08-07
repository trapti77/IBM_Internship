import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FilterButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.filterButton}>
      <Icon name="filter-list" size={20} style={styles.filterIcon} />
      <Text style={styles.filterText}>Filter</Text>
      <Icon name="arrow-drop-down" size={20} style={styles.dropdownIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  filterIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  filterText: {
    fontSize: 16,
    marginRight: 5,
  },
  dropdownIcon: {
    width: 20,
    height: 20,
  },
});

export default FilterButton;
