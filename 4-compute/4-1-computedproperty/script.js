var app = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    computed: {
        reversedMessageComputedProperty: function () {
            return this.message.split('').reverse().join('')
        },
        nowComputedProperty: function () {
            return Date.now()
        }
    },
    methods: {
        reversedMessageMethods: function () {
            return this.message.split('').reverse().join('')
        },
        nowMethods: function () {
            return Date.now()
        }
    }
})