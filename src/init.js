import "dotenv/config";
import app from "./server";

const PORT = process.env.PORT;

const handleListening = () => {
  console.log(`✅ Server listenting on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
