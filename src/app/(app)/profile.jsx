import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useAuth } from '../../context/authContext';

export default function Profile() {
    const { logout, user } = useAuth();
    return (
        <ScrollView className="flex-1 bg-white">
            <View className="bg-blue-500 h-56 justify-center items-center relative">
                <Image className="absolute w-full h-full" source={{ uri: 'https://via.placeholder.com/600x200' }} />
                <Image className="w-24 h-24 rounded-full border-4 border-white" source={{ uri: user?.profileUrl }} />
            </View>
            <View className="p-5 items-start">
                <Text className="text-2xl text-gray-800 font-semibold">Username: {user?.username}</Text>
                {/* <Text className="text-lg text-blue-500 mt-2">Chưa có tiểu sử</Text> */}
                <Text className="text-base text-gray-600 mt-2 text-center">
                    Chưa có tiểu sử
                </Text>
                <View className="flex-row mt-5">
                    {/* <Button title="Nhắn Tin" buttonStyle={{ backgroundColor: '#00BFFF', marginHorizontal: 10 }} /> */}
                </View>
            </View>
            <View className="p-5">
                {/* <Text className="text-xl font-semibold mb-3">Posts</Text> */}
                {/* Thêm các bài viết của người dùng ở đây */}
            </View>
        </ScrollView>
    );
};