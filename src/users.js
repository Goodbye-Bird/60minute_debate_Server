const users = [];

export const addUser = ({ id, name, room }) => {
  // JavaScript Mastery = javascriptmastery
  if (!name || !room) {
    return;
  }
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  if (existingUser) {
    console.log("같은 이름이 있습니다");
    return { error: "Username is taken" };
  }

  const user = { id, name, room };

  users.push(user);
  return { user };
};

export const removeUser = (id) => {
  const index = users.findIndex((user) => {
    user.id === id;
  });

  return users.splice(index);
};

export const getUser = (id) => {
  const filtereduser = users.filter((user) => {
    return user.id == id;
  });
  if (filtereduser.length <= 0) {
    //error handling
  }
  return filtereduser[0];
};

export const getUsersInRoom = (room) => {
  return users.filter((user) => {
    user.room === room;
  });
};

export default { addUser, removeUser, getUser, getUsersInRoom };
