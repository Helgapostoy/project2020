"use strict"

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const perconalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

const a = prompt ('Один из последних просмотренных фильмов?', ''),
      b = prompt ('На сколько оцените его?', ''),
      с = prompt ('Один из последних просмотренных фильмов?', ''),
      d = prompt ('На сколько оцените его?', '');

perconalMovieDB.movies[a] = b;
perconalMovieDB.movies[с] = d;

console.log(perconalMovieDB); 