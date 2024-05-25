import React from 'react'
import { ScrollView,Text } from 'react-native'
import MessageItem from './MessageItem'

export default function MessagesList({messages, currentUser}) {
    console.log('MessagesList: ', messages)
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: 10 }}>
            {
                messages.map((message, index) => {
                    return (
                        <MessageItem message={message} key={index} currentUser={currentUser} />
                    )
                })
            }
        </ScrollView>

    )
}