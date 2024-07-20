import { WebSocketServer } from "ws";
import { UserManager } from "./UserManager";

const wss = new WebSocketServer({ port: 3005 });
 

wss.on("connection", (ws) => {
    try {
        UserManager.getInstance().addUser(ws);

        // Handle errors at the WebSocket connection level
        ws.on("error", (error) => {
            console.error("WebSocket error:", error);
        });
    } catch (error) {
        console.error("Error during WebSocket connection handling:", error);
        ws.close(1011, "Unexpected error");
    }
});