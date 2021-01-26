class Card {
    constructor(name, cost) {
      this.name = name;
      this.cost = cost;
    }
    summon(str, target) {
      console.log(`${str} summons ${this.name}`);
      console.log(target);
    }
  }
  
  class Unit extends Card {
    constructor(name, cost, power, res) {
      super(name, cost);
      this.power = power;
      this.res = res;
    }
    attack(str, target) {
      // reduce target res by power
      // console.log("A Unit is played");
      console.log(`${str} has "${this.name}" attack "${target.name}"`);
      target.res -= this.power;
      console.log(target);
      return this;
    }
  }
  
  class Effect extends Card {
    constructor(name, cost, text, stat, mag) {
      super(name, cost);
      this.text = text;
      this.stat = stat;
      this.mag = mag;
    }
    play(str, target) {
      if (target instanceof Unit) {
        // implement card text here
        //   console.log("An Effect is played on a Unit");
        console.log(`${str} plays "${this.name}" on "${target.name}"`);
        if (this.stat === "res") {
          target.res += this.mag;
        } else {
          target.power += this.mag;
        }
  
        this.text;
        console.log(target);
        return this;
      } else {
        throw new Error("Target must be a unit!");
      }
    }
  }
  
  const unitCard1 = new Unit("Red Belt Ninja", 3, 3, 4);
  const unitCard2 = new Unit("Black Belt Ninja", 4, 5, 4);
  
  // console.log(unitCard1);
  // console.log(unitCard2);
  
  const effectCard1 = new Effect(
    "Hard Algorithm",
    2,
    "Increase target's resilience by 3",
    "res",
    +3
  );
  
  const effectCard2 = new Effect(
    "Unhandled Promise Rejection",
    1,
    "Reduce target's resilience by 2",
    "res",
    -2
  );
  
  const effectCard3 = new Effect(
    "Pair Programming",
    3,
    "Increase target's power by 2",
    "power",
    +3
  );
  
  // console.log(effectCard1);
  // console.log(effectCard2);
  // console.log(effectCard3);
  
  const P1 = "Player 1";
  const P2 = "Player 2";
  
  console.log("GAME STARTS-----------------------------------------------------");
  unitCard1.summon(P1, unitCard1);
  console.log("----------------------------------------------------------------");
  effectCard1.play(P1, unitCard1);
  console.log("----------------------------------------------------------------");
  unitCard2.summon(P2, unitCard2);
  console.log("----------------------------------------------------------------");
  effectCard2.play(P2, unitCard1);
  console.log("----------------------------------------------------------------");
  effectCard3.play(P1, unitCard1);
  console.log("----------------------------------------------------------------");
  unitCard1.attack(P1, unitCard2);
  console.log("----------------------------------------------------------------");