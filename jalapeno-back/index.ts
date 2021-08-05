import express from 'express';
import { DataRouter } from './routes/data'
import { SensorRouter } from './routes/sensors'

// rest of the code remains same
const app = express()
const PORT = 8001

app.use('/data', DataRouter)
app.use('/', SensorRouter)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});