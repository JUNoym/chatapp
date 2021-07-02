import React, { useState, Component } from 'react';
import SignIn from './SignIn'
import Main from './Main'
import config from '../config.json'




export default () => {
  const [name, setName] = useState('')
  // もしnameにsetNameでstringが渡された結果、文字列が代入されたらMainComponentを表示する
  // 空文字だった場合はSingnInコンポーネントを表示する
  if (config.signInEnabled && name === '') {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
};
