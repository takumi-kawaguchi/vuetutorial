var app = new Vue({
    el: '#app',
    data: {
        isActive: false,
        hasError: true,
        classObject: {
            test: true,
            error: true
        },
        activeClass: 'active',
        errorClass: 'text-danger'
    },
    computed: {
        getClassObject: function () {
            return {
                active: this.isActive,
                'text-danger': this.hasError
            }
        }
    }
})