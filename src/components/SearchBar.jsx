// components/SearchBar.js
import { Octicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <View className="flex-row items-center bg-gray-100 p-2 rounded-lg m-4">
            <Octicons name="search" size={hp(2.7)} color="gray" />
            <TextInput
                className="ml-2 flex-1 text-gray-700"
                placeholder="Search messages..."
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
        </View>
    );
};

