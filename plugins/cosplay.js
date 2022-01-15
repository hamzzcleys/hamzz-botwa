let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  let res = `https://hanzz-web.herokuapp.com/api/randomimage/cosplay`
  conn.sendButtonImg(m.chat, res, '_*Done Ya kak*_', 'Jangan lupa donasi','Get Again','.cosplay', m)
}
handler.help = ['cosplay'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(cosplay)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler