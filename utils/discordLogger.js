const fetch = require("node-fetch");


const WEBHOOK = process.env.DISCORD_WEBHOOK_URL;


async function logDiscord(title, description, color = 0x5865f2) {
if (!WEBHOOK) return;


try {
await fetch(WEBHOOK, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
embeds: [
{
title,
description,
color,
timestamp: new Date()
}
]
})
});
} catch (err) {
console.error("Webhook failed", err.message);
}
}


module.exports = { logDiscord };