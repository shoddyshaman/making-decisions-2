// Jon, embarrassed, intends to head back to Winterfell asap. First, let's create a backpack for him so he can begin to pack his bags. Create a variable called backpack, that is equal to an empty array.

let backpack = [];

//Now, let's add some of his stuff to that backpack. Add 3 strings to the array, "sword", "shield", and "food".

backpack.push("sword", "shield", "food");
// backpack.unshift('sword','shield','food')
// backpack.splice(0,0,"sword",'shield','food')

// Realizing that his backpack is going to be too full to add other essentials, Jon decides to take his sword out and place it on his belt. Remove this sword from the backpack.
// backpack.shift()
let belt = backpack.splice(0, 1);

// console.log(belt)

//Now Jon decides he wants to add his fur coat to his backpack. Create a variable called furCoat and give it a string value of "fur coat". Then add that variable to the backpack.

let furCoat = "phurr coat";

backpack.push(furCoat);

//Realizing it is freezing outside, Jon decides to take the fur coat back out and put it on. Without using splice, remove the fur coat from the array.
backpack.pop();

// Let's check how much stuff we have in our backpack. Create a variable called itemCount and set it equal to the number of items in the backpack.
let itemCount = backpack.length;

// console.log(itemCount)

// There is currently no where near enough supplies to make the journey to Winterfell. Let's add some other essentials. Add the strings: flint, blanket, knife, and toothbrush.

backpack.push("flint", "blanket", "knife", "toothbrush");
// backpack.splice(backpack.length,0,"flint","blanket","knife","toothbrush")
// console.log(backpack)

//Realizing his bag is overflowing, Jon decides to split up his content into two bags. Create a backpack2 variable that will hold some items. Use the splice method to move the flint, blanket, and knife from backpack to backpack2

let backpack2 = backpack.splice(2, 3);

// Using bracket syntax, console.log the first item in backpack2
// console.log(backpack2[2])

///Loops

//lets see the contents of Jon's backpack
for (let i = 0; i < backpack2.length; i++) {
  // console.log(backpack2[i])
}

for (let i = 0; i < backpack.length; i++) {
  // console.log(backpack[i])
}

// backpack2.push('potion','spells','spider')

console.log(backpack2);
//rewrite this to only show the first three items
for (let i = 0; i < 3; i++) {
  //   console.log(backpack2[i]);
}

// backpack.pop()
if (backpack.length === 0) {
  console.log("backpack empty");
} else if (backpack.length >= 3) {
  for (let i = 0; i < 3; i++) {
    console.log(backpack[i], "if-fired");
  }
} else {
  for (let i = 0; i < backpack.length; i++) {
    console.log(backpack[i], "else-fired");
  }
}
