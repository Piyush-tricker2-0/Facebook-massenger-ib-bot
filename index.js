const fetch = require('node-fetch');
const fs = require('fs');

const token = 'YOUR_FB_ACCESS_TOKEN';  // Place your FB Token here
const adminUID = 'YOUR_ADMIN_UID';     // Place your FB UID for the admin

// Function to send messages to a specific user
async function sendMessage(uid, message) {
    const url = `https://graph.facebook.com/v12.0/${uid}/messages`;
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
    
    const body = JSON.stringify({
        recipient: { id: uid },
        message: { text: message },
    });

    const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body,
    });

    const data = await response.json();
    console.log(data);
}

// Main loop to continuously send messages (or based on your logic)
async function messageLoop() {
    const users = ['USER_ID_1', 'USER_ID_2'];  // Replace with the target user IDs
    const message = 'Hello from the bot!';

    for (const user of users) {
        await sendMessage(user, message);
    }
}

// Run the bot
messageLoop();
