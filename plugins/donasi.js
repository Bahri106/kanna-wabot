let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 6285853570297
│┝‷✧ *Dana:* 6285707645429
│┝‷✧ *Linkaja:* g ada :v
│┝‷✧ *Gopay:* ga ada:v
│┝‷✧ *Ovo:* ga ada:v
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6285853570297?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm