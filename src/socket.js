import { io } from "socket.io-client";

export const initSocket = async () => {
	const options = {
		"force new connection": true,
		reconnectionAttempts: "Infinity",
		timeout: 10000,
		transports: ["websocket"],
	};

	const socket = io("https://code-server-me.onrender.com/", options);
	return socket;
};

