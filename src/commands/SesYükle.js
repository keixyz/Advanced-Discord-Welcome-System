module.exports = {
  conf: {
    aliases: ['sesyükle'],
    name: "ses-yükle",
    usage: 'ses-yükle [mod] [dosya]',
    description: "Bota ses eklersiniz."
  },
  
  run: async ({client, msg, args, cfg, Database, guild, prefix, author, fs}) => {    
  if (!author.hasPermission(8)) return
  const data = await Database.findOne({ guildID: guild});
  let oynatılan = data && data.SesMod ? data.SesMod : "./src/sesler/hosgeldin.mp3"
  let oynatılanyetkili = data && data.YetkiliSesMod ? data.YetkiliSesMod : "./src/sesler/yetkili.mp3"
  let hosgeldin = data && data.hosgeldin ? data.hosgeldin : "./src/sesler/hosgeldin.mp3"
  let taglıalım = data && data.taglialim ? data.taglialim : "./src/sesler/taglialim.mp3"
  let konser = data && data.konser ? data.konser : "./src/sesler/konser.mp3"
  let turnuva = data && data.turnuva ? data.turnuva : "./src/sesler/turnuva.mp3"
  let toplantı = data && data.toplanti ? data.toplanti : "./src/sesler/toplanti.mp3"
  let cekilis = data && data.cekilis ? data.cekilis : "./src/sesler/cekilis.mp3"
  let yetkili = data && data.yetkili ? data.yetkili : "./src/sesler/yetkili.mp3"
  let kategori = args[0]
  let denetlenecek = ["taglialim","hosgeldin","konser","turnuva","toplanti","cekilis","taglıalım","hoşgeldin","toplantı","çekiliş","TaglıAlım","Hoşgeldin","Konser","Turnuva","Çekiliş","Toplantı","yetkili","Yetkili"]
  if(!denetlenecek.some(x => kategori === x)) return msg.reply(`\`hosgeldin\`, \`taglialim\`, \`konser\`, \`turnuva\`, \`toplanti\`, \`cekilis\`, \`yetkili\` seçeneklerinden birini girmelisin.`)
  if(kategori === "taglialim"||kategori === "TaglıAlım"||kategori === "taglıalım"){ 
  if(taglıalım === "./src/özelsesler/taglialim.mp3") return client.timemessage(client.normalEmbed(`Zaten daha önceden taglı alım ses dosyası yüklemişsiniz.`, msg), msg.channel.id, 5000)
  if(msg.attachments.first()){
  client.download(msg.attachments.first().url, msg, "./src/özelsesler/taglialim.mp3");
  if("./src/sesler/taglialim.mp3" === oynatılan) return await Database.findOneAndUpdate({ guildID: guild}, {SesMod: "./src/özelsesler/taglialim.mp3"}, { upsert: true })
  await Database.findOneAndUpdate({ guildID: guild}, {taglialim: "./src/özelsesler/taglialim.mp3"}, { upsert: true })
  }else{msg.channel.send('Formata uygun şekilde giriniz.')}}
  if(kategori === "hosgeldin"||kategori === "hoşgeldin"||kategori === "Hoşgeldin"){ 
  if(hosgeldin === "./src/özelsesler/hosgeldin.mp3") return client.timemessage(client.normalEmbed(`Zaten daha önceden hoş geldin ses dosyası yüklemişsiniz.`, msg), msg.channel.id, 5000)
  if(msg.attachments.first()){
  client.download(msg.attachments.first().url, msg, "./src/özelsesler/hosgeldin.mp3");
  if("./src/sesler/hosgeldin.mp3" === oynatılan) return await Database.findOneAndUpdate({ guildID: guild}, {SesMod: "./src/özelsesler/hosgeldin.mp3"}, { upsert: true })
  await Database.findOneAndUpdate({ guildID: guild}, {hosgeldin: "./src/özelsesler/hosgeldin.mp3"}, { upsert: true })
  }else{msg.channel.send('Formata uygun şekilde giriniz.')}}
  if(kategori === "konser"||kategori === "Konser"){ 
  if(konser === "./src/özelsesler/konser.mp3") return client.timemessage(client.normalEmbed(`Zaten daha önceden konser ses dosyası yüklemişsiniz.`, msg), msg.channel.id, 5000)
  if(msg.attachments.first()){
  client.download(msg.attachments.first().url, msg, "./src/özelsesler/konser.mp3");
  if("./src/sesler/konser.mp3" === oynatılan) return await Database.findOneAndUpdate({ guildID: guild}, {SesMod: "./src/özelsesler/konser.mp3"}, { upsert: true })
  await Database.findOneAndUpdate({ guildID: guild}, {konser: "./src/özelsesler/konser.mp3"}, { upsert: true })
  }else{msg.channel.send('Formata uygun şekilde giriniz.')}}
  if(kategori === "turnuva"||kategori === "Turnuva"){ 
  if(turnuva=== "./src/özelsesler/turnuva.mp3") return client.timemessage(client.normalEmbed(`Zaten daha önceden turnuva ses dosyası yüklemişsiniz.`, msg), msg.channel.id, 5000)
  if(msg.attachments.first()){
  client.download(msg.attachments.first().url, msg, "./src/özelsesler/turnuva.mp3");
  if("./src/sesler/turnuva.mp3" === oynatılan) return await Database.findOneAndUpdate({ guildID: guild}, {SesMod: "./src/özelsesler/turnuva.mp3"}, { upsert: true })
  await Database.findOneAndUpdate({ guildID: guild}, {turnuva: "./src/özelsesler/turnuva.mp3"}, { upsert: true })
  }else{msg.channel.send('Formata uygun şekilde giriniz.')}}
  if(kategori === "yetkili"||kategori === "Yetkili"){ 
  if(yetkili === "./src/özelsesler/yetkili.mp3") return client.timemessage(client.normalEmbed(`Zaten daha önceden yetkili ses dosyası yüklemişsiniz.`, msg), msg.channel.id, 5000)
  if(msg.attachments.first()){
  client.download(msg.attachments.first().url, msg, "./src/özelsesler/yetkili.mp3");
  await Database.findOneAndUpdate({ guildID: guild}, {YetkiliSesMod: "./src/özelsesler/yetkili.mp3"}, { upsert: true })
  await Database.findOneAndUpdate({ guildID: guild}, {yetkili: "./src/özelsesler/yetkili.mp3"}, { upsert: true })
  }else{msg.channel.send('Formata uygun şekilde giriniz.')}}
  if(kategori === "toplanti"||kategori === "toplantı"||kategori === "Toplantı"){ 
  if(toplantı === "./src/özelsesler/toplanti.mp3") return client.timemessage(client.normalEmbed(`Zaten daha önceden toplantı ses dosyası yüklemişsiniz.`, msg), msg.channel.id, 5000)
  if(msg.attachments.first()){
  client.download(msg.attachments.first().url, msg, "./src/özelsesler/toplanti.mp3");
  if("./src/sesler/toplanti.mp3" === oynatılan) return await Database.findOneAndUpdate({ guildID: guild}, {SesMod: "./src/özelsesler/toplanti.mp3"}, { upsert: true })
  await Database.findOneAndUpdate({ guildID: guild}, {toplanti: "./src/özelsesler/toplanti.mp3"}, { upsert: true })
  }else{msg.channel.send('Formata uygun şekilde giriniz.')}}
  if(kategori === "cekilis"||kategori === "çekiliş"||kategori === "Çekiliş"){ 
  if(cekilis === "./src/özelsesler/cekilis.mp3") return client.timemessage(client.normalEmbed(`Zaten daha önceden çekiliş ses dosyası yüklemişsiniz.`, msg), msg.channel.id, 5000)
  if(msg.attachments.first()){
  client.download(msg.attachments.first().url, msg, "./src/özelsesler/cekilis.mp3");
  if("./src/sesler/cekilis.mp3" === oynatılan) return await Database.findOneAndUpdate({ guildID: guild}, {SesMod: "./src/özelsesler/cekilis.mp3"}, { upsert: true })
  await Database.findOneAndUpdate({ guildID: guild}, {cekilis: "./src/özelsesler/cekilis.mp3"}, { upsert: true })
  }else{msg.channel.send('Formata uygun şekilde giriniz.')}}}}