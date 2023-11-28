import booksList from "../components/BooksList.js"
import bookInfoModal from "../components/BookInfoModal.js"
export default {
    /*html*/
    template: `
    <books-list :key="update" @showModal="openModal"></books-list>
    <book-info-modal @bookUpdated="updateView" :bookInModal="bookInModal" @bookDeleted="bookDeleted"></book-info-modal>
    `,
    components: {
        booksList,
        bookInfoModal
    },
    emits: ["myEvent"],
    data() {
        return {
            update: 0,
            bookInModal: { id: "", title: "", author: "", price: "" },
        }
    },
    methods: {
        openModal(book) {
            this.bookInModal = book
            let bookInfoModal = new bootstrap.Modal(document.getElementById("bookInfoModal"))
            bookInfoModal.show()
        },
        updateView(book) {
            this.update++
            this.bookInModal = book
        },
        bookDeleted(res) {
            console.log(res)
            if (res.status !== 204) {
                return alert("Book could not be deleted")
            }
            this.update++
        }
    }
}