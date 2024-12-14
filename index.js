// №1
const btnElement = document.querySelector('#btn');
const textElement = document.querySelector('#text');
btnElement.textContent = 'Hello world!';

// №2
const imageElement = document.querySelector('img')
imageElement.src = 'https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288872.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid'

// №3
const linkElement = document.querySelector('a')
const secImegeElment = document.querySelector('[src="https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid"]')
linkElment.href = 'https://www.google.com/search?sca_esv=24731a508b288d28&sxsrf=ADLYWIIinelhsDcp0uX71VCKTz4mT2OxtA:1725645777604&q=%D0%97%D0%B0%D0%BB%D1%96%D0%B7%D0%BD%D0%B0+%D0%BB%D1%8E%D0%B4%D0%B8%D0%BD%D0%B0&si=ACC90nw_jPf0U9OHQLTsJBfNBfuzWP04Qb7uUj5bJ7NOdlcOVHcT-i427YSTMIeXyc8KhXDvE03sswnHIQ3VgydWlfoWrN89gL8t-UnmGtu8NbNfzJT129ZWgYQfGonB0-DXVgN0YfWdbdWr2QLTinoUJwsr0vaJT3hDAXz2--R_d3K2NtlJ0xk84YzRQitfcCYGN-RlZbPrS4ZC2hipDyTsrxScGmRTFtNiF8i6Mj5N3x3lE1tPFxYVoOXvH5YRIk7Sowkdbjh4_BKBAvUitadpQ9OSOCTHaQ%3D%3D&sa=X&ved=2ahUKEwjD_dO8866IAxWBSFUIHXmLFgQQ3LoBegQIDRAB&biw=1440&bih=778&dpr=2'
secImegeElment.alt = 'cotyk';

// №4
const listElement = document.querySelector('ul');
const forstListElement = listElement.firstElementChild;
forstListElement.textContent = 'hello world!';