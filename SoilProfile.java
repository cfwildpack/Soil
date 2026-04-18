public class SoilProfile {
    private String type;
    private double depth;

    public SoilProfile(String type, double depth) {
        this.type = type;
        this.depth = depth;
    }

    public void describe() {
        System.out.println("Soil Type: " + type);
        System.out.println("Depth: " + depth + " meters");
    }

    public static void main(String[] args) {
        SoilProfile profile = new SoilProfile("Loam", 1.5);
        profile.describe();
    }
}
