import telebot
import socket
from connectSettings import getConnectSettings
from messages import getMessages
from telebot import apihelper
from random import randint

connectSettings = getConnectSettings()
telebot.apihelper.proxy = {
  'https' : 'socks5h://{}:{}@{}:{}'.format(
    connectSettings[ 'proxy' ][ 'login' ],
    connectSettings[ 'proxy' ][ 'password' ],
    connectSettings[ 'proxy' ][ 'ip' ],
    connectSettings[ 'proxy' ][ 'port' ]
  )
}
bot = telebot.TeleBot( connectSettings[ 'token' ] )
messages = getMessages()

@bot.message_handler( commands = [ 'start' ] )
def start( message ):
  keyboard = telebot.types.ReplyKeyboardMarkup( resize_keyboard=True, one_time_keyboard=True )
  keyboard.row( '/help' )
  
  bot.send_message( message.chat.id, messages[ 'greeting' ] )
  bot.send_message( message.chat.id, messages[ 'help' ] )
  bot.send_message( message.chat.id, messages[ 'info' ], reply_markup=keyboard )


@bot.message_handler( commands = [ 'help' ] )
def help( message ):
  bot.send_message( message.chat.id, messages[ 'help' ] )

@bot.message_handler( commands = [ 'test' ] )
def test( message ):
  keyboard = telebot.types.ReplyKeyboardMarkup( resize_keyboard=True, one_time_keyboard=True )
  keyboard.row( 'Ответ 1', 'Ответ 2' )
  keyboard.row( 'Ответ 3', 'Ответ 4' )

  bot.send_message( message.chat.id, 'Вопрос', reply_markup=keyboard )

@bot.message_handler( commands = [ 'block' ] )
def block( message ):
  bot.send_message( message.chat.id, 'Тут будет информации' )

@bot.message_handler( content_types = [ 'text' ] )
def default( message ):
  bot.send_message( message.chat.id, 'Я Вас не понимаю(' )

print( 'Try to run bot with proxy {}:{}'.format(
    connectSettings[ 'proxy' ][ 'ip' ],
    connectSettings[ 'proxy' ][ 'port' ] ) )
bot.polling()
