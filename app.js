new Vue({
  el: "#app",
  data: {
    gameIsRunning: false,
    playerHP: 100,
    monsterHP: 100,
    turns: [],
    currentTurn: 0
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHP = 100;
      this.monsterHP = 100;
      this.turns = [];
    },
    gameReset: function() {
      this.gameIsRunning = false;
    },
    normalAttack: function() {
      var damage = this.calculateDamage(1, 10);
      this.monsterHP -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "Player hits for " + damage + " points of damage!",
        id: this.currentTurn + 1
      });
      this.currentTurn++;
      if (this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    specialAttack: function() {
      var damage = this.calculateDamage(10, 20);
      this.monsterHP -= damage;
      this.turns.unshift({
        isPlayer: true,
        text:
          "Player shoots a beam of light. It smashes for " +
          damage +
          " points of damage!",
        id: this.currentTurn + 1
      });
      this.currentTurn++;
      if (this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    heal: function() {
      if (this.playerHP <= 90) {
        this.playerHP += 10;
      } else {
        this.playerHP = 100;
      }

      this.turns.unshift({
        isPlayer: true,
        text: "Player heals for 10 HP!",
        turn: this.currentTurn + 1
      });
      this.currentTurn++;
      this.monsterAttack();
    },
    monsterAttack: function() {
      var damage = this.calculateDamage(3, 12);
      this.playerHP -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: "Monster hits for " + damage + " points of damage!",
        id: this.currentTurn + 1
      });
      this.currentTurn++;
      this.checkWin();
    },
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
