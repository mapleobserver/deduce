import WebSocket from 'ws';
import { parse } from 'json5';
import { EventEmitter } from 'events';
import { WebSocketConfig } from '../types/Config';
import { SocketInterface } from '../types/System';

class Socket extends EventEmitter implements SocketInterface {
  public options: WebSocketConfig;

  public socket?: WebSocket;

  constructor(options: WebSocketConfig) {
    super();
    this.options = options;
    try {
      this.socket = new WebSocket(this.options.wsUrl, {
        origin: 'http://game.wsmud.com',
      });
      this.socket.onopen = this.onOpen.bind(this);
      this.socket.onclose = this.onClose.bind(this);
      this.socket.onerror = this.onError.bind(this);
      this.socket.onmessage = this.onMessage.bind(this);
    } catch (error) {
      this.emit('error', error);
    }
  }

  private onOpen(): void {
    this.emit('open');
    this.send(this.options.token);
  }

  private onClose(): void {
    this.emit('close');
  }

  private onError(error: WebSocket.ErrorEvent): void {
    this.emit('error', error);
  }

  private onMessage(message: WebSocket.MessageEvent): void {
    if (typeof message.data === 'string') {
      if (/^{.*}$/.test(message.data)) {
        const data = parse(message.data);
        if (data.type === 'items') {
          data.items = data.items.filter((item: object | 0) => item !== 0);
        }
        this.emit(data.type, data);
      } else {
        this.emit('tip', {
          type: 'tip',
          message: message.data,
        });
      }
    }
  }

  public send(message: string): void {
    if (this.socket?.readyState !== 1) {
      return;
    }

    const cmdlist = message.split(',');
    cmdlist.forEach((cmd) => this.socket?.send(cmd));
  }
}

export default Socket;
