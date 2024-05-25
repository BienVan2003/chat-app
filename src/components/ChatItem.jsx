import { Image } from 'expo-image';
import React from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import {blurhash} from '../utils/common';

export default function ChatItem({ item, router, noBorder }) {
    const openChatRoom = () => {
        router.push({pathname: '/chatRoom', params: item});
    }

    const test = () => {
        console.log('test');
    }
    
    return (
        <TouchableOpacity onPress={openChatRoom} className={`bg-blue flex-row justify-between mx-4 items-center gap-3 mb-4 pb-2 ${noBorder ? '' : 'border-b border-b-neutral-200'}`}>
            <Image
                style={{ height: hp(6), width: hp(6), borderRadius: hp(3)}}
                source={item?.profileUrl}
                placeholder={blurhash}
                transition={500}
            />
            {/* name and last message */}
            <View className="flex-1 gap-1">
                <View className="flex-row justify-between">
                    <Text style={{ fontSize: hp(1.8) }} className="font-semibold text-neutral-800">{item?.username}</Text>
                    <Text style={{ fontSize: hp(1.6) }} className="font-semibold text-neutral-800">Time</Text>
                </View>
                <Text style={{ fontSize: hp(1.6) }} className="font-medium text-neutral-500">Last message</Text>
            </View>
        </TouchableOpacity>
    )
}