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

/**
 * Rest/Spread Operator
 * 
 * O operador rest/spread (`...`) permite capturar os elementos restantes de um array 
 * que não foram desestruturados anteriormente e agrupá-los em um novo array.
 * 
 * Lembrando que o operador deve ser colocado no final da desestruturação.
 * 
 * A diferença entre os operadores rest e spread está no contexto em que são usados:
 * 
 * - Rest: Usado durante a desestruturação para coletar os elementos restantes em um novo array ou objeto.
 * - Spread: Usado para espalhar (ou distribuir) os elementos de um array ou propriedades de um objeto dentro de um novo array ou objeto.
 */
const otherBook = getBook(5);

/**
 * title: titleBook e genres: genresBook está dando um apelido para as propriedades capturadas.
 * Com isso, ao chamar alguma dessas propriedades, é necessário utilizar o nome do apelido.
 */
const { title: titleBook, translations, genres: genresBook } = otherBook;

/** 
 * Rest/Spread em arrays.
 * 
 * No exemplo abaixo, 'firstGenre' irá conter apenas o primeiro elemento do array 'genresBook',
 * enquanto 'otherGenres' será um novo array contendo todos os outros elementos que restaram.
 * 
 * Dessa forma, é possível trabalhar com o primeiro elemento de forma isolada,
 * ao mesmo tempo em que se mantém acesso aos demais elementos.
 * 
 * Exemplo:
 * Suponha que 'genresBook' seja ["fantasy", "high-fantasy", "novel", "fantasy fiction"].
 * 
 * - 'firstGenre' será "fantasy"
 * - 'otherGenres' será ["high-fantasy", "novel", "fantasy fiction"]
 */
const [firstGenre, ...otherGenres] = genresBook;
console.log(firstGenre);
console.log(otherGenres);

/**
 * Digamos que queremos criar um novo array contendo todos os gêneros existentes,
 * mas com a adição de um novo gênero ao final do array.
 * 
 * Isso é possível utilizando o operador spread, que possui a mesma sintaxe do operador rest,
 * mas é usado para espalhar os elementos de um array existente dentro de um novo array.
 * 
 * Basicamente, ele irá pegar todos os valores do array 'genresBook' e irá adicioná-los,
 * um por um, no array 'newGenres', seguido do novo valor 'epic fantasy'.
 * 
 * Exemplo:
 * Se 'genresBook' for ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
 * o 'newGenres' será ["fantasy", "high-fantasy", "novel", "fantasy fiction", "epic fantasy"].
 * 
 * Caso queira colocar 'epic fantasy' no inicio do array, basta colocar ele como primeiro argumento.
 * const newGenres = ["epic fantasy", ...genresBook];
 */
const newGenres = [...genresBook, "epic fantasy"];
console.log(newGenres);

/**
 * Rest/Spread em objetos.
 * 
 * Digamos que queremos criar um novo objeto baseado no livro atual, mas adicionar uma nova propriedade.
 * Por exemplo, podemos adicionar a data de lançamento do filme.
 * 
 * No exemplo abaixo, pegamos o objeto 'lordeOfTheRingBook' e adicionamos a ele a propriedade 'moviePublicationDate',
 * utilizando o operador spread. Isso cria um novo objeto 'updatedBook' que contém todas as propriedades do objeto original,
 * além da nova propriedade adicionada.
 * 
 * Exemplo:
 * Se 'lordeOfTheRingBook' representa "The Lord of the Rings", o 'updatedBook' terá todas as mesmas propriedades,
 * mas com 'moviePublicationDate' adicionada como "2001-12-19".
 * 
 * Além disso, se você desejar atualizar o valor de uma propriedade existente, basta definir o novo valor para ela.
 * Por exemplo:
 * const updatedBook = {
 *   ...lordeOfTheRingBook,
 *   moviePublicationDate: '2001-12-19',
 *   pages: 1210 // Atualizando a propriedade 'pages' para um novo valor
 * };
 * 
 * No exemplo acima, 'updatedBook' terá a mesma estrutura de 'lordeOfTheRingBook', mas com a propriedade 'pages'
 * atualizada para 1210.
 * 
 * Caso você coloque a propriedade que deseja atualizar antes do operador spread, o novo objeto ('updatedBook') 
 * não conterá a propriedade com o valor atualizado, porque o operador spread está copiando as propriedades 
 * do objeto 'lordeOfTheRingBook' para 'updatedBook' após a definição das propriedades listadas antes do spread.
 * 
 * Por exemplo:
 * const updatedBook = {
 *   pages: 1210, // Esta propriedade será sobrescrita
 *   ...lordeOfTheRingBook,
 *   moviePublicationDate: '2001-12-19',
 * };
 * 
 * No exemplo acima, 'updatedBook' terá 'pages' igual a 1210, sendo o valor original, e 'moviePublicationDate' como "2001-12-19",
 * mas qualquer outra propriedade existente em 'lordeOfTheRingBook' será preservada.
 */
const lordeOfTheRingBook = getBook(1);
const updatedBook = {
    pages: 1210,
    ...lordeOfTheRingBook,
    moviePublicationDate: '2001-12-19',
};
console.log(updatedBook);