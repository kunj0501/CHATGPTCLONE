import Link from 'next/link';
import { db } from '../firebase';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useCollection } from 'react-firebase-hooks/firestore';
import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline';
import { collection,deleteDoc,doc} from 'firebase/firestore';

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {

  const Pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);
  const [messages] = useCollection(
    collection(db, 'users', session?.user?.email!, 'chats', id, 'messages') 
  );

  useEffect(() => {
    if (!Pathname) return;

    setActive(Pathname.includes(id));
  }, [Pathname]);

  const removeChat = async() => {
    await deleteDoc(doc(db,'users',session?.user?.email!,'chats',id));
    router.replace('/');
  }

  return (
    <Link href={`/chat/${id}`} className={`chatRow justify-center ${active && 'bg-gray-700/50'}`}>
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">
        {messages?.docs[messages?.docs.length-1]?.data().text || 'New Chat'}
      </p>
      <TrashIcon onClick={removeChat} className="h-5 w-5 text-gray-700 hover:text-red-700" />
    </Link>
  );
}
export default ChatRow;

