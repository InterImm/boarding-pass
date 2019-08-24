var router = new VueRouter({
    mode: 'history',
    routes: []
});

var app = new Vue({
    router,
    el: '#app',
    data: {
      ship: 'Renaissance',
      from: '地球',
      destination: '火星',
      fromCode: 'E-SH',
      destinationCode: 'M-I',
      departureTime: '2019-09-18',
      arrivalTime: '2020-07-12',
      name: '你的名字',
      departureTerminal: 'A',
      departurePlatform: '6',
      deck: 'E',
      room: 'E17',
      ticketNumber: Math.floor(Math.random()*90000) + 10000
    },
    mounted: function() {
        if (this.$route.query.ticketNumber) {
            this.ticketNumber = this.$route.query.ticketNumber
        }

        if (this.$route.query.ship) {
            this.ship = this.$route.query.ship
        }
        if (this.$route.query.from) {
            this.from = this.$route.query.from
        }
        if (this.$route.query.destination) {
            this.destination = this.$route.query.destination
        }
        if (this.$route.query.fromCode) {
            this.fromCode = this.$route.query.fromCode
        }
        if (this.$route.query.destinationCode) {
            this.destinationCode = this.$route.query.destinationCode
        }
        if (this.$route.query.departureTime) {
            this.departureTime = this.$route.query.departureTime
        }
        if (this.$route.query.arrivalTime) {
            this.arrivalTime = this.$route.query.arrivalTime
        }
        if (this.$route.query.name) {
        this.name = this.$route.query.name
        }
        if (this.$route.query.departureTerminal) {
            this.departureTerminal = this.$route.query.departureTerminal
        }
        if (this.$route.query.departurePlatform) {
            this.departurePlatform = this.$route.query.departurePlatform
        }
        if (this.$route.query.room) {
            this.room = this.$route.query.room
        }
        if ((this.$route.query.deck)) {
            this.deck = this.$route.query.deck
        }
    }
  })