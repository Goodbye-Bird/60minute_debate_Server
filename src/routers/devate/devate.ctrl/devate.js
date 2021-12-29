import express from "express";
import { Server as socket } from "socket.io";
import http from "http";

// users.js
import { addUser, removeUser, getUser, getUsersInRoom } from "./users";
import models from "../../../models";

const app = express();
const server = http.createServer(app);
const io = new socket(server);

export const devate = async (req, res) => {
  // 3. 소켓 연결 및 이벤트
  io.on("connection", (socket) => {
    console.log("소켓 연결 완료");
    // 클라이언트에서 join이벤트를 보냈을 경우에 대해서 처리 `on`
    socket.on("join", ({ name, room }, callback) => {
      const data = {
        name: name,
        room: room,
      };
      models.Devate.create({
        name: data.name,
        room: data.room,
      });
      const { error, user } = addUser({ id: socket.id, name, room });
      if (error) return callback(error);
      // 해당 유저 방에 접속처리
      socket.join(user.room);
      console.log("user room : " + user.room);
      // console.log(user.room);
      // 관리자(서버)에서 소켓으로 보내는 이벤트
      socket.emit("message", {
        user: "admin",
        text: `${user.name}, welcome to the room ${user.room}`,
      });
      // 같은 방에 있는 유저에게 보내는 서버측 전달
      socket.broadcast
        .to(user.room)
        .emit("message", { user: "admin", text: `${user.name}, has joined!` });

      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });

      callback();
      // const error = true;
      // if (error) {
      //   callback({ error: "error" });
      // }
    });
    // 유저가 생성한 이벤트에 대한 처리 `on`
    socket.on("sendMessage", (message, callback) => {
      // console.log(socket.id, "socket.id");
      console.log("socketid  " + socket.id);
      const user = getUser(socket.id); //undifined------------------------------------
      // 유저가 없는 경우 error 핸들링
      if (!user) {
        return res.status(401).json({
          error: "유저가 없습니다.",
          status: 401,
        });
      }
      console.log("socket.id : " + user.id);
      console.log("message    " + message);
      // console.log(user); //
      // 해당 방으로 메세지를
      io.to(user.room).emit("message", { user: user.name, text: message });

      // callback();
    });

    socket.on("disconnect", () => {
      const user = removeUser(socket.id);
      console.log("유저가 떠났습니다!");

      if (user) {
        io.to(user.room).emit("message", {
          user: "Admin",
          text: `${user.name} has left.`,
        });
        io.to(user.room).emit("roomData", {
          room: user.room,
          users: getUsersInRoom(user.room),
        });
      }
    });
  });
};

export default devate;
