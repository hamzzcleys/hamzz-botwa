let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
let res = await fetch('https://raw.githubusercontent.com/hamzzBot/random/main/hinata.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
conn.sendButtonImg(m.chat, cita, '_*Done! Ya kak*_', 'Jangan lupa donasi','Get Again','.hinata', m)
}

handler.tags = ['anime']
handler.help = ['hinata']
handler.command = /^(hinata)$/i
handler.limit = true

module.exports = handler