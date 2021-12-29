var app = new Vue({
    el: "#app-5",
    data: {
        message: 'hello Vue.js'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})