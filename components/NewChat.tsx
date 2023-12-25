"use client"
import React from 'react';
import { db } from '../firebase';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { PlusIcon } from '@heroicons/react/24/solid'
import { serverTimestamp } from 'firebase/firestore';
import { addDoc, collection} from 'firebase/firestore';

function NewChat() {

  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    // try {
      const doc = await addDoc(
        collection(db, "users",session?.user?.email!,"chats"),
        {
        userId: session?.user?.email,
        createdAt: serverTimestamp(),
        }
      );
      router.push(`/chat/${doc.id}`);
    // }catch(error) {
    //   console.error('Error creating new chat:', error);
    // }
  };

  return (

    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  ); 

}

export default NewChat;