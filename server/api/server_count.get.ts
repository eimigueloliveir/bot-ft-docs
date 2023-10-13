
export default defineEventHandler(async (event) => {

    //event.respondWith(new Response(JSON.stringify({...process.env})));
    let bot: Bot = await $fetch('https://discord.com/api/applications/@me',
    {
        headers: {
            'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`
        }
    });

    event.respondWith(new Response(JSON.stringify({ approximate_guild_count: bot.approximate_guild_count})));
});

type Bot = {
    approximate_guild_count: number
}