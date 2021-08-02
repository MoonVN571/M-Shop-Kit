
/**
 *              M-Shop-Kit
 *  Yêu cầu giữ credit về source code.
 * 
 * 
 * Project: https://github.com/MoonVN571/M-Shop-Kit
 */
const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!";

client.login("<YOUR TOKEN>");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)

  client.user.setPresence({
  status: "idle",
  game: {
    name: "M Shop Kit",
    type: "WATCHING"
  }
  });
});

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
      return
    }

    var getUser = receivedMessage.author.toString() + ' ';

     const cancelexecute = new Discord.MessageEmbed()
     .setTitle(`Warning`)
     .setDescription(`Bạn không thể thực hiện được câu lệnh này.`)
     .setColor('#336EFF');

if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("ADMINISTRATOR"))
	       return receivedMessage.channel.send(cancelexecute)
	
     if (receivedMessage.content === `${prefix}infor`) {
		   const test3 = new Discord.MessageEmbed()
		   .setTitle(`SHOP KIT`)
       .setDescription('\u200b')
       .setImage(`https://media.discordapp.net/attachments/759408961811251260/770144396486115338/2020-10-26_11.38.03.png?width=909&height=481`)

	   .addFields({ name: `Thanh Toán`, value: `Hãy liên hệ với Moonz#0001 để thanh toán qua thẻ điện thoại.`, inline: false})
       .addFields({ name: '\u200b', value: '\u200b' })
       .addFields({ name: `Hình Thức Nhận Hàng`, value: `Ra spawn để nhận hàng hoặc nhận hàng ở toạ độ nào đó (ưu tiên spawn).`, inline: false})
       .addFields({ name: '\u200b', value: '\u200b' })
       .addFields({ name: `Đặt Hàng`, value: `Hãy liên hệ với chủ shop. (chưa nhận)`, inline: false})
       .addFields({ name: '\u200b', value: '\u200b' })
       .addFields({ name: `Quyền hạn`, value: `Nếu mua nhiều bạn sẽ nhận được một cấp bậc riêng biệt.`, inline: false})
       .addFields({ name: '\u200b', value: '\u200b' })
       .addFields({ name: `\u200b`, value: `Đã cập nhật 02/01/2021.`, inline: false})


		   .setColor('#336EFF');

		     receivedMessage.channel.send(test3)
		     receivedMessage.delete();
	}

    // infor
    if (receivedMessage.content === `${prefix}update`) {


      receivedMessage.channel.send("> Đã cập nhật lại shop ngày 17/11.")
      receivedMessage.delete();

    }
    if (receivedMessage.content === `${prefix}chat`) {
      const test3 = new Discord.MessageEmbed()
      .setTitle(`Information`)
      .setDescription(`Kênh chat tổng của discord.`)

      //.setImage("http://i.imgur.com/yVpymuV.png")


      .setColor('#336EFF');

      receivedMessage.channel.send(test3)
      receivedMessage.delete();

    }

      if (receivedMessage.content === `${prefix}rate`) {
        const test3 = new Discord.MessageEmbed()
        .setTitle(`Information`)
        .setDescription(`Đánh giá sau khi mua hàng, khi mua bạn có thể đánh giá.`)

        .addFields({ name: `nhận Role Riêng`, value: `Nếu mua nhiều bạn sẽ nhận được một role đặc biệt.`, inline: false})
        //.setImage("http://i.imgur.com/yVpymuV.png")


        .setColor('#336EFF');

        receivedMessage.channel.send(test3)
        receivedMessage.delete();

      }

      if (receivedMessage.content === `${prefix}exam`) {
	    const kit1 = new Discord.MessageEmbed()
	    // Tên và thông tin
	    .setTitle(``)
	    .setDescription(``)
	    // Ảnh
	    .setImage(``)
	    // Bỏ hàng
	    .addFields({ name: '\u200b', value: '\u200b' })
	    // Giá tiền
	    .addFields({ name: `Giá: .000 VNĐ`, value: `\u200b`, inline: false})
	    // Màu embed
	    .setColor('#336EFF');

	    receivedMessage.channel.send(kit1)
	    receivedMessage.delete();

  	}
});
