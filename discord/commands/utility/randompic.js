const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('randompic')
        .setDescription('Sends random Twokinds picture.'),
    async execute(interaction) {
        const imgLink = `https://twokinds.gallery/download/art/${getRandomInt(1, 5835)}`
        const descriptionText = `[Open Image](${imgLink})`

        const embed = new EmbedBuilder()
            .setTitle('Random Twokinds Picture')
            .setDescription(descriptionText)
            .setImage(imgLink)
            .setColor('#FFA500');

        await interaction.reply({ embeds: [embed] });
    },
}