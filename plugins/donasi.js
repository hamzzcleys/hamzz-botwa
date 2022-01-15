let handler = async m => m.reply(`
*DONATE*
 Pulsa : 085826114932
 Dana : 085850961679
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler