let peoples = [
    { name: 'Сохиб Курбон', salary: 800, increase: false, rise: true, id: 1 },
    { name: 'Шахзод Хамидов', salary: 3000, increase: true, rise: false, id: 2 },
    { name: 'Далер Шарифкулов', salary: 5000, increase: false, rise: false, id: 3 },
    { name: 'Бекзод Хамидов', salary: 5000, increase: false, rise: false, id: 4 },
    { name: 'Алишер Мардиев', salary: 5000, increase: false, rise: false, id: 5 },
    { name: 'Мухаммад', salary: 5000, increase: false, rise: false, id: 6 },
    { name: 'Сабина Яковлева', salary: 5000, increase: false, rise: false, id: 7 },
    { name: 'Руфина', salary: 5000, increase: false, rise: false, id: 8 },
    { name: 'Хуршида', salary: 5000, increase: false, rise: false, id: 9 },
    { name: 'Дилшод Муртазоев', salary: 5000, increase: false, rise: false, id: 10 },
    { name: 'Ориф', salary: 5000, increase: false, rise: false, id: 11 },
    { name: 'Улугбек', salary: 5000, increase: false, rise: false, id: 12 },
    { name: 'Влад Цой', salary: 5000, increase: false, rise: false, id: 13 },
    { name: 'Алина', salary: 5000, increase: false, rise: false, id: 14 },
]

let people_inf = document.querySelector('.info-people')
let search = document.querySelector("#search");
let inps = document.querySelectorAll('#create')
let btn = document.querySelector('#btn2')
let goodJob = document.querySelector('#povishenie')
let money = document.querySelector('#money')
let h4 = document.querySelector('.VIP')

let form = document.forms.creater


let povishenie = []

//1
//поиск
search.oninput = () => {
    let key = search.value.trim().toLowerCase();

    let filtered = peoples.filter((item) => {
        let title = item.name.toLowerCase();

        if (title.includes(key)) {
            return item;
        }
    });
    reload(filtered, key)
}

//добавление
function submit(item) {
    let creater = {
        id: Math.random(),
        increase: false,
        rise: false,
    };

    let new_people = new FormData(form);

    new_people.forEach((people, key) => {
        creater[key] = people;
    });
    peoples.push(creater)
    reload(peoples)
}

function reload(peoples) {
    people_inf.innerHTML = "";
    for (let item of peoples) {
        let div = document.createElement('div')
        let span = document.createElement('span')
        let input = document.createElement('input')
        let good = document.createElement('img')
        let delet = document.createElement('img')
        let star = document.createElement('i')

        div.classList.add('list')
        span.classList.add('list-text')
        input.classList.add('list-input')
        good.classList.add('img')
        delet.classList.add('img')
        star.classList.add('img')

        span.innerHTML = `${item.name}`
        input.value = `${item.salary}$`

        good.alt = 'cookie'
        delet.alt = 'delete'


        people_inf.append(div)
        div.append(span, input, good, delet, star)


        delet.onclick = () => {
            peoples = peoples.filter((e) => e.id !== item.id);
            reload(peoples, people_inf);
        };


        good.onclick = () => {
            if (povishenie.includes(item.id)) {
                span.style.color = ''
                input.style.color = ''
                povishenie = povishenie.filter(id => id !== item.id)

            } else {
                span.style.color = '#'
                input.style.color = 'yellow'

                povishenie.push(item.id)
            }

            h4.innerHTML = `Премию получат: ${povishenie.length}`
        }
    }
}
reload(peoples)