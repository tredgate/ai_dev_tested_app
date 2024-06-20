const express = require("express");
const app = express();
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors"); // Import CORS

const PORT = 3001;

app.use(cors()); // Enable CORS
app.use(express.json());
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
