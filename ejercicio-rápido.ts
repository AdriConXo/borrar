class Coche {
    velocidad: number = 0; // Velocidad inicial

    // Método para acelerar
    acelerar() {
        this.velocidad += 10;
        console.log(`🚗💨 Velocidad actual: ${this.velocidad} km/h`);
    }

    // Método para frenar
    frenar() {
        if (this.velocidad > 0) {
            this.velocidad -= 10;
        } else {
            console.log("🚗 Ya estás parado.");
        }
        console.log(`🚗🛑 Velocidad actual: ${this.velocidad} km/h`);
    }
}

// Crear un coche y probar los métodos
const miCoche = new Coche();
miCoche.acelerar(); // 🚗💨 Velocidad actual: 10 km/h
miCoche.acelerar(); // 🚗💨 Velocidad actual: 20 km/h
miCoche.frenar();   // 🚗🛑 Velocidad actual: 10 km/h
miCoche.frenar();   // 🚗🛑 Velocidad actual: 0 km/h
miCoche.frenar();   // 🚗 Ya estás parado.
