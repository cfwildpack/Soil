#include <iostream>
using namespace std;

class SoilDensity {
public:
    double calculate(double mass, double volume) {
        return mass / volume;
    }
};

int main() {
    SoilDensity sd;
    double density = sd.calculate(1200.0, 800.0);
    cout << "Soil Density: " << density << " kg/m3" << endl;
    return 0;
}
