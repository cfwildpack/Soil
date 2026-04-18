class Soil:
    def __init__(self, moisture=30, ph=6.5):
        self.moisture = moisture
        self.ph = ph

    def water(self, amount):
        self.moisture += amount
        print(f"Soil moisture increased to {self.moisture}%")

    def adjust_ph(self, value):
        self.ph = value
        print(f"Soil pH adjusted to {self.ph}")

    def status(self):
        print(f"Moisture: {self.moisture}%")
        print(f"pH Level: {self.ph}")

if __name__ == "__main__":
    soil = Soil()
    soil.water(5)
    soil.adjust_ph(6.8)
    soil.status()
