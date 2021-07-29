module.exports = (client, cfg, moment, request, fs) => {

   client.Renks = new Array("#6959cd","#1f0524", "#0b0067", "#4a0038", "#07052a", "#FFDF00", "#00FFFF", "#0091CC", "#0047AB", "#384B77", "#ffffff", "#000000", "#04031a", "#f9ffba");

  client.download = (url, msg, category) => {
  client.message(client.normalEmbed(`\`Özel Sesler\` kategorisi için başarıyla ${url} ses dosyası yüklendi! ✅`, msg), msg.channel.id)
  request.get(url).on('error', console.error).pipe(fs.createWriteStream(category));}

  client.undownload = (msg, category, tür) => {
  client.message(client.normalEmbed(`\`Özel Sesler\` kategorisi için özel ayarlanan \`${tür}\` ses dosyası silindi! ✅`, msg), msg.channel.id)
  fs.unlink(category, function (err) {{};});
  fs.appendFile(category, ``, function (err) {{};})
  }
}