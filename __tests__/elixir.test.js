const { Cauldron }  = require ('./../cauldron.js');
const { Elixir } = require('./../elixir.js');

describe("tests for generation of boost elixirs", () => {
    test("When all ingredients are of type boost and affect the same attribute, its value will be the median value of the total ingredients, rounded down to its inferior multiple of 5", () => {
        const ingredients = [
            {
              "_id":"6702b4f876863c206a48cd24",
              "name":"Firepetal",
              "description":"A fiery petal that enhances strength when consumed.",
              "value":44,
              "effects":["boost_strength"],
              "image":"/images/ingredients/boost/boost_17.webp",
              "type":"ingredient"
            },
            {
              "_id":"6702b4f876863c206a48cd24",
              "name":"Firepetal",
              "description":"A fiery petal that enhances strength when consumed.",
              "value":44,
              "effects":["boost_strength"],
              "image":"/images/ingredients/boost/boost_17.webp",
              "type":"ingredient"
            },
            {
              "_id":"6702b4f876863c206a48cd1b",
              "name":"Silverthorn",
              "description":"A thorn that grants greater strength to those who wield it.",
              "value":180,
              "effects":["greater_boost_strength"],
              "image":"/images/ingredients/boost/boost_8.webp",
              "type":"ingredient"
            }
        ];

        const expectedValue = 85 //result is 89.333333, its inferior multiple of 5 is 85

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.value).toBe(expectedValue);
    })
    test("When all ingredients are of type boost and affect the same attribute, its class must be elixir", () => {
        const ingredients = [
            {
              "_id":"6702b4f876863c206a48cd24",
              "name":"Firepetal",
              "description":"A fiery petal that enhances strength when consumed.",
              "value":44,
              "effects":["boost_strength"],
              "image":"/images/ingredients/boost/boost_17.webp",
              "type":"ingredient"
            },
            {
              "_id":"6702b4f876863c206a48cd24",
              "name":"Firepetal",
              "description":"A fiery petal that enhances strength when consumed.",
              "value":44,
              "effects":["boost_strength"],
              "image":"/images/ingredients/boost/boost_17.webp",
              "type":"ingredient"
            },
            {
              "_id":"6702b4f876863c206a48cd1b",
              "name":"Silverthorn",
              "description":"A thorn that grants greater strength to those who wield it.",
              "value":180,
              "effects":["greater_boost_strength"],
              "image":"/images/ingredients/boost/boost_8.webp",
              "type":"ingredient"
            }
        ];

        const potion = Cauldron.createPotion(ingredients);

        expect(potion).toBeInstanceOf(Elixir);
    })
    test("When all ingredients are of type boost, affect the same attribute, and are type least, its name must be least + attribute + elixir", () => {
        const ingredients = [
            {
                "_id":"6702b4f876863c206a48cd20",
                "name":"Radiant Petal",
                "description":"A petal that enhances charisma with its ethereal glow.",
                "value":9,
                "effects":["least_boost_charisma"],
                "image":"/images/ingredients/boost/boost_13.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b4f876863c206a48cd20",
                "name":"Radiant Petal",
                "description":"A petal that enhances charisma with its ethereal glow.",
                "value":9,
                "effects":["least_boost_charisma"],
                "image":"/images/ingredients/boost/boost_13.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Least charisma elixir" // initial least, charisma should be the attribute

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When all ingredients are of type boost, affect the same attribute, and are type lesser, its name must be lesser + attribute + elixir", () => {
        const ingredients = [
            {
                "_id":"6702b4f876863c206a48cd17",
                "name":"Moonshade Petal",
                "description":"A petal that enhances charisma under the light of the moon.",
                "value":38,
                "effects":["lesser_boost_charisma"],
                "image":"/images/ingredients/boost/boost_4.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b4f876863c206a48cd17",
                "name":"Moonshade Petal",
                "description":"A petal that enhances charisma under the light of the moon.",
                "value":38,
                "effects":["lesser_boost_charisma"],
                "image":"/images/ingredients/boost/boost_4.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Lesser charisma elixir" // initial lesser, charisma should be the attribute

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When all ingredients are of type boost, affect the same attribute, and are type normal, its name must be attribute + elixir", () => {
        const ingredients = [
            {
              "_id":"6702b4f876863c206a48cd24",
              "name":"Firepetal",
              "description":"A fiery petal that enhances strength when consumed.",
              "value":44,
              "effects":["boost_strength"],
              "image":"/images/ingredients/boost/boost_17.webp",
              "type":"ingredient"
            },
            {
              "_id":"6702b4f876863c206a48cd24",
              "name":"Firepetal",
              "description":"A fiery petal that enhances strength when consumed.",
              "value":44,
              "effects":["boost_strength"],
              "image":"/images/ingredients/boost/boost_17.webp",
              "type":"ingredient"
            }
        ];

        const expectedName = "Strength elixir" // normal type has no initial, strength should be the attribute

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When all ingredients are of type boost, affect the same attribute, and are type greater, its name must be Greater + attribute + elixir", () => {
        const ingredients = [
            {
              "_id":"6702b4f876863c206a48cd1b",
              "name":"Silverthorn",
              "description":"A thorn that grants greater strength to those who wield it.",
              "value":180,
              "effects":["greater_boost_strength"],
              "image":"/images/ingredients/boost/boost_8.webp",
              "type":"ingredient"
            },
            {
              "_id":"6702b4f876863c206a48cd1b",
              "name":"Silverthorn",
              "description":"A thorn that grants greater strength to those who wield it.",
              "value":180,
              "effects":["greater_boost_strength"],
              "image":"/images/ingredients/boost/boost_8.webp",
              "type":"ingredient"
            }
        ];

        const expectedName = "Greater strength elixir" // initial is greater, strength should be the attribute

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When all ingredients are of type boost, affect the same attribute, but have different modifier types (lesser, lesat, normal or greater), its type must be Least modifier present + attribute + elixir", () => {
        const ingredients = [
            {
                "_id":"6702b4f876863c206a48cd17",
                "name":"Moonshade Petal",
                "description":"A petal that enhances charisma under the light of the moon.",
                "value":38,
                "effects":["lesser_boost_charisma"],
                "image":"/images/ingredients/boost/boost_4.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b4f876863c206a48cd20",
                "name":"Radiant Petal",
                "description":"A petal that enhances charisma with its ethereal glow.",
                "value":9,
                "effects":["least_boost_charisma"],
                "image":"/images/ingredients/boost/boost_13.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b4f876863c206a48cd22",
                "name":"Celestial Orchid",
                "description":"An orchid that grants enhanced charisma during rituals.",
                "value":160,
                "effects":["greater_boost_charisma"],
                "image":"/images/ingredients/boost/boost_15.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Least charisma elixir" // least available modifier is least, charisma should be the attribute

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When all ingredients are of type boost, but affect different attributes, the potion must not be an elixir", () => {
        const ingredients = [
            {
                "_id":"6702b4f876863c206a48cd17",
                "name":"Moonshade Petal",
                "description":"A petal that enhances charisma under the light of the moon.",
                "value":38,
                "effects":["lesser_boost_charisma"],
                "image":"/images/ingredients/boost/boost_4.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b4f876863c206a48cd20",
                "name":"Radiant Petal",
                "description":"A petal that enhances charisma with its ethereal glow.",
                "value":9,
                "effects":["least_boost_charisma"],
                "image":"/images/ingredients/boost/boost_13.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b4f876863c206a48cd1b",
                "name":"Silverthorn",
                "description":"A thorn that grants greater strength to those who wield it.",
                "value":180,
                "effects":["greater_boost_strength"],
                "image":"/images/ingredients/boost/boost_8.webp",
                "type":"ingredient"
            }
        ];

        const potion = Cauldron.createPotion(ingredients);

        expect(potion).not.toBeInstanceOf(Elixir);
    })
})

describe("tests for generation of calm elixirs", () => {
    test("When all ingredients are of type calm, its value will be the median value of the total ingredients, rounded down to its inferior multiple of 5", () => {
        const ingredients = [
            {
                "_id":"6702b56a76863c206a48cd46",
                "name":"Quieting Root",
                "description":"A root that brings about a gentle peace of mind with every consumption.",
                "value":6,"effects":["least_calm"],
                "image":"/images/ingredients/calm/calm_4.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b56a76863c206a48cd43",
                "name":"Serenity Blossom",
                "description":"A rare flower that soothes the mind and banishes feelings of insanity.",
                "value":250,
                "effects":["greater_calm"],
                "image":"/images/ingredients/calm/calm_1.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b56a76863c206a48cd45",
                "name":"Peaceful Herb",
                "description":"An herb known for its ability to alleviate stress and minor insanity.",
                "value":32,
                "effects":["lesser_calm"],
                "image":"/images/ingredients/calm/calm_3.webp",
                "type":"ingredient"
            }
        ];

        const expectedValue = 95 //result is 96, its inferior multiple of 5 is 95

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.value).toBe(expectedValue);
    })
    test("When all ingredients are of type calm, its class must be elixir", () => {
        const ingredients = [
            {
                "_id":"6702b56a76863c206a48cd46",
                "name":"Quieting Root",
                "description":"A root that brings about a gentle peace of mind with every consumption.",
                "value":6,"effects":["least_calm"],
                "image":"/images/ingredients/calm/calm_4.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b56a76863c206a48cd43",
                "name":"Serenity Blossom",
                "description":"A rare flower that soothes the mind and banishes feelings of insanity.",
                "value":250,
                "effects":["greater_calm"],
                "image":"/images/ingredients/calm/calm_1.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b56a76863c206a48cd45",
                "name":"Peaceful Herb",
                "description":"An herb known for its ability to alleviate stress and minor insanity.",
                "value":32,
                "effects":["lesser_calm"],
                "image":"/images/ingredients/calm/calm_3.webp",
                "type":"ingredient"
            }
        ];

        const potion = Cauldron.createPotion(ingredients);

        expect(potion).toBeInstanceOf(Elixir);
    }),
    test("When all ingredients are of type calm, and are of modifier least, its name must be Least calm elixir", () => {
        const ingredients = [
            {
                "_id":"6702b56a76863c206a48cd46",
                "name":"Quieting Root",
                "description":"A root that brings about a gentle peace of mind with every consumption.",
                "value":6,"effects":["least_calm"],
                "image":"/images/ingredients/calm/calm_4.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b56a76863c206a48cd46",
                "name":"Quieting Root",
                "description":"A root that brings about a gentle peace of mind with every consumption.",
                "value":6,"effects":["least_calm"],
                "image":"/images/ingredients/calm/calm_4.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Least calm elixir"

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When all ingredients are of type calm, and are of modifier lesser, its name must be Lesser calm elixir", () => {
        const ingredients = [
            {
                "_id":"6702b56a76863c206a48cd45",
                "name":"Peaceful Herb",
                "description":"An herb known for its ability to alleviate stress and minor insanity.",
                "value":32,
                "effects":["lesser_calm"],
                "image":"/images/ingredients/calm/calm_3.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b56a76863c206a48cd45",
                "name":"Peaceful Herb",
                "description":"An herb known for its ability to alleviate stress and minor insanity.",
                "value":32,
                "effects":["lesser_calm"],
                "image":"/images/ingredients/calm/calm_3.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Lesser calm elixir";

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When all ingredients are of type calm, and do not have a modifier, its name must be Calm elixir", () => {
        const ingredients = [
            {
                "_id":"6702b56a76863c206a48cd44",
                "name":"Tranquil Leaf",
                "description":"A calming leaf that restores clarity and reduces madness.",
                "value":78,
                "effects":["calm"],
                "image":"/images/ingredients/calm/calm_2.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b56a76863c206a48cd44",
                "name":"Tranquil Leaf",
                "description":"A calming leaf that restores clarity and reduces madness.",
                "value":78,
                "effects":["calm"],
                "image":"/images/ingredients/calm/calm_2.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Calm elixir";

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When all ingredients are of type calm, and are of modifier greater, its name must be Greater calm elixir", () => {
        const ingredients = [
            {
                "_id":"6702b56a76863c206a48cd43",
                "name":"Serenity Blossom",
                "description":"A rare flower that soothes the mind and banishes feelings of insanity.",
                "value":250,
                "effects":["greater_calm"],
                "image":"/images/ingredients/calm/calm_1.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b56a76863c206a48cd43",
                "name":"Serenity Blossom",
                "description":"A rare flower that soothes the mind and banishes feelings of insanity.",
                "value":250,
                "effects":["greater_calm"],
                "image":"/images/ingredients/calm/calm_1.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Greater calm elixir";

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When all ingredients are of type calm, but have different modifier, its name must be least present modifier + calm elixir", () => {
        const ingredients = [
            {
                "_id":"6702b56a76863c206a48cd46",
                "name":"Quieting Root",
                "description":"A root that brings about a gentle peace of mind with every consumption.",
                "value":6,"effects":["least_calm"],
                "image":"/images/ingredients/calm/calm_4.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b56a76863c206a48cd43",
                "name":"Serenity Blossom",
                "description":"A rare flower that soothes the mind and banishes feelings of insanity.",
                "value":250,
                "effects":["greater_calm"],
                "image":"/images/ingredients/calm/calm_1.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b56a76863c206a48cd45",
                "name":"Peaceful Herb",
                "description":"An herb known for its ability to alleviate stress and minor insanity.",
                "value":32,
                "effects":["lesser_calm"],
                "image":"/images/ingredients/calm/calm_3.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Least calm elixir" //least present modifier is least

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
})

describe("miscellaneous elixir tests", () => {
    test("when there is an ingredient present that is not calm or boost, the potion must not be of class Elixir", () => {
        const ingredients = [
            {
                "_id":"6702b56a76863c206a48cd46",
                "name":"Quieting Root",
                "description":"A root that brings about a gentle peace of mind with every consumption.",
                "value":6,
                "effects":["least_calm"],
                "image":"/images/ingredients/calm/calm_4.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b56a76863c206a48cd43",
                "name":"Serenity Blossom",
                "description":"A rare flower that soothes the mind and banishes feelings of insanity.",
                "value":250,
                "effects":["greater_calm"],
                "image":"/images/ingredients/calm/calm_1.webp",
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
        ];

        const potion = Cauldron.createPotion(ingredients);

        expect(potion).not.toBeInstanceOf(Elixir);
    })
})

