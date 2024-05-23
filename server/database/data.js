const burgers = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    img: "classic_cheeseburger.jpg",
    price: 9.99,
    description:
      "A timeless favorite with a juicy beef patty, melted cheddar cheese, lettuce, tomato, onions, and pickles.",
    list_of_ingredients:
      "Beef patty, cheddar cheese, lettuce, tomato, onions, pickles, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 2,
    name: "Bacon Avocado Burger",
    img: "bacon_avocado_burger.jpg",
    price: 11.99,
    description:
      "Deluxe burger with crispy bacon, creamy avocado slices, lettuce, tomato, and mayonnaise.",
    list_of_ingredients:
      "Beef patty, bacon, avocado, lettuce, tomato, mayonnaise, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 3,
    name: "Mushroom Swiss Burger",
    img: "mushroom_swiss_burger.jpg",
    price: 10.99,
    description:
      "Savory burger topped with sautéed mushrooms, melted Swiss cheese, lettuce, and mayonnaise.",
    list_of_ingredients:
      "Beef patty, Swiss cheese, mushrooms, lettuce, mayonnaise, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 4,
    name: "BBQ Bacon Burger",
    img: "bbq_bacon_burger.jpg",
    price: 11.99,
    description:
      "Flavor-packed burger with barbecue sauce, crispy bacon, cheddar cheese, lettuce, and onions.",
    list_of_ingredients:
      "Beef patty, bacon, cheddar cheese, barbecue sauce, lettuce, onions, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 5,
    name: "Southwest Chipotle Burger",
    img: "southwest_chipotle_burger.jpg",
    price: 12.99,
    description:
      "spicy burger with chipotle mayo, pepper jack cheese, jalapeños, lettuce, and tomato.",
    list_of_ingredients:
      "Beef patty, pepper jack cheese, chipotle mayo, jalapeños, lettuce, tomato, burger bun",
    spicy: true,
    size: "medium",
  },
  {
    id: 6,
    name: "California Turkey Burger",
    img: "california_turkey_burger.jpg",
    price: 10.99,
    description:
      "Healthy and delicious burger with a turkey patty, avocado, lettuce, tomato, and sprouts.",
    list_of_ingredients:
      "Turkey patty, avocado, lettuce, tomato, sprouts, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 7,
    name: "Veggie Burger",
    img: "veggie_burger.jpg",
    price: 9.99,
    description:
      "Vegetarian delight! A flavorful veggie patty with lettuce, tomato, onions, pickles, and vegan mayo.",
    list_of_ingredients:
      "Veggie patty, lettuce, tomato, onions, pickles, vegan mayo, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 8,
    name: "Jalapeño Popper Burger",
    img: "jalapeno_popper_burger.jpg",
    price: 11.99,
    description:
      "spicy and indulgent burger with jalapeño poppers, cream cheese, lettuce, and chipotle aioli.",
    list_of_ingredients:
      "Beef patty, cream cheese, jalapeño poppers, lettuce, chipotle aioli, burger bun",
    spicy: true,
    size: "medium",
  },
  {
    id: 9,
    name: "Teriyaki Pineapple Burger",
    img: "teriyaki_pineapple_burger.jpg",
    price: 12.99,
    description:
      "Tropical twist on a burger with teriyaki sauce, grilled pineapple, Swiss cheese, lettuce, and tomato.",
    list_of_ingredients:
      "Beef patty, Swiss cheese, teriyaki sauce, grilled pineapple, lettuce, tomato, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 10,
    name: "Buffalo Chicken Burger",
    img: "buffalo_chicken_burger.jpg",
    price: 11.99,
    description:
      "Fiery burger featuring buffalo sauce, crispy chicken patty, blue cheese dressing, lettuce, and tomato.",
    list_of_ingredients:
      "Chicken patty, buffalo sauce, blue cheese dressing, lettuce, tomato, burger bun",
    spicy: true,
    size: "medium",
  },
  {
    id: 11,
    name: "Guacamole Bacon Burger",
    img: "guacamole_bacon_burger.jpg",
    price: 12.99,
    description:
      "Irresistible burger with guacamole, crispy bacon, pepper jack cheese, lettuce, and tomato.",
    list_of_ingredients:
      "Beef patty, pepper jack cheese, guacamole, bacon, lettuce, tomato, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 12,
    name: "Blue Cheese Burger",
    img: "blue_cheese_burger.jpg",
    price: 10.99,
    description:
      "Bold and tangy burger with creamy blue cheese, caramelized onions, lettuce, and tomato.",
    list_of_ingredients:
      "Beef patty, blue cheese, caramelized onions, lettuce, tomato, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 13,
    name: "BBQ Ranch Chicken Burger",
    img: "bbq_ranch_chicken_burger.jpg",
    price: 11.99,
    description:
      "Flavorful chicken burger with barbecue sauce, ranch dressing, lettuce, and crispy onion straws.",
    list_of_ingredients:
      "Chicken patty, barbecue sauce, ranch dressing, lettuce, onion straws, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 14,
    name: "Portobello Mushroom Burger",
    img: "portobello_mushroom_burger.jpg",
    price: 10.99,
    description:
      "Vegetarian burger featuring a juicy portobello mushroom cap, Swiss cheese, lettuce, and balsamic glaze.",
    list_of_ingredients:
      "Portobello mushroom cap, Swiss cheese, lettuce, balsamic glaze, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 15,
    name: "Cajun Turkey Burger",
    img: "cajun_turkey_burger.jpg",
    price: 10.99,
    description:
      "spicy and flavorful turkey burger seasoned with Cajun spices, topped with pepper jack cheese, lettuce, and chipotle mayo.",
    list_of_ingredients:
      "Turkey patty, pepper jack cheese, Cajun spices, lettuce, chipotle mayo, burger bun",
    spicy: true,
    size: "medium",
  },
  {
    id: 16,
    name: "Caprese Burger",
    img: "caprese_burger.jpg",
    price: 11.99,
    description:
      "Fresh and elegant burger with juicy beef patty, mozzarella cheese, tomato, basil pesto, and balsamic glaze.",
    list_of_ingredients:
      "Beef patty, mozzarella cheese, tomato, basil pesto, balsamic glaze, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 17,
    name: "Black Bean Burger",
    img: "black_bean_burger.jpg",
    price: 9.99,
    description:
      "Vegetarian burger made with hearty black beans, topped with pepper jack cheese, lettuce, tomato, and chipotle aioli.",
    list_of_ingredients:
      "Black bean patty, pepper jack cheese, lettuce, tomato, chipotle aioli, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 18,
    name: "Hawaiian Chicken Burger",
    img: "hawaiian_chicken_burger.jpg",
    price: 11.99,
    description:
      "Tropical burger with grilled chicken, grilled pineapple, teriyaki sauce, lettuce, and mayo.",
    list_of_ingredients:
      "Chicken patty, grilled pineapple, teriyaki sauce, lettuce, mayo, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 19,
    name: "spicy Sriracha Burger",
    img: "spicy_sriracha_burger.jpg",
    price: 11.99,
    description:
      "Fiery burger with spicy sriracha sauce, pepper jack cheese, jalapeños, lettuce, and chipotle aioli.",
    list_of_ingredients:
      "Beef patty, pepper jack cheese, sriracha sauce, jalapeños, lettuce, chipotle aioli, burger bun",
    spicy: true,
    size: "medium",
  },
  {
    id: 20,
    name: "Mediterranean Lamb Burger",
    img: "mediterranean_lamb_burger.jpg",
    price: 12.99,
    description:
      "Exotic burger with juicy lamb patty, tzatziki sauce, feta cheese, lettuce, and tomato.",
    list_of_ingredients:
      "Lamb patty, tzatziki sauce, feta cheese, lettuce, tomato, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 21,
    name: "The Works Burger",
    img: "the_works_burger.jpg",
    price: 13.99,
    description:
      "Loaded burger with all the fixings! Beef patty, bacon, fried egg, onion rings, cheddar cheese, lettuce, and tomato.",
    list_of_ingredients:
      "Beef patty, bacon, fried egg, onion rings, cheddar cheese, lettuce, tomato, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 22,
    name: "Gourmet Veggie Burger",
    img: "gourmet_veggie_burger.jpg",
    price: 10.99,
    description:
      "Upscale veggie burger with quinoa patty, roasted red pepper, arugula, goat cheese, and balsamic glaze.",
    list_of_ingredients:
      "Quinoa patty, roasted red pepper, arugula, goat cheese, balsamic glaze, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 23,
    name: "Philly Cheesesteak Burger",
    img: "philly_cheesesteak_burger.jpg",
    price: 12.99,
    description:
      "Burger version of the Philly classic! Beef patty, grilled peppers and onions, provolone cheese, and mayo.",
    list_of_ingredients:
      "Beef patty, grilled peppers, grilled onions, provolone cheese, mayo, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 24,
    name: "Thai Peanut Chicken Burger",
    img: "thai_peanut_chicken_burger.jpg",
    price: 12.99,
    description:
      "Exotic burger with Thai peanut sauce, grilled chicken, shredded cabbage, cilantro, and lime wedges.",
    list_of_ingredients:
      "Chicken patty, Thai peanut sauce, shredded cabbage, cilantro, lime wedges, burger bun",
    spicy: true,
    size: "medium",
  },
  {
    id: 25,
    name: "Honey Mustard Turkey Burger",
    img: "honey_mustard_turkey_burger.jpg",
    price: 11.99,
    description:
      "Savory turkey burger with honey mustard sauce, Swiss cheese, lettuce, and tomato.",
    list_of_ingredients:
      "Turkey patty, honey mustard sauce, Swiss cheese, lettuce, tomato, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 26,
    name: "Cajun Shrimp Burger",
    img: "cajun_shrimp_burger.jpg",
    price: 13.99,
    description:
      "Zesty burger with Cajun seasoned shrimp, remoulade sauce, lettuce, and tomato.",
    list_of_ingredients:
      "Shrimp patty, Cajun seasoning, remoulade sauce, lettuce, tomato, burger bun",
    spicy: true,
    size: "medium",
  },
  {
    id: 27,
    name: "Fiesta Black Bean Burger",
    img: "fiesta_black_bean_burger.jpg",
    price: 10.99,
    description:
      "spicy black bean burger with salsa, pepper jack cheese, lettuce, and avocado.",
    list_of_ingredients:
      "Black bean patty, salsa, pepper jack cheese, lettuce, avocado, burger bun",
    spicy: true,
    size: "medium",
  },
  {
    id: 28,
    name: "Pesto Chicken Burger",
    img: "pesto_chicken_burger.jpg",
    price: 12.99,
    description:
      "Fresh and flavorful burger with basil pesto, grilled chicken, sun-dried tomatoes, and arugula.",
    list_of_ingredients:
      "Chicken patty, basil pesto, sun-dried tomatoes, arugula, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 29,
    name: "Mediterranean Lamb Burger",
    img: "mediterranean_lamb_burger.jpg",
    price: 12.99,
    description:
      "Exotic burger with juicy lamb patty, tzatziki sauce, feta cheese, lettuce, and tomato.",
    list_of_ingredients:
      "Lamb patty, tzatziki sauce, feta cheese, lettuce, tomato, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 30,
    name: "Chicken Caesar Burger",
    img: "chicken_caesar_burger.jpg",
    price: 11.99,
    description:
      "Classic Caesar salad flavors on a burger! Grilled chicken, romaine lettuce, parmesan cheese, and Caesar dressing.",
    list_of_ingredients:
      "Grilled chicken, romaine lettuce, parmesan cheese, Caesar dressing, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 31,
    name: "Jalapeño Guacamole Burger",
    img: "jalapeno_guacamole_burger.jpg",
    price: 12.99,
    description:
      "spicy and creamy burger with jalapeño guacamole, pepper jack cheese, lettuce, and tomato.",
    list_of_ingredients:
      "Beef patty, pepper jack cheese, jalapeño guacamole, lettuce, tomato, burger bun",
    spicy: true,
    size: "medium",
  },
  {
    id: 32,
    name: "Caprese Chicken Burger",
    img: "caprese_chicken_burger.jpg",
    price: 12.99,
    description:
      "Fresh and elegant burger with grilled chicken, mozzarella cheese, tomato, basil pesto, and balsamic glaze.",
    list_of_ingredients:
      "Grilled chicken, mozzarella cheese, tomato, basil pesto, balsamic glaze, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 33,
    name: "Turkey Club Burger",
    img: "turkey_club_burger.jpg",
    price: 11.99,
    description:
      "Tasty turkey burger with crispy bacon, Swiss cheese, lettuce, tomato, and mayonnaise.",
    list_of_ingredients:
      "Turkey patty, bacon, Swiss cheese, lettuce, tomato, mayonnaise, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 34,
    name: "Portobello Swiss Burger",
    img: "portobello_swiss_burger.jpg",
    price: 11.99,
    description:
      "Vegetarian burger with grilled portobello mushroom, Swiss cheese, lettuce, and garlic aioli.",
    list_of_ingredients:
      "Portobello mushroom, Swiss cheese, lettuce, garlic aioli, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 35,
    name: "Blue Cheese Bacon Burger",
    img: "blue_cheese_bacon_burger.jpg",
    price: 12.99,
    description:
      "Bold and flavorful burger with blue cheese crumbles, crispy bacon, lettuce, and tomato.",
    list_of_ingredients:
      "Beef patty, blue cheese crumbles, bacon, lettuce, tomato, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 36,
    name: "Pineapple Teriyaki Chicken Burger",
    img: "pineapple_teriyaki_chicken_burger.jpg",
    price: 12.99,
    description:
      "Tropical burger with grilled chicken, teriyaki sauce, grilled pineapple, lettuce, and mayo.",
    list_of_ingredients:
      "Grilled chicken, teriyaki sauce, grilled pineapple, lettuce, mayo, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 37,
    name: "Chili Cheeseburger",
    img: "chili_cheeseburger.jpg",
    price: 11.99,
    description:
      "Hearty burger with beef chili, cheddar cheese, lettuce, and onions.",
    list_of_ingredients:
      "Beef patty, beef chili, cheddar cheese, lettuce, onions, burger bun",
    spicy: true,
    size: "medium",
  },
  {
    id: 38,
    name: "Hawaiian Turkey Burger",
    img: "hawaiian_turkey_burger.jpg",
    price: 11.99,
    description:
      "Tropical twist on a turkey burger with grilled pineapple, Swiss cheese, lettuce, and teriyaki mayo.",
    list_of_ingredients:
      "Turkey patty, grilled pineapple, Swiss cheese, lettuce, teriyaki mayo, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 39,
    name: "Black and Bleu Burger",
    img: "black_and_bleu_burger.jpg",
    price: 12.99,
    description:
      "Bold burger with blackened beef patty, tangy blue cheese, lettuce, and tomato.",
    list_of_ingredients:
      "Blackened beef patty, blue cheese, lettuce, tomato, burger bun",
    spicy: true,
    size: "medium",
  },
  {
    id: 40,
    name: "Chipotle Turkey Burger",
    img: "chipotle_turkey_burger.jpg",
    price: 11.99,
    description:
      "spicy and flavorful turkey burger with chipotle mayo, pepper jack cheese, lettuce, and tomato.",
    list_of_ingredients:
      "Turkey patty, chipotle mayo, pepper jack cheese, lettuce, tomato, burger bun",
    spicy: true,
    size: "medium",
  },
  {
    id: 41,
    name: "BBQ Bacon Ranch Burger",
    img: "bbq_bacon_ranch_burger.jpg",
    price: 12.99,
    description:
      "Delicious burger with barbecue sauce, crispy bacon, ranch dressing, lettuce, and tomato.",
    list_of_ingredients:
      "Beef patty, bacon, barbecue sauce, ranch dressing, lettuce, tomato, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 42,
    name: "Teriyaki Salmon Burger",
    img: "teriyaki_salmon_burger.jpg",
    price: 13.99,
    description:
      "Healthy and flavorful burger with teriyaki glazed salmon, lettuce, tomato, and wasabi mayo.",
    list_of_ingredients:
      "Salmon patty, teriyaki glaze, lettuce, tomato, wasabi mayo, burger bun",
    spicy: true,
    size: "medium",
  },
  {
    id: 43,
    name: "Buffalo Blue Chicken Burger",
    img: "buffalo_blue_chicken_burger.jpg",
    price: 12.99,
    description:
      "spicy chicken burger with buffalo sauce, blue cheese crumbles, lettuce, and tomato.",
    list_of_ingredients:
      "Chicken patty, buffalo sauce, blue cheese crumbles, lettuce, tomato, burger bun",
    spicy: true,
    size: "medium",
  },
  {
    id: 44,
    name: "Sriracha Honey Chicken Burger",
    img: "sriracha_honey_chicken_burger.jpg",
    price: 12.99,
    description:
      "Sweet and spicy chicken burger with sriracha honey sauce, lettuce, and pickles.",
    list_of_ingredients:
      "Chicken patty, sriracha honey sauce, lettuce, pickles, burger bun",
    spicy: true,
    size: "medium",
  },
  {
    id: 45,
    name: "Greek Lamb Burger",
    img: "greek_lamb_burger.jpg",
    price: 13.99,
    description:
      "Mediterranean-inspired burger with juicy lamb patty, tzatziki sauce, feta cheese, lettuce, and tomato.",
    list_of_ingredients:
      "Lamb patty, tzatziki sauce, feta cheese, lettuce, tomato, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 46,
    name: "Balsamic Portobello Burger",
    img: "balsamic_portobello_burger.jpg",
    price: 11.99,
    description:
      "Vegetarian burger with balsamic marinated portobello mushroom, Swiss cheese, lettuce, and tomato.",
    list_of_ingredients:
      "Portobello mushroom, Swiss cheese, lettuce, tomato, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 47,
    name: "Sweet Potato Veggie Burger",
    img: "sweet_potato_veggie_burger.jpg",
    price: 10.99,
    description:
      "Healthy and satisfying veggie burger with a sweet potato patty, avocado, lettuce, and tomato.",
    list_of_ingredients:
      "Sweet potato patty, avocado, lettuce, tomato, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 48,
    name: "Feta Turkey Burger",
    img: "feta_turkey_burger.jpg",
    price: 11.99,
    description:
      "Flavorful turkey burger with crumbled feta cheese, roasted red peppers, lettuce, and tzatziki sauce.",
    list_of_ingredients:
      "Turkey patty, feta cheese, roasted red peppers, lettuce, tzatziki sauce, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 49,
    name: "BBQ Pulled Pork Burger",
    img: "bbq_pulled_pork_burger.jpg",
    price: 12.99,
    description:
      "Hearty burger with tender barbecue pulled pork, coleslaw, cheddar cheese, and pickles.",
    list_of_ingredients:
      "Barbecue pulled pork, coleslaw, cheddar cheese, pickles, burger bun",
    spicy: false,
    size: "medium",
  },
  {
    id: 50,
    name: "Turkey Cranberry Burger",
    img: "turkey_cranberry_burger.jpg",
    price: 11.99,
    description:
      "Festive burger with turkey patty, cranberry sauce, brie cheese, lettuce, and arugula.",
    list_of_ingredients:
      "Turkey patty, cranberry sauce, brie cheese, lettuce, arugula, burger bun",
    spicy: false,
    size: "medium",
  },
];

module.exports = burgers;
