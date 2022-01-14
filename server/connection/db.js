import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {
        // const url = 'keshav:keshav321'

        const URL = `mongodb+srv://${username}:${password}@clone-inshort.dglwk.mongodb.net/CLONE-INSHORT?retryWrites=true&w=majority`;

        await mongoose.connect(URL, { useNewUrlParser: true })

        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;