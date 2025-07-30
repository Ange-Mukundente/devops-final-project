// This file is ONLY responsible for starting the server.
const app = require('./src/app'); // Import the app logic

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});