let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), '_*Done! Ya kak*_', 'jangan lupa donasi', 'Get Again', `${usedPrefix + command}`, m,)
}
handler.help = ['neko']
handler.tags = ['anime']
handler.command = /^(neko)$/i
handler.limit = true

module.exports = handler