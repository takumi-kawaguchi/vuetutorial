var app = new Vue({
    el: '#app',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ],
        numbers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
        object: {
            title: 'how to do lists in vue',
            author: 'jane doe',
            publishedAt: '2016-04-10'
        }
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    }
})