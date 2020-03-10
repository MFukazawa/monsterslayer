new Vue({
  el: "#app",
  data: {
    newGame: false,
    newGameAttack: false,
    playerHP: 100,
    monsterHP: 100
  },
  methods: {
    newGameStart: function() {
      this.newGame = !this.newGame;
    },
    newGameDamage: function() {
      this.newGameAttack = true;
    }
  }
});
