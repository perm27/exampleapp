// src/App.js
import { withAuthenticator, Button, Heading, Image, View, Card } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App({ signOut, user }) {
  return (
    <View className="App">
      <Card>
        <Heading level={1}>Hello, {user.username}</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);