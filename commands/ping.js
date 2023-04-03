module.exports = {
name:'ping',
description:'ping pong',
async execute(message,client,command,args){
	message.channel.send("ping !!!")
}
}