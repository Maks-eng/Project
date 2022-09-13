"use strict"


const PersonalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start: function () {
        PersonalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?', '');
   
        while (PersonalMovieDB.count == '' || PersonalMovieDB.count == null || isNaN(PersonalMovieDB.count)) {
            PersonalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?', ''); 
        }
   },

    rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один з останніх переглянутих фільмів?', '').trim(),
              b = prompt('На скільки оціните фільм ві 1 до 10?', '');   
        
        if (a != null && b != null && a != '' && b!= '' && a.length < 50) {
            PersonalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }  
    }
},
    detectPersonalLevel: function() {
    if (PersonalMovieDB.count < 10) {
        console.log('Переглянуто доволі мало фільмів');
    } else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count < 30) {
        console.log('Ви класичний глядач');
    } else if (PersonalMovieDB.count >= 30) {
        console.log('Ви кіноман');
    } else {
        console.log('Помилка');
    }
},
    showMyDB: function(hidden) {
    if(!hidden) {
        console.log(PersonalMovieDB)
    }
},
    toggleVisibleMyDB: function() {
    if (PersonalMovieDB.privat) {
        PersonalMovieDB = false;
    } else {
        PersonalMovieDB = true;
    }
},
    writeYourGenres: function() {
    for (i = 1; i<=3; i++) {
        PersonalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
    };
}
    

};






