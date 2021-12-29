import "dotenv/config";
import server from "./server.js";

const PORT = process.env.PORT;

const handleListening = () => {
  console.log(`✅ Server listenting on port http://localhost:${PORT}`);
};

server.listen(PORT, handleListening);
