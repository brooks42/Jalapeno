import express from 'express';
import { SensorRouter } from './routes/sensors'

// rest of the code remains same
const app = express()
const PORT = 8000

app.use('/', SensorRouter)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});