import app from './app.mjs'
import sequelize from './config/connection.mjs'

const PORT = process.env.PORT || 8080;

const main = async () => {
    try {
        await sequelize.sync();
        console.log("DB connected");
        app.listen(PORT, ()=>{
            console.log(`Server running on port ${PORT}`);
            console.log(`http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("Unable to connect to the database:", error)
    }
}
main();
