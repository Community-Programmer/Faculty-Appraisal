
import app from './src/app';
import connectDB from './src/config/db';


const startServer = async() => {
    const port = process.env.PORT || 5050;

     await connectDB()
    
    app.listen(port, () => {
      console.log(`Listening on port: ${port}`);
    });
};

startServer();