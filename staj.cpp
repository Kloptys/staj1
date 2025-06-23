#include <iostream>
#include <ctime>
#include <cstdlib>

int main() {

    std::srand(std::time(0));
    int secretNumber = std::rand() % 100 + 1;
    int tahmin;
    int denemesayisi = 0;
    std:: cout << "Oyuna hoş geldin!";
    std:: cout << "1 ile 100 arasında tuttuğum sayıyı tahmin et.";

    do {
        std::cout << "Tahmini gir: ";
        std::cin >> tahmin;
        denemesayisi++;

        if(tahmin>secretNumber) {
            std::cout << "Dha küçük sayı dene";
        } else if(tahmin<secretNumber) {
            std::cout << "daha büyük sayı dene";
        } else {
            std::cout << "tebrikler" << denemesayisi << "denemede bildiniz";
        }
    } while (tahmin != secretNumber);

    return 0;
}

