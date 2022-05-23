const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRouter');

require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@19522133.i4x3b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );

        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter);

const PORT = 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
