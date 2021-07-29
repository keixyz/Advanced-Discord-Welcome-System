module.exports = {
  conf: {
    aliases: ['sesmod','sesmode','ses-mode'],
    name: "ses-mod",
    usage: 'ses-mod [mod]',
    description: "Botlarda çalan sesi değiştirirsiniz."
  },
  
  run: async ({client, msg, args, cfg, Database, guild, prefix, author}) => {
  if (!author.hasPermission(8)) return
  const data = await Database.findOne({ guildID: guild});
  let SesMod = args[0]
  let hosgeldin = data && data.hosgeldin ? data.hosgeldin : "./src/sesler/hosgeldin.mp3"
  let taglialim = data && data.taglialim ? data.taglialim : "./src/sesler/taglialim.mp3"
  let konser = data && data.konser ? data.konser : "./src/sesler/konser.mp3"
  let turnuva = data && data.turnuva ? data.turnuva : "./src/sesler/turnuva.mp3"
  let toplantı = data && data.toplanti ? data.toplanti : "./src/sesler/toplanti.mp3"
  let cekilis = data && data.cekilis ? data.cekilis : "./src/sesler/cekilis.mp3"
  let yetkili = data && data.yetkili ? data.yetkili : "./src/sesler/yetkili.mp3"
  let denetlenecek = ["taglialim","hosgeldin","konser","turnuva","toplanti","cekilis","taglıalım","hoşgeldin","toplantı","çekiliş","TaglıAlım","Hoşgeldin","Konser","Turnuva","Çekiliş","Toplantı"]
  if(!denetlenecek.some(x => SesMod === x)) return msg.reply(`\`hosgeldin\`, \`taglialim\`, \`konser\`, \`turnuva\`, \`toplanti\`, \`cekilis\` seçeneklerinden birini girmelisin.`)
  if(SesMod === "taglialim"||SesMod === "TaglıAlım"||SesMod === "taglıalım"){ 
  if(data && data.SesMod === taglialim) return client.timemessage(client.normalEmbed(`Zaten ses modu \`taglı alım\` olarak ayarlı!`, msg), msg.channel.id, 5000) 
  client.message(client.normalEmbed(`**Ses modu** başarıyla \`taglialim\` olarak ayarlandı. ✅`, msg), msg.channel.id)
  await Database.findOneAndUpdate({ guildID: guild}, {SesMod: taglialim}, { upsert: true })}
  if(SesMod === "hosgeldin"||SesMod === "hoşgeldin"||SesMod === "Hoşgeldin"){ 
  if(data && data.SesMod === hosgeldin) return client.timemessage(client.normalEmbed(`Zaten ses modu \`hoş geldin\` olarak ayarlı!`, msg), msg.channel.id, 5000) 
  client.message(client.normalEmbed(`**Ses modu** başarıyla \`hosgeldin\` olarak ayarlandı. ✅`, msg), msg.channel.id)
  await Database.findOneAndUpdate({ guildID: guild}, {SesMod: hosgeldin}, { upsert: true })}
  if(SesMod === "konser"||SesMod === "Konser"){ 
  if(data && data.SesMod === konser) return client.timemessage(client.normalEmbed(`Zaten ses modu \`konser\` olarak ayarlı!`, msg), msg.channel.id, 5000) 
  client.message(client.normalEmbed(`**Ses modu** başarıyla \`konser\` olarak ayarlandı. ✅`, msg), msg.channel.id)
  await Database.findOneAndUpdate({ guildID: guild}, {SesMod: konser}, { upsert: true })}
  if(SesMod === "turnuva"||SesMod === "Turnuva"){ 
  if(data && data.SesMod === turnuva) return client.timemessage(client.normalEmbed(`Zaten ses modu \`turnuva\` olarak ayarlı!`, msg), msg.channel.id, 5000) 
  client.message(client.normalEmbed(`**Ses modu** başarıyla \`turnuva\` olarak ayarlandı. ✅`, msg), msg.channel.id)
  await Database.findOneAndUpdate({ guildID: guild}, {SesMod: turnuva}, { upsert: true })}
  if(SesMod === "toplanti"||SesMod === "toplantı"||SesMod === "Toplantı"){ 
  if(data && data.SesMod === toplantı) return client.timemessage(client.normalEmbed(`Zaten ses modu \`toplantı\` olarak ayarlı!`, msg), msg.channel.id, 5000) 
  client.message(client.normalEmbed(`**Ses modu** başarıyla \`toplanti\` olarak ayarlandı. ✅`, msg), msg.channel.id)
  await Database.findOneAndUpdate({ guildID: guild}, {SesMod: toplantı}, { upsert: true })}
  if(SesMod === "cekilis"||SesMod === "çekiliş"||SesMod === "Çekiliş"){ 

  if(data && data.SesMod === cekilis) return client.timemessage(client.normalEmbed(`Zaten ses modu \`çekiliş\` olarak ayarlı!`, msg), msg.channel.id, 5000) 
  client.message(client.normalEmbed(`**Ses modu** başarıyla \`cekilis\` olarak ayarlandı. ✅`, msg), msg.channel.id)
  await Database.findOneAndUpdate({ guildID: guild}, {SesMod: cekilis}, { upsert: true })}}}