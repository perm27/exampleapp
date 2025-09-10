// src/App.js

import { withAuthenticator, Button, Heading, Image, View, Card } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App({ signOut, user }) {
  return (
    <View className="App">
      <div>
        <p>Hello {user.username}</p>
        <Button onClick={signOut}>Sign Out</Button>
        <UserList />
      </div>
      <Card>
        <Heading level={1}>Hello, {user.username}  example check.</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
      <h1>aaaaa</h1>
    </View>
  );
}

export default withAuthenticator(App);




// src/App.js
/*
import React from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import './App.css'; // カスタムCSSをインポート

Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>サインアウト</button>
      </header>
      <main>
        //<userListApi />
      </main>
    </div>
  );
}

export default withAuthenticator(App);

*/