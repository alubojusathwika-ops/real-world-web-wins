export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: "signature" | "vegetarian" | "new";
};

export type MenuSection = {
  title: string;
  blurb: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    title: "To Begin",
    blurb: "Small plates to share while the fire settles.",
    items: [
      { name: "Wood-fired flatbread", description: "Whipped feta, honey, wild thyme, cracked pepper", price: "£9", tag: "vegetarian" },
      { name: "Charred octopus", description: "Smoked paprika, confit potato, salsa verde", price: "£14", tag: "signature" },
      { name: "Burrata & stone fruit", description: "Grilled peach, basil oil, aged balsamic", price: "£12", tag: "vegetarian" },
      { name: "Lamb kofta", description: "Sumac yoghurt, pickled onion, coriander", price: "£11" },
    ],
  },
  {
    title: "From the Fire",
    blurb: "Cooked over olive wood at 400°C.",
    items: [
      { name: "Whole grilled branzino", description: "Lemon, capers, herb oil, roasted fennel", price: "£28", tag: "signature" },
      { name: "Rack of lamb", description: "Pomegranate glaze, charred aubergine, mint", price: "£32" },
      { name: "Half chicken al mattone", description: "Preserved lemon, garlic confit, rosemary", price: "£22" },
      { name: "Aubergine steak", description: "Miso glaze, tahini, crispy chickpeas", price: "£18", tag: "vegetarian" },
    ],
  },
  {
    title: "Pasta & Grains",
    blurb: "Hand-rolled daily in our open kitchen.",
    items: [
      { name: "Saffron tagliolini", description: "Prawns, dill butter, chilli, lemon zest", price: "£19", tag: "new" },
      { name: "Slow-braised beef pappardelle", description: "Red wine, tomato, parmesan", price: "£21" },
      { name: "Charred courgette risotto", description: "Preserved lemon, basil, pecorino", price: "£17", tag: "vegetarian" },
    ],
  },
  {
    title: "To Finish",
    blurb: "Sweet things and dessert wines.",
    items: [
      { name: "Olive oil cake", description: "Whipped mascarpone, candied orange", price: "£8" },
      { name: "Dark chocolate tart", description: "Sea salt, hazelnut praline, crème fraîche", price: "£9" },
      { name: "Affogato", description: "Vanilla gelato, double espresso, amaretto", price: "£7" },
    ],
  },
];
