module.exports = {
  conf: {
    aliases: ['sesayar'],
    name: "ses-ayar",
    usage: 'ses-ayar',
    description: "Botun ses ayarları hakkında bilgi alırsınız."
  },
  
  run: async ({client, msg, args, cfg, Database, guild, prefix, author}) => {
  if (!author.hasPermission(8)) return
  const data = await Database.findOne({ guildID: guild});
  let hosgeldin = data && data.hosgeldin ? data.hosgeldin : "./src/sesler/hosgeldin.mp3"
  let taglıalım = data && data.taglialim ? data.taglialim : "./src/sesler/taglialim.mp3"
  let konser = data && data.konser ? data.konser : "./src/sesler/konser.mp3"
  let turnuva = data && data.turnuva ? data.turnuva : "./src/sesler/turnuva.mp3"
  let toplantı = data && data.toplanti ? data.toplanti : "./src/sesler/toplanti.mp3"
  let cekilis = data && data.cekilis ? data.cekilis : "./src/sesler/cekilis.mp3"
  let yetkili = data && data.yetkili ? data.yetkili : "./src/sesler/yetkili.mp3"
  let oynatılan = data && data.SesMod ? data.SesMod : "./src/sesler/hosgeldin.mp3"
  client.message(client.normalEmbed("Hey <@!"+author+">, işte ses sisteminin mevcut ayarları;\n\n```[HOŞ GELDİN] => "+hosgeldin+"\n[TAGLI ALIM] => "+taglıalım+"\n[KONSER] => "+konser+"\n[TURNUVA] => "+turnuva+"\n[TOPLANTI] => "+toplantı+"\n[ÇEKİLİŞ] => "+cekilis+"\n[YETKİLİ] => "+yetkili+"```\n⏯ **Şu anda oynatılan ses dosyası:** "+oynatılan+"\n\n*Ses modunu ayarlamak için \`"+prefix+"ses-mod\` komutunu kullanabilirsin.\n Sistemi üzerindeki ses dosyalarını \`"+prefix+"ses-yükle\` ve \`"+prefix+"ses-sil\` komutlarıyla ayarlayabilirsin.*", msg), msg.channel.id, 5000)}}