import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const ChatProps = useMultiChatLogic(
        'e7777f90-d33f-4833-8335-456a03f1dafc',
        props.user.username,
        props.user.secret
    );
    return (
        <div style={{ height: '100vh'}}>
            <MultiChatSocket {...ChatProps} />
            <MultiChatWindow  {...ChatProps} style={{ height: '100%' }} />
        </div>
    )
}

export default ChatsPage;