import * as MtpProxy  from 'telejs';
import { get } from 'js-dep-inj';
import axios from 'axios';

const telegramApiStoreName = 'telegramApiStore';

const defaultState = {
    current_dc_id: 2,
    prev_dc_id: undefined,
    dc_options: [
            {
                "_": "dcOption",
                "pFlags": {},
                "flags": 0,
                "id": 1,
                "ip_address": "149.154.175.10",
                "port": 80
            },
            {
                "_": "dcOption",
                "pFlags": {},
                "flags": 0,
                "id": 2,
                "ip_address": "149.154.167.40",
                "port": 443
            }
        ],
    networkers: []
}

export class TelegramApiProvider {
  constructor() {
    this.storage = get('Storage');
    this.mtpProxy = MtpProxy.init(
      (state = {}) => {
        return new Promise((resolve, reject) => {
          this.storage.setStore(defaultState, telegramApiStoreName);
          resolve();
        });
      },
      () => new Promise((resolve, reject) => {
        resolve(this.storage.getStore(telegramApiStoreName) || JSON.stringify(defaultState));
      })
    )
  }

  invokeApi(messageCode, params = {}) {
    // return this.mtpProxy.then(() => {
    //   return MtpProxy.mtpInvokeApi(messageCode, params);
    // });
    return axios.post(`http://localhost:8989/telegram/${messageCode}`, params);
  }
}
