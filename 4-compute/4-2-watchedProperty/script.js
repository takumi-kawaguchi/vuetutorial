var app = new Vue({
    el: '#app',
    data: {
        firstname: 'foo',
        lastname: 'bar',
        fullname: 'foo bar',
        accessorTest: ''
    },
    watch: {
        firstname: function (val) {
            this.fullname = val + ' ' + this.lastname
        },
        lastname: function (val) {
            this.fullname = this.firstname + ' ' + val
        }
    }
})