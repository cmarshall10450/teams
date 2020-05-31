// Establish a Socket.io connection
const socket = io();

// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
const client = feathers();
client.configure(feathers.socketio(socket));

// Use localStorage to store our login token
client.configure(feathers.authentication({
    storage: window.localStorage
}));

const login = async () => {
    try {
        // First try to log in with an existing JWT
        return await client.reAuthenticate();
    } catch (error) {
        // If that errors, log in with email/password
        // Here we would normally show a login page
        // to get the login information
        return await client.authenticate({
            strategy: 'jwt',
            accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE1OTA5MTg5NTksImV4cCI6MTU5MTAwNTM1OSwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiMSIsImp0aSI6IjE3YzZlZGM1LWExMTAtNDdkYS04ZTE3LTQ3ZWE2YWJkYTNhNSJ9.2W-PA95iK7WlDYph0JoOaypJWO3sqMeDwMeFtbV90U8'
        });
    }
};

const main = async () => {
    const auth = await login();

    console.log('User is authenticated', auth);
};

main();