"use strict"

const Question0 = prompt('Один з останніх переглянутих фільмів?'),
                a = prompt('На скільки оціните фільм ві 1 до 10?'),
                b = prompt('Один з останніх переглянутих фільмів?'),
                c = prompt('На скільки оціните фільм ві 1 до 10?');


const PersonalMovieDB = {
    count : Question0,
    movies : {},
    actors : {},
    genres : [],
    privat : false
}

PersonalMovieDB.movies[Question0] = a;
PersonalMovieDB.movies[b] = c;

console.log(PersonalMovieDB);