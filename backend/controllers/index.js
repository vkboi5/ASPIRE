const { registerUser, authUser, allUsers } = require("./userControllers");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("./chatControllers");
const { sendMessage, allMessages } = require("./messageControllers");
const { promptMessage } = require("./promptControllers");
const { generateImage } = require("./imageControllers");
const { registerStartup,getStartupByStartupName } = require("./startupController");
module.exports = {
  registerUser,
  authUser,
  allUsers,
  registerStartup,
  getStartupByStartupName,
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,

  sendMessage,
  allMessages,

  generateImage,
  
  promptMessage,
};
