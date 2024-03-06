// Looping deret angka : 2 4 6 8 10 10
for (int i = 2; i <= 10; i += 2) {
    System.out.print(i + " ");
 }
 System.out.println(10);
 
 // Looping deret angka : 9 6 3 0 -3 -6
 for (int i = 9; i >= -6; i -= 3) {
    System.out.print(i + " ");
 }
 
 // Looping perkalian dengan output
 int multiplicand = 5;
 for (int multiplier = 6; multiplier <= 10; multiplier++) {
    int product = multiplicand * multiplier;
    System.out.println(multiplicand + " x " + multiplier + " = " + product);
 }
 
 // Looping deret angka : 1 3 6 10 15 21 28 36
 for (int i = 1, count = 0; count < 8; i += 2) {
    System.out.print(i + " ");
    count++;
    if (i == 15) {
        i = 21; // Skip 18
    }
 }