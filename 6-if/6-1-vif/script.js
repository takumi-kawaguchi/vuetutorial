var app = new Vue({
    el: '#app',
    data: {
        awesome: true,
        type: 'A',
        loginType: 'username',
        ok: true
    },
    methods: {
        toggleLoginType: function () {
            if (this.loginType === 'username') {
                this.loginType = 'email'
            } else {
                this.loginType = 'username'
            }
        }
    }
})