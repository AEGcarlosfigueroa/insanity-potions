const { Cauldron }  = require ('./../cauldron.js');
const { Essence } = require('./../essence.js');

describe("tests for generation of essence potions", () => {
    test("when all ingredients have effect name increase and have the same HP attribute, the resulting potion will be of class Essence", () => {
        const ingredients = [
            {
                "_id":"6702b39d76863c206a48cccb",
                "name":"Crimson Lotus",
                "description":"A sacred flower that boosts one's health noticeably.",
                "value":110,
                "effects":["increase_hit_points"],
                "image":"/images/ingredients/increase/increase_2.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b39d76863c206a48cccc",
                "name":"Ironbark Berry",
                "description":"A hard berry that enhances hit points by a small amount.",
                "value":25,
                "effects":["lesser_increase_hit_points"],
                "image":"/images/ingredients/increase/increase_3.webp",
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

        const potion = Cauldron.createPotion(ingredients);

        expect(potion).toBeInstanceOf(Essence);
    })
    test("when two ingredients have effect name increase, have the same HP attribute, and the same modifier, the resulting potion will have a value 20% higher than the sum of its ingredients", () => {
        const ingredients = [
            {
                "_id":"6702b39d76863c206a48cccb",
                "name":"Crimson Lotus",
                "description":"A sacred flower that boosts one's health noticeably.",
                "value":110,
                "effects":["increase_hit_points"],
                "image":"/images/ingredients/increase/increase_2.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b39d76863c206a48cccb",
                "name":"Crimson Lotus",
                "description":"A sacred flower that boosts one's health noticeably.",
                "value":110,
                "effects":["increase_hit_points"],
                "image":"/images/ingredients/increase/increase_2.webp",
                "type":"ingredient"
            }
        ]

        const potion = Cauldron.createPotion(ingredients);

        const expectedValue = Math.round(220*1.2); //220 sum of all ingredients

        expect(potion.value).toBe(expectedValue);
    })
    test("when three ingredients have effect name increase, have the same HP attribute, and the same modifier, the resulting potion will have a value 40% higher than the sum of its ingredients", () => {
        const ingredients = [
            {
                "_id":"6702b39d76863c206a48cccb",
                "name":"Crimson Lotus",
                "description":"A sacred flower that boosts one's health noticeably.",
                "value":110,
                "effects":["increase_hit_points"],
                "image":"/images/ingredients/increase/increase_2.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b39d76863c206a48cccb",
                "name":"Crimson Lotus",
                "description":"A sacred flower that boosts one's health noticeably.",
                "value":110,
                "effects":["increase_hit_points"],
                "image":"/images/ingredients/increase/increase_2.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b39d76863c206a48cccb",
                "name":"Crimson Lotus",
                "description":"A sacred flower that boosts one's health noticeably.",
                "value":110,
                "effects":["increase_hit_points"],
                "image":"/images/ingredients/increase/increase_2.webp",
                "type":"ingredient"
            }
        ]

        const potion = Cauldron.createPotion(ingredients);

        const expectedValue = Math.round(330*1.4); //330 sum of all ingredients

        expect(potion.value).toBe(expectedValue);
    })
    test("when four ingredients have effect name increase, have the same HP attribute, and the same modifier, the resulting potion will have a value 80% higher than the sum of its ingredients", () => {
        const ingredients = [
            {
                "_id":"6702b39d76863c206a48cccb",
                "name":"Crimson Lotus",
                "description":"A sacred flower that boosts one's health noticeably.",
                "value":110,
                "effects":["increase_hit_points"],
                "image":"/images/ingredients/increase/increase_2.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b39d76863c206a48cccb",
                "name":"Crimson Lotus",
                "description":"A sacred flower that boosts one's health noticeably.",
                "value":110,
                "effects":["increase_hit_points"],
                "image":"/images/ingredients/increase/increase_2.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b39d76863c206a48cccb",
                "name":"Crimson Lotus",
                "description":"A sacred flower that boosts one's health noticeably.",
                "value":110,
                "effects":["increase_hit_points"],
                "image":"/images/ingredients/increase/increase_2.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b39d76863c206a48cccb",
                "name":"Crimson Lotus",
                "description":"A sacred flower that boosts one's health noticeably.",
                "value":110,
                "effects":["increase_hit_points"],
                "image":"/images/ingredients/increase/increase_2.webp",
                "type":"ingredient"
            }
        ]

        const potion = Cauldron.createPotion(ingredients);

        const expectedValue = Math.round(440*1.8); //440 sum of all ingredients

        expect(potion.value).toBe(expectedValue);
    })
    test("when all ingredients have effect name increase, have the same HP attribute, and the same modifier, the resulting potion will have a name of Essence of + Modifier + heal", () => {
        const ingredients = [
            {
                "_id":"6702b39d76863c206a48cccc",
                "name":"Ironbark Berry",
                "description":"A hard berry that enhances hit points by a small amount.",
                "value":25,
                "effects":["lesser_increase_hit_points"],
                "image":"/images/ingredients/increase/increase_3.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b39d76863c206a48cccc",
                "name":"Ironbark Berry",
                "description":"A hard berry that enhances hit points by a small amount.",
                "value":25,
                "effects":["lesser_increase_hit_points"],
                "image":"/images/ingredients/increase/increase_3.webp",
                "type":"ingredient"
            }
        ]

        const potion = Cauldron.createPotion(ingredients);

        const expectedName = "Essence of lesser heal"; //Lesser is the modifier present

        expect(potion.name).toBe(expectedName);
    })
    test("when all ingredients have effect name increase and have the same HP attribute, but different modifiers, its value will be the sum of the ingredients value", () => {
        const ingredients = [
            {
                "_id":"6702b39d76863c206a48cccb",
                "name":"Crimson Lotus",
                "description":"A sacred flower that boosts one's health noticeably.",
                "value":110,
                "effects":["increase_hit_points"],
                "image":"/images/ingredients/increase/increase_2.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b39d76863c206a48cccc",
                "name":"Ironbark Berry",
                "description":"A hard berry that enhances hit points by a small amount.",
                "value":25,
                "effects":["lesser_increase_hit_points"],
                "image":"/images/ingredients/increase/increase_3.webp",
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

        const expectedValue = 143; //sum of the values of the ingredients

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.value).toBe(expectedValue);
    })
    test("when all ingredients have effect name increase and have the same HP attribute, but different modifiers, its name will be Essence of + least present modifier + heal", () => {
        const ingredients = [
            {
                "_id":"6702b39d76863c206a48cccb",
                "name":"Crimson Lotus",
                "description":"A sacred flower that boosts one's health noticeably.",
                "value":110,
                "effects":["increase_hit_points"],
                "image":"/images/ingredients/increase/increase_2.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b39d76863c206a48cccc",
                "name":"Ironbark Berry",
                "description":"A hard berry that enhances hit points by a small amount.",
                "value":25,
                "effects":["lesser_increase_hit_points"],
                "image":"/images/ingredients/increase/increase_3.webp",
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

        const expectedName = "Essence of least heal" //least present modifier is least

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("when there is an ingredient that does not have Hp attribute, the resulting potion will not be an essence", () => {
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
                "_id":"6702b39d76863c206a48cccc",
                "name":"Ironbark Berry",
                "description":"A hard berry that enhances hit points by a small amount.",
                "value":25,
                "effects":["lesser_increase_hit_points"],
                "image":"/images/ingredients/increase/increase_3.webp",
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

        const potion = Cauldron.createPotion(ingredients);

        expect(potion).not.toBeInstanceOf(Essence);
    })
})