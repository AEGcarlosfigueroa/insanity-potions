const { Cauldron }  = require ('./../cauldron.js');
const { Poison } = require('./../poison.js');

describe("tests for generation of poison", () => {
    test("When all ingredients are of type damage and affecting the same attribute, its name must include 'Poison of'", () => {
        const ingredients = [
            {
                "_id":"6702b46b76863c206a48ccfb",
                "name":"Sickly Sap",
                "description":"A viscous sap that slows movement and reduces dexterity.",
                "value":175,
                "effects":["greater_damage_dexterity"],
                "image":"/images/ingredients/damage/damage_9.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b46b76863c206a48ccf5",
                "name":"Tainted Thorn",
                "description":"A thorn that inflicts pain and weakens dexterity.",
                "value":5,
                "effects":["least_damage_dexterity"],
                "image":"/images/ingredients/damage/damage_3.webp",
                "type":"ingredient"
            }
        ]

        const expectedString = "Poison of";

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toContain(expectedString);
    })
    test("When all ingredients are of type damage and affecting the same attribute, its value must match the sum and negative of the effect strength of the ingredients based on the given table", () => {
        const ingredients = [
            {
                "_id":"6702b46b76863c206a48ccfb",
                "name":"Sickly Sap",
                "description":"A viscous sap that slows movement and reduces dexterity.",
                "value":175,
                "effects":["greater_damage_dexterity"],
                "image":"/images/ingredients/damage/damage_9.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b46b76863c206a48ccf5",
                "name":"Tainted Thorn",
                "description":"A thorn that inflicts pain and weakens dexterity.",
                "value":5,
                "effects":["least_damage_dexterity"],
                "image":"/images/ingredients/damage/damage_3.webp",
                "type":"ingredient"
            }
        ]

        const expectedValue = -5; // greater: -4, least: -1

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.value).toBe(expectedValue);
    }),
    test("When all ingredients are of type damage and affecting the same attribute, its class must be Poison", () => {
        const ingredients = [
            {
                "_id":"6702b46b76863c206a48ccfb",
                "name":"Sickly Sap",
                "description":"A viscous sap that slows movement and reduces dexterity.",
                "value":175,
                "effects":["greater_damage_dexterity"],
                "image":"/images/ingredients/damage/damage_9.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b46b76863c206a48ccf5",
                "name":"Tainted Thorn",
                "description":"A thorn that inflicts pain and weakens dexterity.",
                "value":5,
                "effects":["least_damage_dexterity"],
                "image":"/images/ingredients/damage/damage_3.webp",
                "type":"ingredient"
            }
        ]

        const potion = Cauldron.createPotion(ingredients);

        expect(potion).toBeInstanceOf(Poison);
    })
    test("When not all ingredients are affecting the same attribute, its class must not be Poison", () => {
        const ingredients = [
            {
                "_id":"6702b46b76863c206a48ccfb",
                "name":"Sickly Sap",
                "description":"A viscous sap that slows movement and reduces dexterity.",
                "value":175,
                "effects":["greater_damage_dexterity"],
                "image":"/images/ingredients/damage/damage_9.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b46b76863c206a48ccf5",
                "name":"Tainted Thorn",
                "description":"A thorn that inflicts pain and weakens dexterity.",
                "value":5,
                "effects":["least_damage_dexterity"],
                "image":"/images/ingredients/damage/damage_3.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b46b76863c206a48ccf6",
                "name":"Doomroot",
                "description":"A deadly root that drains the constitution of those who consume it.",
                "value":270,
                "effects":["greater_damage_constitution"],
                "image":"/images/ingredients/damage/damage_4.webp",
                "type":"ingredient"
            }
        ]

        const potion = Cauldron.createPotion(ingredients);

        expect(potion).not.toBeInstanceOf(Poison);
    })
    test("When not all ingredients are of type damage, its class must not be Poison", () => {
        const ingredients = [
            {
                "_id":"6702b46b76863c206a48ccfb",
                "name":"Sickly Sap",
                "description":"A viscous sap that slows movement and reduces dexterity.",
                "value":175,
                "effects":["greater_damage_dexterity"],
                "image":"/images/ingredients/damage/damage_9.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b46b76863c206a48ccf5",
                "name":"Tainted Thorn",
                "description":"A thorn that inflicts pain and weakens dexterity.",
                "value":5,
                "effects":["least_damage_dexterity"],
                "image":"/images/ingredients/damage/damage_3.webp",
                "type":"ingredient"
            },
            {
              "_id": "6702b39d76863c206a48cccc",
              "name": "Ironbark Berry",
              "description": "A hard berry that enhances hit points by a small amount.",
              "value": 25,
              "effects": [
                "increase_hit_points"
              ],
              "image": "/images/ingredients/increase/increase_3.webp",
              "type": "ingredient"
            },
        ]

        const potion = Cauldron.createPotion(ingredients);

        expect(potion).not.toBeInstanceOf(Poison);
    })
})
