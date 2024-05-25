import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Alert, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomKeyboardView from '../components/CustomKeyboardView';
import Loading from '../components/Loading';
import { useAuth } from '../context/authContext';

export default function SignUp() {
  const router = useRouter();
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");

  const handleRegister = async () => {
    if (!emailRef.current || !passwordRef.current || !usernameRef.current) {
      Alert.alert('Đăng Ký', 'Vui lòng điền vào tất cả các trường!');
      return;
    }
    console.log(emailRef.current)
    setLoading(true);
    let response = await register(emailRef.current, passwordRef.current, usernameRef.current);

    setLoading(false);

    console.log('got result: ', response);
    if (!response.success) {
      Alert.alert('Đăng Ký', response.msg);
      return;
    }

  }
  return (
    <CustomKeyboardView>
      <StatusBar style="dark" />
      <View style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }} className="flex-1 gap-12">
        {/* signIn image */}
        <View className="items-center">
          <Image style={{ height: hp(25) }} resizeMode='contain' source={require('../assets/images/long.png')} />
        </View>

        <View className="gap-10">
          <Text style={{ fontSize: hp(4) }} className="font-bold tracking-wider text-center text-neutral-800">Đăng Ký</Text>
          <View className="gap-4">
            <View style={{ height: hp(7) }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl">
              <Octicons name="mail" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={value => emailRef.current = value}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder='Email address'
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{ height: hp(7) }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl">
              <Octicons name="person" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={value => usernameRef.current = value}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder='Username'
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{ height: hp(7) }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl">
              <Octicons name="lock" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={value => passwordRef.current = value}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder='Password'
                secureTextEntry
                placeholderTextColor={'gray'}
              />
            </View>

            <View>
              {
                loading ? (
                  <View className="flex-row justify-center">
                    <Loading size={hp(8)} />
                  </View>
                ) : (
                  <TouchableOpacity onPress={handleRegister} style={{ height: hp(6.5) }} className="bg-blue-500 rounded-xl justify-center items-center">
                    <Text style={{ fontSize: hp(2.7) }} className="text-white font-bold tracking-wider">
                      Đăng Ký
                    </Text>
                  </TouchableOpacity>
                )
              }
            </View>

            {/* submit buttn */}


            <View className="flex-row justify-center">
              <Text style={{ fontSize: hp(1.8) }} className="font-semibold text-neutral-500">Bạn đã có tài khoản?</Text>
              <Pressable onPress={() => router.push('signIn')}>
                <Text style={{ fontSize: hp(1.8) }} className="font-bold text-indigo-500"> Đăng Nhập</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  )
}