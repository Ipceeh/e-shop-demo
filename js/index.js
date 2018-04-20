var slider = new Vue({
    el: '#slider',
    data: {
        currentFoto: 0,
        foto: [
            {
                active: true,
                url: './img/widjet1.png',
                title: 'НОЧНОЙ СВЕТИЛЬНИК',
                description: 'Светильники наполняют комнату мягким светом и создают потрясающую атмосферу. 7 разных цветов в каждом светильнике – 7 вариантов настроения. '
            },
            {
                active: false,
                url: './img/widjet2.png',
                title: 'НАРУЧНЫЕ ЧАСЫ',
                description: 'Наручные часы — прибор, носимый на запястье и служащий для индикации текущего времени и измерения временных интервалов. Наибольшее распространение получили механические, кварцевые и электронные наручные часы.'
            },
            {
                active: false,
                url: './img/widjet3.png',
                title: 'КОЖАНЫЙ КОШЕЛЕК',
                description: 'Бумажник - небольшой полый или плоский предмет (изначально мешочек), чаще всего из кожи или ткани, предназначенный для ношения денег.'
            },
            {
                active: false,
                url: './img/widjet4.png',
                title: 'ЗМЕИНЫЙ БРАСЛЕТ',
                description: 'Браслет (от фр. bracelet — запястье, браслет) — ювелирное изделие, надеваемое на руку, со времён палеолита, распространённое у многих народов мира.'
            },
        ]
    },
    methods: {
        switchFoto: function(foto) {
            this.currentFoto = foto;
            for( var i = 0; i <=3; i++){
                this.foto[i].active = false;
            }
            this.foto[this.currentFoto].active = true;
            console.log(this.foto[this.currentFoto].active);
        },
    },
});

var search = new Vue({
    el: '#search-screen',
    data:{
        scrolTop: false,
        gender: [
            'мужской',
            'женский'
        ],
        genderPicked: undefined,
        clickedGender: false,
        pickedGender: false,
        age: [
            '0-3',
            '3-6',
            '6-9',
            '9-12',
            '12-15',
            '15-18',
            '18-25',
            '25-35',
            '35-55',
            '55+'
        ],
        pickedAge: undefined,
        clickedAge: false,
        agePicked: false,
        hobbies: [
            'Компьютеры и видеоигры',
            'Путешествия и Туризм',
            'Спорт',
            'Здоровье и красота',
            'Бизнес',
            'Дом и Дача',
            'Экстрим и Активный отдых',
            'Автомобили',
            'Кулинария',
            'Коллекционирование',
            'Музыка и кино',
            'Охота и рыбалка',
            'Мода и стиль',
        ],
        pickedHobbies: false,
        clickedHobbies: false,
        hobbiesPicked: [],
        ocasion: [
            'День рождение',
            '14 февраля',
            '23 февраля',
            'Новый год',
            'Годовщина',
            '8 марта',
            'Новоселье',
            'Свадьба',
            'Другое',
        ],
        pickedOcasion: undefined,
        clickedOcasion: false,
        ocasionPicked: false,
    },
    methods:{
        onClickQ1: function(gender){
            this.genderPicked = gender;
            this.pickedGender = true;
        },
        onClickQ2: function(age){
            this.agePicked = age;
            this.pickedAge = true;
        },
        onClickQ3: function(hobby){
            this.hobbiesPicked = this.hobbiesPicked.concat(hobby);
            this.pickedAge = true;
            console.log(this.hobbiesPicked, hobby);
        },
        onClickQ4: function(hobby){
            var i;
            for(i = 0; i<= this.hobbiesPicked; i++){
                if (this.hobbiesPicked == hobby) break;
            }
            this.hobbiesPicked.splice(i, 1);
            console.log(this.hobbiesPicked, hobby);
        },
        onClickQ5: function(ocasion){
            this.ocasionPicked = ocasion;
            this.pickedOcasion = true;
        },
    },
    created: function(){
        window.onscroll = function() { 
            this.scrolTop = window.pageYOffset > 520;
            console.log(this.scrolTop, window.pageYOffset);
        }
    },
});

var rezult = new Vue({
    el: '#rezult-area',
    data: {
        present: [
            {
                url: './img/present/pr1.png',
                price: 289,
                name: 'Подсвечник «Олень»',
                
            },
            {
                url: './img/present/pr2.png',
                price: 105,
                name: 'Подвеска «Сердце»',
            },
            {
                url: './img/present/pr3.png',
                price: 144,
                name: 'Декор «Олень»',
            },
            {
                url: './img/present/pr4.png',
                price: 225,
                name: 'Спецовник «Снеговик»',
            },
        ]
    },
});

