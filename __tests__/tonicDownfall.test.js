const { Cauldron }  = require ('./../cauldron.js');

describe("tests for generation of tonic downfall", () => {
    test("when are more than one but less than five ingredients that are incompatible, the resulting potion must be tonic downfall", () => {
        const ingredients = [
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
            {
              "_id": "6702b39d76863c206a48cccd",
              "name": "Moonleaf",
              "description": "A mystical leaf that offers a slight increase in hit points.",
              "value": 8,
              "effects": [
                "lesser_increase_hit_points"
              ],
              "image": "/images/ingredients/increase/increase_4.webp",
              "type": "ingredient"
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
        ];

        const expectedName = "Tonic of Downfall";

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When there is only one ingredient in input, the resulting potion should be tonic downfall", () => {
        const ingredients = [
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
        ];

        const expectedName = "Tonic of Downfall";

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When there are two compatible ingredients in input, the resulting potion must not be tonic downfall", () => {
        const ingredients = [
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
            {
              "_id": "6702b39d76863c206a48cccd",
              "name": "Moonleaf",
              "description": "A mystical leaf that offers a slight increase in hit points.",
              "value": 8,
              "effects": [
                "lesser_increase_hit_points"
              ],
              "image": "/images/ingredients/increase/increase_4.webp",
              "type": "ingredient"
            }
        ];

        const notExpectedName = "Tonic of Downfall";

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).not.toBe(notExpectedName);
    })
    test("When there are three compatible ingredients in input, the resulting potion must not be tonic downfall", () => {
        const ingredients = [
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
            {
              "_id": "6702b39d76863c206a48cccd",
              "name": "Moonleaf",
              "description": "A mystical leaf that offers a slight increase in hit points.",
              "value": 8,
              "effects": [
                "lesser_increase_hit_points"
              ],
              "image": "/images/ingredients/increase/increase_4.webp",
              "type": "ingredient"
            },
            {
                "_id":"6702b39d76863c206a48cccc",
                "name":"Ironbark Berry",
                "description":"A hard berry that enhances hit points by a small amount.",
                "value":25,
                "effects":[
                    "lesser_increase_hit_points"
                ],
                "image":"/images/ingredients/increase/increase_3.webp",
                "type":"ingredient"
            }
        ];

        const notExpectedName = "Tonic of Downfall";

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).not.toBe(notExpectedName);
    })
    test("When there are four compatible ingredients in input, the resulting potion must not be tonic downfall", () => {
        const ingredients = [
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
            {
              "_id": "6702b39d76863c206a48cccd",
              "name": "Moonleaf",
              "description": "A mystical leaf that offers a slight increase in hit points.",
              "value": 8,
              "effects": [
                "lesser_increase_hit_points"
              ],
              "image": "/images/ingredients/increase/increase_4.webp",
              "type": "ingredient"
            },
            {
                "_id":"6702b39d76863c206a48cccc",
                "name":"Ironbark Berry",
                "description":"A hard berry that enhances hit points by a small amount.",
                "value":25,
                "effects":[
                    "lesser_increase_hit_points"
                ],
                "image":"/images/ingredients/increase/increase_3.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b39d76863c206a48ccca",
                "name":"Heartroot",
                "description":"A rare root known to strengthen the body's vitality permanently.",
                "value":275,
                "effects":[
                    "greater_increase_hit_points"
                ],
                "image":"/images/ingredients/increase/increase_1.webp",
                "type":"ingredient"
            }
        ];

        const notExpectedName = "Tonic of Downfall";

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).not.toBe(notExpectedName);
    })
    test("When there are five ingredients in input, the resulting potion should be tonic downfall", () => {
        const ingredients = [
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
            {
              "_id": "6702b39d76863c206a48cccd",
              "name": "Moonleaf",
              "description": "A mystical leaf that offers a slight increase in hit points.",
              "value": 8,
              "effects": [
                "lesser_increase_hit_points"
              ],
              "image": "/images/ingredients/increase/increase_4.webp",
              "type": "ingredient"
            },
            {
                "_id":"6702b39d76863c206a48cccc",
                "name":"Ironbark Berry",
                "description":"A hard berry that enhances hit points by a small amount.",
                "value":25,
                "effects":[
                    "lesser_increase_hit_points"
                ],
                "image":"/images/ingredients/increase/increase_3.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b39d76863c206a48ccca",
                "name":"Heartroot",
                "description":"A rare root known to strengthen the body's vitality permanently.",
                "value":275,
                "effects":[
                    "greater_increase_hit_points"
                ],
                "image":"/images/ingredients/increase/increase_1.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b39d76863c206a48ccca",
                "name":"Heartroot",
                "description":"A rare root known to strengthen the body's vitality permanently.",
                "value":275,
                "effects":[
                    "greater_increase_hit_points"
                ],
                "image":"/images/ingredients/increase/increase_1.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Tonic of Downfall";

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
})