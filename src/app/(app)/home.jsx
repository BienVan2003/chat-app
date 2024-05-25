import { StatusBar } from 'expo-status-bar';
import { getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ChatList from '../../components/ChatList';
import { useAuth } from '../../context/authContext';
import { usersRef } from '../../firebaseConfig';

export default function Home() {
  const { logout, user } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (user?.uid) {
      getUsers();
    }
  }, []);
  const getUsers = async () => {
    // fetch users
    const q = query(usersRef, where('userId', '!=', user?.uid));

    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data() });
    });

    setUsers(data);
    console.log('got users: ', data);
  }

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />
      {
        users.length > 0 ? (
          <ChatList users={users} />
        ) : (
          <View className="flex items-center" style={{ top: hp(30) }}>
            <ActivityIndicator size="large" color="blue" />
            {/* <Loading size={hp(10)} /> */}
          </View>
        )
      }
    </View>
  )
}