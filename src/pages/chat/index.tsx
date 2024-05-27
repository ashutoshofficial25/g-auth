import { useEffect } from 'react';
// @mui
import { Card, Container } from '@mui/material';
// redux
// import { useDispatch } from '../../redux/store';
// import { getConversations, getContacts } from '../../redux/slices/chat';
// routes

// hooks

// sections
import { ChatSidebar, ChatWindow } from '../../components/chat';

// ----------------------------------------------------------------------

export default function Chat() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getConversations());
  //   dispatch(getContacts());
  // }, [dispatch]);

  return (
    <>
      <Container>
        <Card sx={{ height: '72vh', display: 'flex' }}>
          <ChatSidebar />
          <ChatWindow />
        </Card>
      </Container>
    </>
  );
}
