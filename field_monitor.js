class FieldMonitor {
    constructor() {
        this.records = [];
    }

    addRecord(moisture, temperature) {
        this.records.push({ moisture, temperature });
        console.log("Record added.");
    }

    showRecords() {
        console.log("Field Data:");
        this.records.forEach(r => {
            console.log(`Moisture: ${r.moisture}%, Temp: ${r.temperature}°C`);
        });
    }
}

const monitor = new FieldMonitor();
monitor.addRecord(32, 28);
monitor.showRecords();
