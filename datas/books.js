import { PubSub } from 'apollo-server'
import { TOPIC_LAST_BOOK } from './../constans'

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

		this.pubsub = new PubSub()
	}

	get getBooks() {
		return this.books
	}

	set addBook(book) {
		this.books = [ ...this.books, book ]
		this.pubsub.publish(TOPIC_LAST_BOOK, { lastBook: book })

		return this.books
	}

	lastBookSubscribe() {
		return this.pubsub.asyncIterator(TOPIC_LAST_BOOK)
	}
}

export default new Books()
