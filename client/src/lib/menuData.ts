// Comprehensive Vegetarian Catering Menu Data
// All prices are per person in INR

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  pricePerPerson: number;
  veg: boolean;
}

export interface MenuData {
  [category: string]: MenuItem[];
}

export const categorizedMenuItems: MenuData = {
  "Starters": [
    {
      id: "paneerTikka",
      name: "Paneer Tikka",
      description: "Marinated cottage cheese grilled to perfection",
      pricePerPerson: 120,
      veg: true
    },
    {
      id: "haraBharaKabab",
      name: "Hara Bhara Kabab",
      description: "Spinach and green peas patties with aromatic spices",
      pricePerPerson: 90,
      veg: true
    },
    {
      id: "vegManchurianDry",
      name: "Veg Manchurian (Dry)",
      description: "Crispy vegetable balls tossed in Indo-Chinese sauce",
      pricePerPerson: 100,
      veg: true
    },
    {
      id: "alooTikki",
      name: "Aloo Tikki",
      description: "Crispy potato patties with tangy chutneys",
      pricePerPerson: 70,
      veg: true
    },
    {
      id: "vegSpringRoll",
      name: "Veg Spring Roll",
      description: "Crispy rolls filled with seasoned vegetables",
      pricePerPerson: 85,
      veg: true
    },
    {
      id: "gobi65",
      name: "Gobi 65",
      description: "Spicy deep-fried cauliflower South Indian style",
      pricePerPerson: 95,
      veg: true
    },
    {
      id: "paniPuri",
      name: "Pani Puri",
      description: "Crispy puris with tangy tamarind water and potato filling",
      pricePerPerson: 60,
      veg: true
    },
    {
      id: "dahiPuri",
      name: "Dahi Puri",
      description: "Crispy puris topped with yogurt and sweet chutney",
      pricePerPerson: 65,
      veg: true
    },
    {
      id: "sevPuri",
      name: "Sev Puri",
      description: "Crispy puris topped with potatoes, chutneys, and sev",
      pricePerPerson: 65,
      veg: true
    },
    {
      id: "samosaChaat",
      name: "Samosa Chaat",
      description: "Crushed samosas with chickpeas, yogurt, and chutneys",
      pricePerPerson: 80,
      veg: true
    },
    {
      id: "pakora",
      name: "Mixed Pakora",
      description: "Assorted vegetable fritters with mint chutney",
      pricePerPerson: 70,
      veg: true
    },
    {
      id: "cornChaat",
      name: "Sweet Corn Chaat",
      description: "Spicy and tangy sweet corn with Indian spices",
      pricePerPerson: 75,
      veg: true
    }
  ],

  "Main Course": [
    {
      id: "paneerButterMasala",
      name: "Paneer Butter Masala",
      description: "Cottage cheese in rich creamy tomato gravy",
      pricePerPerson: 130,
      veg: true
    },
    {
      id: "paneerTikkaGravy",
      name: "Paneer Tikka Masala",
      description: "Grilled paneer in spiced tomato-onion gravy",
      pricePerPerson: 135,
      veg: true
    },
    {
      id: "kadaiPaneer",
      name: "Kadai Paneer",
      description: "Paneer cooked with bell peppers and aromatic spices",
      pricePerPerson: 125,
      veg: true
    },
    {
      id: "palakPaneer",
      name: "Palak Paneer",
      description: "Cottage cheese in creamy spinach gravy",
      pricePerPerson: 120,
      veg: true
    },
    {
      id: "shahiPaneer",
      name: "Shahi Paneer",
      description: "Royal paneer curry with nuts and cream",
      pricePerPerson: 140,
      veg: true
    },
    {
      id: "malaiKofta",
      name: "Malai Kofta",
      description: "Cottage cheese and potato dumplings in creamy gravy",
      pricePerPerson: 125,
      veg: true
    },
    {
      id: "navratanKorma",
      name: "Navratan Korma",
      description: "Nine-gem mixed vegetables in mild creamy gravy",
      pricePerPerson: 115,
      veg: true
    },
    {
      id: "mixVegCurry",
      name: "Mix Veg Curry",
      description: "Assorted seasonal vegetables in aromatic curry",
      pricePerPerson: 100,
      veg: true
    },
    {
      id: "alooGobi",
      name: "Aloo Gobi",
      description: "Potato and cauliflower dry curry with spices",
      pricePerPerson: 90,
      veg: true
    },
    {
      id: "bhindi",
      name: "Bhindi Masala",
      description: "Stir-fried okra with onions and spices",
      pricePerPerson: 95,
      veg: true
    },
    {
      id: "bainganBharta",
      name: "Baingan Bharta",
      description: "Roasted eggplant mashed with tomatoes and spices",
      pricePerPerson: 100,
      veg: true
    },
    {
      id: "undhiyu",
      name: "Undhiyu",
      description: "Traditional Gujarati mixed vegetable curry",
      pricePerPerson: 120,
      veg: true
    },
    {
      id: "choleBhature",
      name: "Chole (for Bhature)",
      description: "Spicy chickpea curry North Indian style",
      pricePerPerson: 85,
      veg: true
    },
    {
      id: "rajmaGravy",
      name: "Rajma Masala",
      description: "Red kidney beans in thick tomato-onion gravy",
      pricePerPerson: 90,
      veg: true
    },
    {
      id: "mushroom",
      name: "Mushroom Masala",
      description: "Button mushrooms in spiced onion-tomato gravy",
      pricePerPerson: 110,
      veg: true
    }
  ],

  "Breads": [
    {
      id: "butterNaan",
      name: "Butter Naan",
      description: "Soft leavened bread brushed with butter",
      pricePerPerson: 25,
      veg: true
    },
    {
      id: "plainNaan",
      name: "Plain Naan",
      description: "Traditional tandoor-baked flatbread",
      pricePerPerson: 20,
      veg: true
    },
    {
      id: "garlicNaan",
      name: "Garlic Naan",
      description: "Naan topped with fresh garlic and coriander",
      pricePerPerson: 30,
      veg: true
    },
    {
      id: "stuffedNaan",
      name: "Stuffed Naan",
      description: "Naan filled with spiced potato or paneer",
      pricePerPerson: 35,
      veg: true
    },
    {
      id: "tandooriRoti",
      name: "Tandoori Roti",
      description: "Whole wheat bread cooked in tandoor",
      pricePerPerson: 15,
      veg: true
    },
    {
      id: "butterRoti",
      name: "Butter Roti",
      description: "Whole wheat roti brushed with butter",
      pricePerPerson: 18,
      veg: true
    },
    {
      id: "lachhaParatha",
      name: "Lachha Paratha",
      description: "Multi-layered crispy whole wheat flatbread",
      pricePerPerson: 30,
      veg: true
    },
    {
      id: "alooParatha",
      name: "Aloo Paratha",
      description: "Flatbread stuffed with spiced potato filling",
      pricePerPerson: 35,
      veg: true
    },
    {
      id: "gobishParatha",
      name: "Gobi Paratha",
      description: "Flatbread stuffed with seasoned cauliflower",
      pricePerPerson: 35,
      veg: true
    },
    {
      id: "paneerParatha",
      name: "Paneer Paratha",
      description: "Flatbread stuffed with spiced cottage cheese",
      pricePerPerson: 40,
      veg: true
    },
    {
      id: "puri",
      name: "Puri",
      description: "Deep-fried puffed whole wheat bread",
      pricePerPerson: 20,
      veg: true
    },
    {
      id: "bhatura",
      name: "Bhatura",
      description: "Large deep-fried leavened bread",
      pricePerPerson: 25,
      veg: true
    },
    {
      id: "bhakri",
      name: "Bhakri",
      description: "Traditional Gujarati millet flatbread",
      pricePerPerson: 20,
      veg: true
    },
    {
      id: "thepla",
      name: "Thepla",
      description: "Spiced fenugreek flatbread Gujarati style",
      pricePerPerson: 22,
      veg: true
    }
  ],

  "Rice & Pulav": [
    {
      id: "vegBiryani",
      name: "Veg Biryani",
      description: "Fragrant basmati rice layered with spiced vegetables",
      pricePerPerson: 120,
      veg: true
    },
    {
      id: "paneerBiryani",
      name: "Paneer Biryani",
      description: "Aromatic rice cooked with cottage cheese and spices",
      pricePerPerson: 135,
      veg: true
    },
    {
      id: "hyderabadiBiryani",
      name: "Hyderabadi Veg Biryani",
      description: "Dum-cooked biryani with authentic Hyderabadi spices",
      pricePerPerson: 130,
      veg: true
    },
    {
      id: "vegPulav",
      name: "Veg Pulav",
      description: "Mildly spiced basmati rice with mixed vegetables",
      pricePerPerson: 90,
      veg: true
    },
    {
      id: "jehangiriPulav",
      name: "Jehangiri Pulav",
      description: "Royal pulav with nuts, fruits, and aromatic spices",
      pricePerPerson: 110,
      veg: true
    },
    {
      id: "kashmiriPulav",
      name: "Kashmiri Pulav",
      description: "Sweet and savory rice with dry fruits and saffron",
      pricePerPerson: 115,
      veg: true
    },
    {
      id: "peaPulav",
      name: "Matar Pulav",
      description: "Fragrant rice cooked with green peas",
      pricePerPerson: 85,
      veg: true
    },
    {
      id: "mushroomPulav",
      name: "Mushroom Pulav",
      description: "Aromatic rice with button mushrooms and spices",
      pricePerPerson: 100,
      veg: true
    },
    {
      id: "plainRice",
      name: "Steamed Rice",
      description: "Plain steamed basmati rice",
      pricePerPerson: 50,
      veg: true
    },
    {
      id: "jeeraRice",
      name: "Jeera Rice",
      description: "Cumin-flavored basmati rice",
      pricePerPerson: 65,
      veg: true
    },
    {
      id: "lemonRice",
      name: "Lemon Rice",
      description: "Tangy South Indian rice with lemon and tempering",
      pricePerPerson: 70,
      veg: true
    },
    {
      id: "tamarindRice",
      name: "Tamarind Rice",
      description: "Tangy rice with tamarind and peanuts",
      pricePerPerson: 75,
      veg: true
    },
    {
      id: "coconutRice",
      name: "Coconut Rice",
      description: "South Indian rice with fresh coconut and spices",
      pricePerPerson: 70,
      veg: true
    }
  ],

  "Dal & Kadhi": [
    {
      id: "dalTadka",
      name: "Dal Tadka",
      description: "Yellow lentils tempered with ghee and spices",
      pricePerPerson: 70,
      veg: true
    },
    {
      id: "dalFry",
      name: "Dal Fry",
      description: "Mixed lentils cooked with tomatoes and spices",
      pricePerPerson: 75,
      veg: true
    },
    {
      id: "dalMakhani",
      name: "Dal Makhani",
      description: "Black lentils in rich creamy tomato gravy",
      pricePerPerson: 95,
      veg: true
    },
    {
      id: "gujaratiDal",
      name: "Gujarati Dal",
      description: "Sweet and tangy toor dal with jaggery tempering",
      pricePerPerson: 70,
      veg: true
    },
    {
      id: "gujaratiKadhi",
      name: "Gujarati Kadhi",
      description: "Sweet and tangy yogurt curry with gram flour dumplings",
      pricePerPerson: 80,
      veg: true
    },
    {
      id: "punjabikadhi",
      name: "Punjabi Kadhi",
      description: "Spiced yogurt curry with pakoras",
      pricePerPerson: 85,
      veg: true
    },
    {
      id: "sambar",
      name: "Sambar",
      description: "South Indian lentil and vegetable stew",
      pricePerPerson: 75,
      veg: true
    },
    {
      id: "panchmelDal",
      name: "Panchmel Dal",
      description: "Five mixed lentils cooked with aromatic spices",
      pricePerPerson: 80,
      veg: true
    }
  ],

  "Sides": [
    {
      id: "boondiRaita",
      name: "Boondi Raita",
      description: "Yogurt with crispy gram flour pearls and spices",
      pricePerPerson: 40,
      veg: true
    },
    {
      id: "cucumberRaita",
      name: "Cucumber Raita",
      description: "Refreshing yogurt with grated cucumber and cumin",
      pricePerPerson: 35,
      veg: true
    },
    {
      id: "mixRaita",
      name: "Mix Veg Raita",
      description: "Yogurt with assorted vegetables and spices",
      pricePerPerson: 40,
      veg: true
    },
    {
      id: "plainRaita",
      name: "Plain Raita",
      description: "Seasoned yogurt with cumin and coriander",
      pricePerPerson: 30,
      veg: true
    },
    {
      id: "pineappleRaita",
      name: "Pineapple Raita",
      description: "Sweet and tangy yogurt with pineapple chunks",
      pricePerPerson: 45,
      veg: true
    },
    {
      id: "roastedPapad",
      name: "Roasted Papad",
      description: "Crispy flame-roasted lentil wafers",
      pricePerPerson: 15,
      veg: true
    },
    {
      id: "friedPapad",
      name: "Fried Papad",
      description: "Deep-fried crispy lentil wafers",
      pricePerPerson: 15,
      veg: true
    },
    {
      id: "masalaPapad",
      name: "Masala Papad",
      description: "Crispy papad topped with onion-tomato masala",
      pricePerPerson: 25,
      veg: true
    },
    {
      id: "greenSalad",
      name: "Green Salad",
      description: "Fresh cucumber, tomato, and onion with lemon",
      pricePerPerson: 30,
      veg: true
    },
    {
      id: "kachumberSalad",
      name: "Kachumber Salad",
      description: "Finely chopped vegetables with tangy dressing",
      pricePerPerson: 35,
      veg: true
    },
    {
      id: "russianSalad",
      name: "Russian Salad",
      description: "Creamy mixed vegetable salad with mayonnaise",
      pricePerPerson: 45,
      veg: true
    },
    {
      id: "mixPickle",
      name: "Mix Pickle",
      description: "Assorted vegetables in tangy spicy pickle",
      pricePerPerson: 20,
      veg: true
    },
    {
      id: "lemonPickle",
      name: "Lemon Pickle",
      description: "Spicy and tangy preserved lemon pickle",
      pricePerPerson: 20,
      veg: true
    },
    {
      id: "mangoPickle",
      name: "Mango Pickle",
      description: "Traditional spicy raw mango pickle",
      pricePerPerson: 20,
      veg: true
    },
    {
      id: "greenChutney",
      name: "Green Chutney",
      description: "Fresh mint and coriander chutney",
      pricePerPerson: 15,
      veg: true
    },
    {
      id: "tamarindChutney",
      name: "Tamarind Chutney",
      description: "Sweet and tangy imli chutney",
      pricePerPerson: 15,
      veg: true
    }
  ],

  "Desserts & Sweets": [
    {
      id: "gulabJamun",
      name: "Gulab Jamun",
      description: "Deep-fried milk solid balls soaked in sugar syrup",
      pricePerPerson: 50,
      veg: true
    },
    {
      id: "rasmalai",
      name: "Rasmalai",
      description: "Soft cottage cheese patties in sweetened saffron milk",
      pricePerPerson: 70,
      veg: true
    },
    {
      id: "rasgulla",
      name: "Rasgulla",
      description: "Soft spongy cheese balls in light sugar syrup",
      pricePerPerson: 55,
      veg: true
    },
    {
      id: "shrikhand",
      name: "Shrikhand",
      description: "Sweetened hung yogurt with saffron and cardamom",
      pricePerPerson: 60,
      veg: true
    },
    {
      id: "kheer",
      name: "Rice Kheer",
      description: "Traditional rice pudding with milk and dry fruits",
      pricePerPerson: 55,
      veg: true
    },
    {
      id: "sewaiKheer",
      name: "Sewai Kheer",
      description: "Vermicelli pudding with milk and nuts",
      pricePerPerson: 55,
      veg: true
    },
    {
      id: "gajarHalwa",
      name: "Gajar Halwa",
      description: "Carrot pudding cooked in milk and ghee with nuts",
      pricePerPerson: 65,
      veg: true
    },
    {
      id: "moongDalHalwa",
      name: "Moong Dal Halwa",
      description: "Rich lentil pudding with ghee and dry fruits",
      pricePerPerson: 70,
      veg: true
    },
    {
      id: "soojiHalwa",
      name: "Sooji Halwa",
      description: "Semolina pudding with ghee and cardamom",
      pricePerPerson: 50,
      veg: true
    },
    {
      id: "jaleebi",
      name: "Jalebi",
      description: "Crispy deep-fried sweet spirals in sugar syrup",
      pricePerPerson: 50,
      veg: true
    },
    {
      id: "rabdi",
      name: "Rabdi",
      description: "Thickened sweetened milk with cardamom and nuts",
      pricePerPerson: 65,
      veg: true
    },
    {
      id: "kulfi",
      name: "Kulfi",
      description: "Traditional Indian ice cream with pistachios",
      pricePerPerson: 60,
      veg: true
    },
    {
      id: "fruitCustard",
      name: "Fruit Custard",
      description: "Creamy custard with fresh seasonal fruits",
      pricePerPerson: 55,
      veg: true
    },
    {
      id: "basundi",
      name: "Basundi",
      description: "Gujarati-style sweetened thickened milk with nuts",
      pricePerPerson: 60,
      veg: true
    },
    {
      id: "motichurLadoo",
      name: "Motichur Ladoo",
      description: "Sweet gram flour pearls shaped into round balls",
      pricePerPerson: 45,
      veg: true
    },
    {
      id: "besan",
      name: "Besan Ladoo",
      description: "Gram flour balls sweetened with ghee and sugar",
      pricePerPerson: 45,
      veg: true
    },
    {
      id: "kaju",
      name: "Kaju Katli",
      description: "Diamond-shaped cashew fudge with silver leaf",
      pricePerPerson: 85,
      veg: true
    },
    {
      id: "peda",
      name: "Peda",
      description: "Soft milk-based sweet with cardamom flavor",
      pricePerPerson: 50,
      veg: true
    },
    {
      id: "barfi",
      name: "Barfi (Assorted)",
      description: "Milk-based sweet fudge in various flavors",
      pricePerPerson: 60,
      veg: true
    }
  ],

  "Beverages": [
    {
      id: "masalaChaas",
      name: "Masala Chaas",
      description: "Spiced buttermilk with cumin and coriander",
      pricePerPerson: 25,
      veg: true
    },
    {
      id: "sweetChaas",
      name: "Sweet Chaas",
      description: "Lightly sweetened buttermilk with cardamom",
      pricePerPerson: 25,
      veg: true
    },
    {
      id: "plainChaas",
      name: "Plain Chaas",
      description: "Traditional simple buttermilk drink",
      pricePerPerson: 20,
      veg: true
    },
    {
      id: "mangoLassi",
      name: "Mango Lassi",
      description: "Sweet mango yogurt smoothie",
      pricePerPerson: 45,
      veg: true
    },
    {
      id: "sweetLassi",
      name: "Sweet Lassi",
      description: "Sweetened yogurt drink with cardamom",
      pricePerPerson: 35,
      veg: true
    },
    {
      id: "saltyLassi",
      name: "Salted Lassi",
      description: "Savory yogurt drink with cumin",
      pricePerPerson: 35,
      veg: true
    },
    {
      id: "masalaTea",
      name: "Masala Chai",
      description: "Spiced Indian tea with milk and aromatic spices",
      pricePerPerson: 20,
      veg: true
    },
    {
      id: "plainTea",
      name: "Plain Tea",
      description: "Traditional Indian milk tea",
      pricePerPerson: 15,
      veg: true
    },
    {
      id: "coffee",
      name: "Coffee",
      description: "Hot milk coffee Indian style",
      pricePerPerson: 20,
      veg: true
    },
    {
      id: "jalJeera",
      name: "Jal Jeera",
      description: "Tangy cumin water with mint and spices",
      pricePerPerson: 25,
      veg: true
    },
    {
      id: "nimbuPani",
      name: "Nimbu Pani",
      description: "Fresh lemonade sweet or salted",
      pricePerPerson: 25,
      veg: true
    },
    {
      id: "roohAfza",
      name: "Rooh Afza",
      description: "Rose-flavored sweet syrup drink with milk",
      pricePerPerson: 30,
      veg: true
    },
    {
      id: "badam",
      name: "Badam Milk",
      description: "Warm almond-flavored sweetened milk",
      pricePerPerson: 40,
      veg: true
    },
    {
      id: "thandai",
      name: "Thandai",
      description: "Festive milk drink with nuts and saffron",
      pricePerPerson: 50,
      veg: true
    },
    {
      id: "sugarcaneJuice",
      name: "Sugarcane Juice",
      description: "Fresh sugarcane juice with lemon and ginger",
      pricePerPerson: 30,
      veg: true
    },
    {
      id: "coconutWater",
      name: "Coconut Water",
      description: "Fresh tender coconut water",
      pricePerPerson: 35,
      veg: true
    }
  ]
};

export type Category = keyof typeof categorizedMenuItems;

// Helper function to get all menu items as a flat array
export const getAllMenuItems = (): MenuItem[] => {
  return Object.values(categorizedMenuItems).flat();
};

// Helper function to get item by ID
export const getItemById = (id: string): MenuItem | null => {
  for (const category in categorizedMenuItems) {
    const found = categorizedMenuItems[category as Category].find(
      (item) => item.id === id
    );
    if (found) return found;
  }
  return null;
};

// Helper function to get all categories
export const getCategories = (): Category[] => {
  return Object.keys(categorizedMenuItems) as Category[];
};
