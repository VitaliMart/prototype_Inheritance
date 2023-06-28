let animal = {
    eats: true,
    move() {
        return 'I am walking';
    },
};
let cat = {
    say: 'meow',
    greetigs(move) {
        if (move) {
            console.log(this.move() + " " + this.say + " owner");
        } else {
            console.log(this.say);
        }
    },
    __proto__: animal,
};

cat.greetigs(true);
cat.greetigs(false);