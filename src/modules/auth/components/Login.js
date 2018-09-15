import React, {Component} from 'react';
import { get } from 'js-dep-inj';

import * as styles from './Login.styles';

export class Login extends Component {
  constructor() {
    super();

    this.telegramApiProvider = get('TelegramApiProvider');
  }

  componentDidMount() {
  }

  login = () => {
    this.telegramApiProvider.invokeApi('auth.sendCode', {
      phone_number: '+77014495500',
      sms_type: 0,
      lang_code: 'en'
    }).then(res => console.log(res))
      .catch(err => console.error(err));
  }

  render() {
    return <styles.Container>
      <button onClick={this.login}>Login</button>
    </styles.Container>
  }
}
