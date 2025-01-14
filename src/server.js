const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/lumina', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const developerSchema = new mongoose.Schema({
  name: String,
  level: String,
  coins: Number,
  contributions: [String],
});

const trainingSessionSchema = new mongoose.Schema({
  title: String,
  date: String,
});

const Developer = mongoose.model('Developer', developerSchema);
const TrainingSession = mongoose.model('TrainingSession', trainingSessionSchema);

app.get('/api/developers', async (req, res) => {
  const developers = await Developer.find();
  res.json(developers);
});

app.post('/api/developers', async (req, res) => {
  const developer = new Developer(req.body);
  await developer.save();
  res.json(developer);
});

app.put('/api/developers/:id', async (req, res) => {
  const developer = await Developer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(developer);
});

app.delete('/api/developers/:id', async (req, res) => {
  await Developer.findByIdAndDelete(req.params.id);
  res.json({ message: 'Developer deleted' });
});

app.get('/api/training-sessions', async (req, res) => {
  const trainingSessions = await TrainingSession.find();
  res.json(trainingSessions);
});

app.post('/api/training-sessions', async (req, res) => {
  const trainingSession = new TrainingSession(req.body);
  await trainingSession.save();
  res.json(trainingSession);
});

app.put('/api/training-sessions/:id', async (req, res) => {
  const trainingSession = await TrainingSession.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(trainingSession);
});

app.delete('/api/training-sessions/:id', async (req, res) => {
  await TrainingSession.findByIdAndDelete(req.params.id);
  res.json({ message: 'Training session deleted' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
