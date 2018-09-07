import { WebSocketSubject } from 'rxjs/websocket';
import { retry } from 'rxjs/operators';

export class WebSocket {
  constructor() {
    this.initialize();
  }

  initialize() {
    this.ws = new WebSocketSubject('ws://localhost:8080');

    this.ws.subscribe((response) => {
      console.log(response);
    });
  }
}
