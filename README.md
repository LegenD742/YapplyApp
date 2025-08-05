# 💬 YapplyApp

A real-time chat application built with **React**, **Node.js**, **Express**, **MongoDB** and **Socket.IO**. Designed for seamless real time messaging with friends and family with a clean and dynamic UI.

---

## 🚀 Features

- 🔁 Real-time messaging (Socket.IO)
- 💅 Styled-components for UI
- 🔒 User authentication
- 📦 Separate frontend and backend environments

---

## 🛠️ Getting Started (How to run it in your local machine )

### 1. Setting up 
First Clone the Repo :
```bash
git clone https://github.com/LegenD742/YapplyApp.git
cd YapplyApp
```
-you need to create a `.env` file in both the folders `public` and `server` <br>
-you must have MongoDB installed in your system. Go on to create a database named `chat` inside via compass.<br>
-In the `.env` file of the server folder go on and write <br>
`PORT = 5000`<br>
`MONGO_URL="mongodb://localhost:27017/chat" ` <br>NOTE: The connection string might not be 27017 for you (but in most cases it will be, check your connection string from mongo compass), anyways if it's something else, write that in place of 27017 here.<br>
-For the `.env` file in the public folder, just paste `REACT_APP_LOCALHOST_KEY="chat-app-current-user" `<br>

### 2. Install dependencies

```bash
cd public
npm install
```
(wait for the dependencies to install)

```bash
cd ..
cd server
npm install
```
(Done ! just fire things up now !! ) <br>
* Open MongoDB compass and connect to the chat database <br>
* In your terminal
  ```bash
  npm start
  ```
* Open a new terminal from the `+` icon on the right of your current terminal.
  ```bash
  cd YapplyApp\public
  npm start
  ```
* That's it! happy hacking !
  

