const { Cauldron }  = require ('./../cauldron.js');
const { Venom } = require('./../venom.js');

describe("tests for generation of setback venoms", () => {
    test("When all ingredients are of type setback and affect the same attribute, its value will be the negative of the median value of the total ingredients, rounded down to its inferior multiple of 5", () => {
        const ingredients = [
            {
                "_id":"6702b51d76863c206a48cd39",
                "name":"Cloudcap Mushroom",
                "description":"A rare mushroom that reduces dexterity.",
                "value":72,
                "effects":["setback_dexterity"],
                "image":"/images/ingredients/setback/setback_17.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b51d76863c206a48cd2d",
                "name":"Spider Silk",
                "description":"A thin, sticky silk that reduces dexterity.",
                "value":29,
                "effects":["lesser_setback_dexterity"],
                "image":"/images/ingredients/setback/setback_5.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b51d76863c206a48cd33",
                "name":"Frostvine",
                "description":"A vine that numbs the body and reduces dexterity.",
                "value":17,
                "effects":["least_setback_dexterity"],
                "image":"/images/ingredients/setback/setback_11.webp",
                "type":"ingredient"
            }
        ];

        const expectedValue = -35 //result is 39.333333, its inferior multiple of 5 is 35

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.value).toBe(expectedValue);
    })
    test("When all ingredients are of type setback and affect the same attribute, the potion class must be venom", () => {
        const ingredients = [
            {
                "_id":"6702b51d76863c206a48cd39",
                "name":"Cloudcap Mushroom",
                "description":"A rare mushroom that reduces dexterity.",
                "value":72,
                "effects":["setback_dexterity"],
                "image":"/images/ingredients/setback/setback_17.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b51d76863c206a48cd2d",
                "name":"Spider Silk",
                "description":"A thin, sticky silk that reduces dexterity.",
                "value":29,
                "effects":["lesser_setback_dexterity"],
                "image":"/images/ingredients/setback/setback_5.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b51d76863c206a48cd33",
                "name":"Frostvine",
                "description":"A vine that numbs the body and reduces dexterity.",
                "value":17,
                "effects":["least_setback_dexterity"],
                "image":"/images/ingredients/setback/setback_11.webp",
                "type":"ingredient"
            }
        ];

        const potion = Cauldron.createPotion(ingredients);

        expect(potion).toBeInstanceOf(Venom);
    })
    test("When all ingredients are of type setback and affect the same attribute, and are of modifier Least, the potion name must be Least + Attribute + venom", () => {
        const ingredients = [
            {
                "_id":"6702b51d76863c206a48cd33",
                "name":"Frostvine",
                "description":"A vine that numbs the body and reduces dexterity.",
                "value":17,
                "effects":["least_setback_dexterity"],
                "image":"/images/ingredients/setback/setback_11.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b51d76863c206a48cd33",
                "name":"Frostvine",
                "description":"A vine that numbs the body and reduces dexterity.",
                "value":17,
                "effects":["least_setback_dexterity"],
                "image":"/images/ingredients/setback/setback_11.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Least dexterity venom" //Attribute is dexterity

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When all ingredients are of type setback and affect the same attribute, and are of modifier Lesser, the potion name must be Lesser + Attribute + venom", () => {
        const ingredients = [
            {
                "_id":"6702b51d76863c206a48cd2d",
                "name":"Spider Silk",
                "description":"A thin, sticky silk that reduces dexterity.",
                "value":29,
                "effects":["lesser_setback_dexterity"],
                "image":"/images/ingredients/setback/setback_5.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b51d76863c206a48cd2d",
                "name":"Spider Silk",
                "description":"A thin, sticky silk that reduces dexterity.",
                "value":29,
                "effects":["lesser_setback_dexterity"],
                "image":"/images/ingredients/setback/setback_5.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Lesser dexterity venom" //Attribute is dexterity

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When all ingredients are of type setback and affect the same attribute, and have no modifier, the potion name must be Attribute + venom", () => {
        const ingredients = [
            {
                "_id":"6702b51d76863c206a48cd39",
                "name":"Cloudcap Mushroom",
                "description":"A rare mushroom that reduces dexterity.",
                "value":72,
                "effects":["setback_dexterity"],
                "image":"/images/ingredients/setback/setback_17.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b51d76863c206a48cd39",
                "name":"Cloudcap Mushroom",
                "description":"A rare mushroom that reduces dexterity.",
                "value":72,
                "effects":["setback_dexterity"],
                "image":"/images/ingredients/setback/setback_17.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Dexterity venom" //Attribute is dexterity

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When all ingredients are of type setback and affect the same attribute, and have modifier greater, the potion name must be Greater + Attribute + venom", () => {
        const ingredients = [
            {
                "_id":"6702b51d76863c206a48cd30",
                "name":"Twilight Thorn",
                "description":"A thorn that saps constitution when pricked.",
                "value":210,
                "effects":["greater_setback_constitution"],
                "image":"/images/ingredients/setback/setback_8.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b51d76863c206a48cd30",
                "name":"Twilight Thorn",
                "description":"A thorn that saps constitution when pricked.",
                "value":210,
                "effects":["greater_setback_constitution"],
                "image":"/images/ingredients/setback/setback_8.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Greater constitution venom" //Attribute is constitution

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When all ingredients are of type setback and affect the same attribute, but have different modifiers, the potion name must be Least present modifier + Attribute + venom", () => {
        const ingredients = [
            {
                "_id":"6702b51d76863c206a48cd39",
                "name":"Cloudcap Mushroom",
                "description":"A rare mushroom that reduces dexterity.",
                "value":72,
                "effects":["setback_dexterity"],
                "image":"/images/ingredients/setback/setback_17.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b51d76863c206a48cd39",
                "name":"Cloudcap Mushroom",
                "description":"A rare mushroom that reduces dexterity.",
                "value":72,
                "effects":["setback_dexterity"],
                "image":"/images/ingredients/setback/setback_17.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b51d76863c206a48cd2d",
                "name":"Spider Silk",
                "description":"A thin, sticky silk that reduces dexterity.",
                "value":29,
                "effects":["lesser_setback_dexterity"],
                "image":"/images/ingredients/setback/setback_5.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Lesser dexterity venom" //Attribute is dexterity, least present modifier is lesser

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    }),
    test("When all ingredients are of type setback but dont affect the same attribute, the potion must not be of class Venom", () => {
        const ingredients = [
            {
                "_id":"6702b51d76863c206a48cd39",
                "name":"Cloudcap Mushroom",
                "description":"A rare mushroom that reduces dexterity.",
                "value":72,
                "effects":["setback_dexterity"],
                "image":"/images/ingredients/setback/setback_17.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b51d76863c206a48cd39",
                "name":"Cloudcap Mushroom",
                "description":"A rare mushroom that reduces dexterity.",
                "value":72,
                "effects":["setback_dexterity"],
                "image":"/images/ingredients/setback/setback_17.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b51d76863c206a48cd30",
                "name":"Twilight Thorn",
                "description":"A thorn that saps constitution when pricked.",
                "value":210,
                "effects":["greater_setback_constitution"],
                "image":"/images/ingredients/setback/setback_8.webp",
                "type":"ingredient"
            }
        ];

        const potion = Cauldron.createPotion(ingredients);

        expect(potion).not.toBeInstanceOf(Venom);
    })
})
describe("tests for generation of Frenzy venoms", () => {
    test("When all ingredients are of type frenzy, its value will be the negative of the median value of the total ingredients, rounded down to its inferior multiple of 5", () => {
        const ingredients = [
            {
                "_id":"6702b53d76863c206a48cd40",
                "name":"Whispering Fern",
                "description":"A fern that whispers strange voices, causing mild frenzy in the user.",
                "value":28,
                "effects":["lesser_frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_3.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b53d76863c206a48cd3e",
                "name":"Madcap Mushroom",
                "description":"A twisted mushroom that drives the consumer to the edge of madness.",
                "value":285,
                "effects":["greater_frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_1.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b53d76863c206a48cd3f",
                "name":"Chaos Bloom",
                "description":"A flower with erratic patterns that induces a deep sense of insanity.",
                "value":95,
                "effects":["frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_2.webp",
                "type":"ingredient"
            }
        ];

        const expectedValue = -135 //result is 136, its inferior multiple of 5 is 135

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.value).toBe(expectedValue);
    })
    test("When all ingredients are of type frenzy, the potion class will be Venom", () => {
        const ingredients = [
            {
                "_id":"6702b53d76863c206a48cd40",
                "name":"Whispering Fern",
                "description":"A fern that whispers strange voices, causing mild frenzy in the user.",
                "value":28,
                "effects":["lesser_frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_3.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b53d76863c206a48cd3e",
                "name":"Madcap Mushroom",
                "description":"A twisted mushroom that drives the consumer to the edge of madness.",
                "value":285,
                "effects":["greater_frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_1.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b53d76863c206a48cd3f",
                "name":"Chaos Bloom",
                "description":"A flower with erratic patterns that induces a deep sense of insanity.",
                "value":95,
                "effects":["frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_2.webp",
                "type":"ingredient"
            }
        ];

        const potion = Cauldron.createPotion(ingredients);

        expect(potion).toBeInstanceOf(Venom);
    })
    test("When all ingredients are of type frenzy, and are of modifier least, the potion name will be Least frenzy venom", () => {
        const ingredients = [
            {
                "_id":"6702b53d76863c206a48cd41",
                "name":"Lunatic's Thorn",
                "description":"A thorny herb that induces a subtle but lasting sense of insanity.",
                "value":7,
                "effects":["least_frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_4.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b53d76863c206a48cd41",
                "name":"Lunatic's Thorn",
                "description":"A thorny herb that induces a subtle but lasting sense of insanity.",
                "value":7,
                "effects":["least_frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_4.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Least frenzy venom"

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When all ingredients are of type frenzy, and are of modifier lesser, the potion name will be Lesser frenzy venom", () => {
        const ingredients = [
            {
                "_id":"6702b53d76863c206a48cd40",
                "name":"Whispering Fern",
                "description":"A fern that whispers strange voices, causing mild frenzy in the user.",
                "value":28,
                "effects":["lesser_frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_3.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b53d76863c206a48cd40",
                "name":"Whispering Fern",
                "description":"A fern that whispers strange voices, causing mild frenzy in the user.",
                "value":28,
                "effects":["lesser_frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_3.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Lesser frenzy venom";

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When all ingredients are of type frenzy, and dont have a modifier, the potion name will be Frenzy venom", () => {
        const ingredients = [
            {
                "_id":"6702b53d76863c206a48cd3f",
                "name":"Chaos Bloom",
                "description":"A flower with erratic patterns that induces a deep sense of insanity.",
                "value":95,
                "effects":["frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_2.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b53d76863c206a48cd3f",
                "name":"Chaos Bloom",
                "description":"A flower with erratic patterns that induces a deep sense of insanity.",
                "value":95,
                "effects":["frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_2.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Frenzy venom";

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When all ingredients are of type frenzy, and are of modifier greater, the potion name will be Greater frenzy venom", () => {
        const ingredients = [
            {
                "_id":"6702b53d76863c206a48cd3e",
                "name":"Madcap Mushroom",
                "description":"A twisted mushroom that drives the consumer to the edge of madness.",
                "value":285,
                "effects":["greater_frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_1.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b53d76863c206a48cd3e",
                "name":"Madcap Mushroom",
                "description":"A twisted mushroom that drives the consumer to the edge of madness.",
                "value":285,
                "effects":["greater_frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_1.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Greater frenzy venom";

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
    test("When all ingredients are of type frenzy, but have different modifiers, the potion name will be least present modifier + frenzy venom", () => {
        const ingredients = [
            {
                "_id":"6702b53d76863c206a48cd3e",
                "name":"Madcap Mushroom",
                "description":"A twisted mushroom that drives the consumer to the edge of madness.",
                "value":285,
                "effects":["greater_frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_1.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b53d76863c206a48cd3e",
                "name":"Madcap Mushroom",
                "description":"A twisted mushroom that drives the consumer to the edge of madness.",
                "value":285,
                "effects":["greater_frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_1.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b53d76863c206a48cd3f",
                "name":"Chaos Bloom",
                "description":"A flower with erratic patterns that induces a deep sense of insanity.",
                "value":95,
                "effects":["frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_2.webp",
                "type":"ingredient"
            }
        ];

        const expectedName = "Frenzy venom"; //no modifier name, since least present modifier is nothing

        const potion = Cauldron.createPotion(ingredients);

        expect(potion.name).toBe(expectedName);
    })
})

describe("miscellaneous venom tests", () => {
    test("when there is an ingredient that is not frenzy or setback, the resulting potion is not a Venom", () => {
        const ingredients = [
            {
                "_id":"6702b53d76863c206a48cd3e",
                "name":"Madcap Mushroom",
                "description":"A twisted mushroom that drives the consumer to the edge of madness.",
                "value":285,
                "effects":["greater_frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_1.webp",
                "type":"ingredient"
            },
            {
                "_id":"6702b53d76863c206a48cd3e",
                "name":"Madcap Mushroom",
                "description":"A twisted mushroom that drives the consumer to the edge of madness.",
                "value":285,
                "effects":["greater_frenzy"],
                "image":"/images/ingredients/frenzy/frenzy_1.webp",
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

        const potion = Cauldron.createPotion(ingredients);

        expect(potion).not.toBeInstanceOf(Venom);
    })
})