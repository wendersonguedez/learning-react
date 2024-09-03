const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}

const books = getBooks();

function getTotalReviewCount(book) {
    const goodReads = book.reviews?.goodreads?.reviewsCount ?? 0;
    const libraryThing = book.reviews?.librarything?.reviewsCount ?? 0;
    return goodReads + libraryThing;
}

/**
 * Assim como o método map, filter também faz parte dos métodos mais importantes de se aprender antes de iniciar no React.
 * 
 * Basicamente, o método filter irá filtrar alguns elementos do array com base em uma condição passada como função de callback. 
 * 
 * Assim como os outros, o método filter também não altera o array original.
 */

/**
 * Abaixo, o método filter está sendo utilizado para filtrar somente os livros que tenham mais de 500 páginas.
 * 
 * Todos os resultados retornados serão armazenados na variável 'longBooks'.
 */
const longBooks = books.filter((book => book.pages > 500))
console.log(longBooks)

/**
 * Abaixo, estou utilizando o método filter encadeado, onde na primeira vez irá retornar somente os livros que tenham mais que 500 páginas
 * e com base nesses livros retornados, irá filtar somente pelos livros que tenham adaptações para filme.
 */
const longBooksWithMovieAdaptation = books
    .filter((book => book.pages > 500))
    .filter((book) => book.hasMovieAdaptation);
console.log(longBooksWithMovieAdaptation);

/**
 * No exemplo abaixo, está sendo retornado apenas o nome dos livros que fazem parte do gênero de aventura, combinando o método 'map' com o método 'filter'.
 */
const adventureBooksWithOnlyTitle = books
    .filter((book) => book.genres.includes('adventure'))
    .map((book) => book.title);

console.log(adventureBooksWithOnlyTitle)
