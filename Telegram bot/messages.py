def getMessages():
    return{
        'greeting' : 'Здравствуйте!',
        'help' : '/auth Авторизация пользователя\n/info Выводит информация для изучения\n/startTest Запускает тест',
        'info' : 'Для авторизации введите /auth\nДля подробной информации наберите /help',
        'auth' : 'Введите название организации и персональный код через запятую',
        'incorrectAuthData' : 'Данные введены некоректно, повторите попытку или напишите "Отмена"',
        'successAuth' : 'Поздравляем, {}, Вы успешно авторизованы!\n\nДля получения информации введите /info',
        'answerInfoShort' : '✏️ Введите ответ одним словом',
        'answerInfoLong' : '✏️ Введите ответ, ответ может быть произвольной длинны, будет проверен работодателем',
        'answerInfoTest' : '✏️ Ниже Вы можете выбрать один или несколько ответов, после выбора ответов нажмите "Отправить ответ"',
        'infoStartTest' : 'Для начала теста введите /startTest'
    }