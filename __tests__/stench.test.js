const { Cauldron }  = require ('./../cauldron.js');
const { Stench } = require('./../stench.js')

describe("tests for generation of stench potions", () => {
    test("when all ingredients have effect name decrease and have the same HP attribute, the resulting potion will be of class Stench", () => {
        const ingredients = [
            {
                "_id":"6702b3b776863c206a48ccd2",
                "name":"Ashen Petal",
                "description":"A petal from a forbidden flower that barely reduces hit points.",
                "value":6,
                "effects":["least_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_4.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b3b776863c206a48ccd0",
                "name":"Venomroot",
                "description":"A dark root that slowly diminishes the user's hit points over time.",
                "value":105,
                "effects":["decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_2.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b3b776863c206a48ccd1",
                "name":"Bloodthorn Berry",
                "description":"A poisonous berry that slightly decreases one's overall health.",
                "value":35,
                "effects":["lesser_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_3.webp",
                "type":"ingredient"
            }
        ]

        const potion = Cauldron.createPotion(ingredients);

        expect(potion).toBeInstanceOf(Stench);
    })
    test("when two ingredients have effect name decrease, have the same HP attribute, and the same modifier, the resulting potion will have a value 20% higher than the sum of its ingredients and be converted to negative", () => {
        const ingredients = [
            {
                "_id":"6702b3b776863c206a48ccd1",
                "name":"Bloodthorn Berry",
                "description":"A poisonous berry that slightly decreases one's overall health.",
                "value":35,
                "effects":["lesser_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_3.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b3b776863c206a48ccd1",
                "name":"Bloodthorn Berry",
                "description":"A poisonous berry that slightly decreases one's overall health.",
                "value":35,
                "effects":["lesser_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_3.webp",
                "type":"ingredient"
            }
        ]

        const potion = Cauldron.createPotion(ingredients);

        const expectedValue = -(Math.round(70*1.2)); //70 sum of all ingredients

        expect(potion.value).toBe(expectedValue);
    })
    test("when three ingredients have effect name decrease, have the same HP attribute, and the same modifier, the resulting potion will have a value 40% higher than the sum of its ingredients and be converted to negative", () => {
        const ingredients = [
            {
                "_id":"6702b3b776863c206a48ccd1",
                "name":"Bloodthorn Berry",
                "description":"A poisonous berry that slightly decreases one's overall health.",
                "value":35,
                "effects":["lesser_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_3.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b3b776863c206a48ccd1",
                "name":"Bloodthorn Berry",
                "description":"A poisonous berry that slightly decreases one's overall health.",
                "value":35,
                "effects":["lesser_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_3.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b3b776863c206a48ccd1",
                "name":"Bloodthorn Berry",
                "description":"A poisonous berry that slightly decreases one's overall health.",
                "value":35,
                "effects":["lesser_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_3.webp",
                "type":"ingredient"
            }
        ]

        const potion = Cauldron.createPotion(ingredients);

        const expectedValue = -(Math.round(105*1.4)); //105 sum of all ingredients

        expect(potion.value).toBe(expectedValue);
    })
    test("when four ingredients have effect name decrease, have the same HP attribute, and the same modifier, the resulting potion will have a value 80% higher than the sum of its ingredients and be converted to negative", () => {
        const ingredients = [
            {
                "_id":"6702b3b776863c206a48ccd1",
                "name":"Bloodthorn Berry",
                "description":"A poisonous berry that slightly decreases one's overall health.",
                "value":35,
                "effects":["lesser_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_3.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b3b776863c206a48ccd1",
                "name":"Bloodthorn Berry",
                "description":"A poisonous berry that slightly decreases one's overall health.",
                "value":35,
                "effects":["lesser_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_3.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b3b776863c206a48ccd1",
                "name":"Bloodthorn Berry",
                "description":"A poisonous berry that slightly decreases one's overall health.",
                "value":35,
                "effects":["lesser_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_3.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b3b776863c206a48ccd1",
                "name":"Bloodthorn Berry",
                "description":"A poisonous berry that slightly decreases one's overall health.",
                "value":35,
                "effects":["lesser_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_3.webp",
                "type":"ingredient"
            }
        ]

        const potion = Cauldron.createPotion(ingredients);

        const expectedValue = -(Math.round(140*1.8)); //140 sum of all ingredients

        expect(potion.value).toBe(expectedValue);
    })
    test("when four ingredients have effect name decrease, have the same HP attribute, and the same modifier, the resulting potion name will be Stench of + modifier + damage", () => {
        const ingredients = [
            {
                "_id":"6702b3b776863c206a48ccd1",
                "name":"Bloodthorn Berry",
                "description":"A poisonous berry that slightly decreases one's overall health.",
                "value":35,
                "effects":["lesser_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_3.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b3b776863c206a48ccd1",
                "name":"Bloodthorn Berry",
                "description":"A poisonous berry that slightly decreases one's overall health.",
                "value":35,
                "effects":["lesser_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_3.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b3b776863c206a48ccd1",
                "name":"Bloodthorn Berry",
                "description":"A poisonous berry that slightly decreases one's overall health.",
                "value":35,
                "effects":["lesser_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_3.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b3b776863c206a48ccd1",
                "name":"Bloodthorn Berry",
                "description":"A poisonous berry that slightly decreases one's overall health.",
                "value":35,
                "effects":["lesser_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_3.webp",
                "type":"ingredient"
            }
        ]

        const potion = Cauldron.createPotion(ingredients);

        const expectedName = "Stench of lesser damage" //lesser is the present modifier

        expect(potion.name).toBe(expectedName);
    })
    test("when all ingredients have effect name decrease and have the same HP attribute, but have different modifiers, its value will be the sum of the ingredients value modified to negative", () => {
        const ingredients = [
            {
                "_id":"6702b3b776863c206a48ccd2",
                "name":"Ashen Petal",
                "description":"A petal from a forbidden flower that barely reduces hit points.",
                "value":6,
                "effects":["least_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_4.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b3b776863c206a48ccd0",
                "name":"Venomroot",
                "description":"A dark root that slowly diminishes the user's hit points over time.",
                "value":105,
                "effects":["decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_2.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b3b776863c206a48ccd1",
                "name":"Bloodthorn Berry",
                "description":"A poisonous berry that slightly decreases one's overall health.",
                "value":35,
                "effects":["lesser_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_3.webp",
                "type":"ingredient"
            }
        ]

        const expectedValue = -146 //sum of all ingredients converted to negative

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.value).toBe(expectedValue);
    })
    test("when all ingredients have effect name decrease and have the same HP attribute, but have different modifiers, its name will be Stech of + least present modifier + damage", () => {
        const ingredients = [
            {
                "_id":"6702b3b776863c206a48ccd2",
                "name":"Ashen Petal",
                "description":"A petal from a forbidden flower that barely reduces hit points.",
                "value":6,
                "effects":["least_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_4.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b3b776863c206a48ccd0",
                "name":"Venomroot",
                "description":"A dark root that slowly diminishes the user's hit points over time.",
                "value":105,
                "effects":["decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_2.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b3b776863c206a48ccd1",
                "name":"Bloodthorn Berry",
                "description":"A poisonous berry that slightly decreases one's overall health.",
                "value":35,
                "effects":["lesser_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_3.webp",
                "type":"ingredient"
            }
        ]

        const expectedName = "Stench of least damage" //least is the least present attribute

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("when not all ingredients have the same hp attribute, the resultng potion must not be a stench", () => {
        const ingredients = [
            {
                "_id":"6702b3b776863c206a48ccd2",
                "name":"Ashen Petal",
                "description":"A petal from a forbidden flower that barely reduces hit points.",
                "value":6,
                "effects":["least_decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_4.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b3b776863c206a48ccd0",
                "name":"Venomroot",
                "description":"A dark root that slowly diminishes the user's hit points over time.",
                "value":105,
                "effects":["decrease_hit_points"],
                "image":"/images/ingredients/decrease/decrease_2.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b39d76863c206a48cccd",
                "name":"Moonleaf",
                "description":"A mystical leaf that offers a slight increase in hit points.",
                "value":8,
                "effects":["least_increase_hit_points"],
                "image":"/images/ingredients/increase/increase_4.webp",
                "type":"ingredient"
            }
        ]

        const expectedName = "Stench of least damage" //least is the least present attribute

        const potion = Cauldron.createPotion(ingredients);

        expect(potion).not.toBeInstanceOf(Stench);
    })
})