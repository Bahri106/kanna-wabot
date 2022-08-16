let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
  
let handler = async (m, { conn }) => {
let caption = `*HALO Bang*\n*Saya SaifulBotz*\n*Pilih Menu Di Bawah Yaa Bree*\n*Spam = Banned*\n*Telp = Blok*\n\n*Join Group WhatsApp*\nhttps://chat.whatsapp.com/ECeHsVtDpNF7NgzDLMAzcM\n\n*Untuk Melihat Menu Bot Ketik .menu Atau .SaifulBotz*`.trim()
conn.send3Button(m.chat, caption, `Powered By Baileys\nCreated SaifulBotz By SAIFUL-BOT\n`.trim(), '🧾Menu', '.menu', '🍭Owner SaifulBotz', '.owner', '📖Info Bot', '.infobot', m)
}

handler.command = /^(hel)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = false

handler.fail = null
handler.exp = 20

module.exports = handler