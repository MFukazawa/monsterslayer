new Vue({
  el: "#app",
  data: {
    gameIsRunning: false,
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
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHP = 100;
      this.monsterHP = 100;
    },
    gameReset: function() {
      this.gameIsRunning = false;
    },
    normalAttack: function() {
      min = 1;
      max = 10;
      this.monsterHP -= this.calculateDamage(1, 10);
      if (this.checkWin()) {
        return;
      }
      this.playerHP -= this.calculateDamage(3, 12);
      this.checkWin();
    },
    specialAttack: function() {},
    heal: function() {},
    calculateDamage: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    checkWin: function() {
      if (this.monsterHP <= 0 && this.playerHP >= 0) {
        if (confirm("You win! One more?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHP <= 0 && this.monsterHP >= 0) {
        if (confirm("Defeat... Get up?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});
