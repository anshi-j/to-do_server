import mongoose from 'mongoose';


const Connection = () => {

    const MONGODB_URI = 'mongodb://todolist:todolist@ac-mhg0oep-shard-00-00.tex84lg.mongodb.net:27017,ac-mhg0oep-shard-00-01.tex84lg.mongodb.net:27017,ac-mhg0oep-shard-00-02.tex84lg.mongodb.net:27017/?ssl=true&replicaSet=atlas-1494rn-shard-0&authSource=admin&retryWrites=true&w=majority'

    mongoose.connect(MONGODB_URI,{useNewUrlParser: true});

    mongoose.connection.on('connected',() => {
        console.log('Database connected successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log(`Database disconnected`);
    })

    mongoose.connection.on('error', () => {
        console.log('error while connecting with the database', error.message);
    })

}

export default Connection;