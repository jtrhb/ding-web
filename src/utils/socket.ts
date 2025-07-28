// src/realtime/socket.ts
import { Manager } from "socket.io-client";

export const manager = new Manager(import.meta.env.VITE_WS_URL, {
  autoConnect: false,
  reconnection: true,
  transports: ["websocket", "polling"],
});

// 复用同一底层连接的命名空间
export const chatSocket = manager.socket("/chat", {
  ackTimeout: 10000,
  retries: 2, // 配合连接状态恢复时常用
});

export function connectSockets() {
  manager.open();
}
export function disconnectSockets() {
  manager._close();
}
