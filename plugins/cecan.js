let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
let res = await fetch('https://raw.githubusercontent.com/irwanx/db/master/random/cecan.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
conn.sendButtonImg(m.chat, cita, '_*Done! Ya kak*_', 'jangan lupa donasi','Get Again','.cecan', m) 
}

handler.tags = ['internet']
handler.help = ['cecan']
handler.command = /^(cecan)$/i
handler.limit = true

module.exports = handler