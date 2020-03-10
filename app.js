new Vue({
  el: "#app",
  data: {
    newGame: false,
    newGameAttack: false,
    playerHP: 100,
    monsterHP: 100,
    playerAttack: "",
    monsterAttack: "",
    attacks: {
      playerAttacks: [],
      monsterAttacks: []
    }
  },
  methods: {
    newGameStart: function() {
      this.newGame = !this.newGame;
    },
    newGameDamage: function() {
      this.newGameAttack = true;
      this.playerHP = 100;
      this.monsterHP = 100;
    },
    gameReset: function() {
      this.newGame = !this.newGame;
      this.newGameAttack = false;
    },
    normalAttack: function(min, max) {
      min = Math.ceil(1);
      max = Math.floor(10);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }
});
