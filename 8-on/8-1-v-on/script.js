var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        name: 'Vue.js'
    },
    methods: {
        greet: function (event) {
            alert('hello ' + this.name + '!')
            if (event) {
                alert(event.target.tagName)
            }
        },
        say: function (message) {
            alert(message)
        },
        doOnlyThis: function () {
            alert('doOnlyThis!')
        },
        doThis: function () {
            alert('doThis!')
        }
    }
})