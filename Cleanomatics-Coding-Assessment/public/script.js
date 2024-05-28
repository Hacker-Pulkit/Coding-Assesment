document.getElementById('calculate-btn').addEventListener('click', () => {
    const distance = parseFloat(document.getElementById('distance').value);
    const vehicle = document.querySelector('input[name="vehicle"]:checked').value;

    if (isNaN(distance) || distance<0 ) {
        alert('Please enter a valid distance');
        return;
    }

    const vehicleData = {
        "Maruti Suzuki Alto": { speed: 140, efficiency: 22.05, tankCapacity: 35, maxRange: 771.75 },
        "Hyundai i20": { speed: 180, efficiency: 20.35, tankCapacity: 37, maxRange: 753.05 },
        "Tata Nexon": { speed: 180, efficiency: 17.57, tankCapacity: 44, maxRange: 772.68 },
        "Honda City": { speed: 180, efficiency: 17.8, tankCapacity: 40, maxRange: 712.00 },
        "Mahindra Thar": { speed: 155, efficiency: 15.2, tankCapacity: 57, maxRange: 866.40 },
        "Toyota Innova Crysta": { speed: 179, efficiency: 11.25, tankCapacity: 55, maxRange: 618.75 },
        "Kia Seltos": { speed: 170, efficiency: 16.8, tankCapacity: 50, maxRange: 840.00 },
        "Renault Kwid": { speed: 150, efficiency: 22.3, tankCapacity: 28, maxRange: 624.40 },
        "Ford EcoSport": { speed: 182, efficiency: 15.9, tankCapacity: 52, maxRange: 826.80 },
        "Tata Tiago": { speed: 150, efficiency: 23.84, tankCapacity: 35, maxRange: 834.40 }
    };

    const selectedVehicle = vehicleData[vehicle];
    const time = distance / selectedVehicle.speed;
    const fuelUsed = distance / selectedVehicle.efficiency;
    const outOfRange = distance > selectedVehicle.maxRange;

    document.getElementById('time-result').textContent = `Time to travel: ${time.toFixed(2)} hours`;
    document.getElementById('fuel-result').textContent = outOfRange ? "Out of Range" : `Fuel used: ${fuelUsed.toFixed(2)} liters`;

    let comparisonText = "Comparison with other vehicles:\n";
    for (let key in vehicleData) {
        if (key !== vehicle) {
            const compVehicle = vehicleData[key];
            const compTime = distance / compVehicle.speed;
            comparisonText += `${key}: ${compTime.toFixed(2)} hours\n`;
        }
    }
    document.getElementById('comparison-result').textContent = comparisonText;
});
