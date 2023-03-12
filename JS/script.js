/*1. Принять от пользователя имена людей для набора в команду.Имена принять и сохранить в новом массиве.
Количество имён должно соответсвовать количеству должностей.
Массив с должностями - ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'].

2. Создать объект team в котором будут храниться новые объекты - сотрудники с параметрами name и position, 

данные для этих свойств добавляем из массивов.

3. Добавить сотрудникам зарплаты(свойство salary) при помощи метода Math.random(), который будет выдавать произвольное число в промежутке между N1 и N2 исходя из принципа:
если в должности есть слово "junior" сумма будет от 500 до 1000;
если в должности есть слово "middle" сумма будет от 1500 до 2000;
если в должности есть слово "senior" сумма будет от 2500 до 3000;
для всех остальных - от 4000 до 4500; Для определения того есть ли слово в имени должности используйте метод str.indexOf('часть строки для поиска').Например:
var name = 'Junior developer';
name.indexOf('Junior');
//в данном случае вернет 0, если такая строка отсутсвует вернет -1. 
//Регистр имеет значение, по этому строка "junior" вернет -1

4. Добавить каждому сотруднику метод tellAboutYourSelf(), который будет сообщать информацию о пользователе(например "Меня зовут John и я - Project manager. Я зарабатываю 4863$.").

5. Добавить объекту team метод showTeam(), который будет выводить информацию о всех сотрудниках в консоль в формате:
 "John - Project manager. Зарплата - 4863$." *
    Для удобства создайте по порядку все необходимые функции и в конце сделать вызов этих функций в логическом порядке.Например:

getNames();
createTeam();
setSalary();
создание цикла для установки метода tellAboutYourSelf();
создание team.showTeam = function () {... };
вызов метода showTeam();*/




const userPosition = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];
function getNames() {
    const userNames = [];

    for (let i = 0; i < userPosition.length; i++) {
        const userName = prompt("Введіть Ваше ім'я", "Олег");
        userNames.push(userName);
    }
    return userNames;
}

const team = {};
function createTeam(arr) {
    for (let i = 0; i < userPosition.length; i++) {
        team[`user${i + 1}`] = {
            name: arr[i],
            position: userPosition[i],
        }
    }
}

function setSalary() {
    for (let key in team) {
        if (team[key].position.includes("Junior")) {
            team[key]["salary"] = randomInt(500, 1000);
        } else if (team[key].position.includes("Middle")) {
            team[key]["salary"] = randomInt(1500, 2000);
        } else if (team[key].position.includes("Senior")) {
            team[key]["salary"] = randomInt(2500, 3000);
        } else {
            team[key]["salary"] = randomInt(4000, 4500);
        }
    }

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}


createTeam(getNames());
setSalary();


for (let key in team) {
    team[key].tellAboutYourSelf = function () {
        console.log(`Мене звати ${this.name} і я - ${this.position}. Я заробляю ${this['salary']}$. `)
    }
}
for (let key in team) {
    team[key].tellAboutYourSelf();
}

team.showTeam = function () {
    for (let key in team) {
        if (key.includes("user")) {
            console.log(`${team[key].name} - ${team[key].position}. Зарплата - ${team[key]['salary']}$.`);
        }
    }
};

team.showTeam();


