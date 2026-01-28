const { Cauldron }  = require ('./../cauldron.js');
const { Antidote } = require('./../antidote.js');

describe("tests for generation of antidotes", () => {
    test("When all ingredients are of type restore and affecting the same attribute, its name must include 'Antidote of'", () => {
        const ingredients = [
            {
                "_id":"6702b44f76863c206a48cce8",
                "name":"Giant's Tear",
                "description":"A tear known for its ability to enhance strength and fortitude.",
                "value":250,
                "effects":["greater_restore_strength"],
                "image":"/images/ingredients/restore/restore_19.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b44f76863c206a48ccdc",
                "name":"Titan's Blood",
                "description":"A rare blood known for its ability to enhance strength tremendously.",
                "value":75,
                "effects":["restore_strength"],
                "image":"/images/ingredients/restore/restore_7.webp",
                "type":"ingredient"
            }
        ]

        const expectedString = "Antidote of";

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toContain(expectedString);
    })
    test("When all ingredients are of type restore and affecting the same attribute, its value must match the sum of the effect strength of the ingredients based on the given table", () => {
        const ingredients = [
            {
                "_id":"6702b44f76863c206a48cce8",
                "name":"Giant's Tear",
                "description":"A tear known for its ability to enhance strength and fortitude.",
                "value":250,
                "effects":["greater_restore_strength"],
                "image":"/images/ingredients/restore/restore_19.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b44f76863c206a48ccdc",
                "name":"Titan's Blood",
                "description":"A rare blood known for its ability to enhance strength tremendously.",
                "value":75,
                "effects":["restore_strength"],
                "image":"/images/ingredients/restore/restore_7.webp",
                "type":"ingredient"
            }
        ]

        const expectedValue = 7; // greater: 4, nothing: 3

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.value).toBe(expectedValue);
    }),
    test("When all ingredients are of type restore and affecting the same attribute, its class must be Antidote", () => {
        const ingredients = [
            {
                "_id":"6702b44f76863c206a48cce8",
                "name":"Giant's Tear",
                "description":"A tear known for its ability to enhance strength and fortitude.",
                "value":250,
                "effects":["greater_restore_strength"],
                "image":"/images/ingredients/restore/restore_19.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b44f76863c206a48ccdc",
                "name":"Titan's Blood",
                "description":"A rare blood known for its ability to enhance strength tremendously.",
                "value":75,
                "effects":["restore_strength"],
                "image":"/images/ingredients/restore/restore_7.webp",
                "type":"ingredient"
            }
        ]

        const potion = Cauldron.createPotion(ingredients);

        expect(potion).toBeInstanceOf(Antidote);
    })
    test("When not all ingredients are affecting the same attribute, its class must not be Antidote", () => {
        const ingredients = [
            {
                "_id":"6702b44f76863c206a48cce8",
                "name":"Giant's Tear",
                "description":"A tear known for its ability to enhance strength and fortitude.",
                "value":250,
                "effects":["greater_restore_strength"],
                "image":"/images/ingredients/restore/restore_19.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b44f76863c206a48ccdc",
                "name":"Titan's Blood",
                "description":"A rare blood known for its ability to enhance strength tremendously.",
                "value":75,
                "effects":["restore_strength"],
                "image":"/images/ingredients/restore/restore_7.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b44f76863c206a48cce1",
                "name":"Tranquility Flower",
                "description":"A tranquil flower that helps to alleviate insanity and calm the mind.",
                "value":5,
                "effects":["least_restore_insanity"],
                "image":"/images/ingredients/restore/restore_12.webp",
                "type":"ingredient"
            }
        ]

        const potion = Cauldron.createPotion(ingredients);

        expect(potion).not.toBeInstanceOf(Antidote);
    })
    test("When not all ingredients are of type restore, its class must not be Antidote", () => {
        const ingredients = [
            {
                "_id":"6702b44f76863c206a48cce8",
                "name":"Giant's Tear",
                "description":"A tear known for its ability to enhance strength and fortitude.",
                "value":250,
                "effects":["greater_restore_strength"],
                "image":"/images/ingredients/restore/restore_19.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b44f76863c206a48ccdc",
                "name":"Titan's Blood",
                "description":"A rare blood known for its ability to enhance strength tremendously.",
                "value":75,
                "effects":["restore_strength"],
                "image":"/images/ingredients/restore/restore_7.webp",
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

        expect(potion).not.toBeInstanceOf(Antidote);
    })
})

