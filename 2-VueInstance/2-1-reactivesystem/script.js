var data = { a: '1', b: '' }
Object.freeze(data)

var vm = new Vue({
    el: "#app",
    data: data
})