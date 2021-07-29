const { Schema, model } = require("mongoose");

const schema = new Schema({
  guildID: { type: String, default: "" },
  SesMod: { type: String, default: "" },
  YetkiliSesMod: { type: String, default: "" },
  taglialim: { type: String, default: "" },
  hosgeldin: { type: String, default: "" },
  yetkili: { type: String, default: "" },
  konser: { type: String, default: "" },
  toplanti: { type: String, default: "" },
  turnuva: { type: String, default: "" },
  cekilis: { type: String, default: "" },
});


module.exports = model("sesmode", schema);
