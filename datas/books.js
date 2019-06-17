class Books {
	constructor() {
		this.books = [
			{
				title: 'Harry Potter and the Chamber of Secrets',
				author: 'J.K. Rowling',
			},
			{
				title: 'Jurassic Park',
				author: 'Michael Crichton',
			},
		]
	}

	get getBooks() {
		return this.books
	}

	set addBook(book) {
		this.books = [ ...this.books, book ]
		return this.books
	}
}

export default new Books()
