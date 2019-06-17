import { PubSub } from 'apollo-server'
import books from './datas/books'
import { TOPIC } from './constans'

const pubsub = new PubSub()

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
	Query: {
		books: () => {
			pubsub.publish(TOPIC, { newBookList: books.getBooks })
			return books.getBooks
		},
	},
	Mutation: {
		addBook: (_, { book }) => {
			books.addBook = book
			pubsub.publish(TOPIC, { newBookList: books.getBooks })
			return books.getBooks
		},
	},
	Subscription: {
		newBookList: {
			subscribe: () => pubsub.asyncIterator([ TOPIC ]),
		},
	},
}

export default resolvers
