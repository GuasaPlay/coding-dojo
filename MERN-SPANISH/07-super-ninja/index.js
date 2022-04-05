class Ninja {
	constructor(name, health) {
		this.name = name;
		this.health = health;
		this.speed = 3;
		this.strength = 3;
	}
	sayName() {
		console.log(`Mi nombre ninja es ${this.name}`);
	}
	showStats() {
		console.log(`Nombre: ${this.name} Salud: ${this.health} Velocidad: ${this.speed} Fuerza: ${this.strength}`);
	}
	drinkSake() {
		this.health += 10;
		console.log(`${this.name} bebió Sake y ganó 10 de salud`);
	}
}

class Sensei extends Ninja {
	constructor(name, health) {
		super(name, health);
		this.speed = 10;
		this.strength = 10;
		this.wisdom = 10;
	}
	speakWisdom() {
		super.drinkSake();
		console.log('Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.');
	}
}

const superSensei = new Sensei('Master Splinter', 200);

superSensei.speakWisdom();
superSensei.showStats();
