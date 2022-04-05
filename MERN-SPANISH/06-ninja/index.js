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

const ninja1 = new Ninja('Master Splinter', 90);

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
