const mongoose = require("mongoose");
mongoose.Promise = Promise;
const Crop = require("../models/crop");
const Task = require("../models/task");

let crops = [
  {
    name: "Tomato",
    category: "Veggie",
    image_url_thumb:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/tomato_thumb.jpg",
    image_url_header:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/tomato_header.jpg",
    short_desc:
      "The tomato is the edible, often red, vegetable of the plant Solanum lycopersicum, commonly known as a tomato plant.",
    difficulty_level: "Easy",
    best_season: "High spring",
    climate: "Warm weather"
  },
  {
    name: "Cucumber",
    category: "Veggie",
    image_url_thumb:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/cucumber_thumb.jpg",
    image_url_header:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/cucumber_header.jpg",
    short_desc:
      "Cucumber (Cucumis sativus) is a widely cultivated plant in the gourd family, Cucurbitaceae. It is a creeping vine that bears cucumiform fruits that are used as vegetables.",
    difficulty_level: "Easy",
    best_season: "High spring",
    climate: "Warm weather"
  },
  {
    name: "Spinach",
    category: "Veggie",
    image_url_thumb:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/spinach_thumb.jpg",
    image_url_header:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/spinach_header.jpg",
    short_desc:
      "Spinach (Spinacia oleracea) is an edible flowering plant in the family Amaranthaceae native to central and western Asia. Its leaves are eaten as a vegetable.",
    difficulty_level: "Easy",
    best_season: "Late summer",
    climate: "Cool weather"
  },
  {
    name: "Coriander",
    category: "Herb",
    image_url_thumb:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/coriander_thumb.jpg",
    image_url_header:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/coriander_header.jpg",
    short_desc:
      "Coriander, also known as cilantro (/sɪˈlɑːntroʊ/) or Chinese parsley, is an annual herb in the family Apiaceae. All parts of the plant are edible, but the fresh leaves and the dried seeds are the parts most traditionally used in cooking.",
    difficulty_level: "Easy",
    best_season: "Early spring",
    climate: "Warm weather"
  },
  {
    name: "Basil",
    category: "herb",
    image_url_thumb:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/basil_thumb.jpg",
    image_url_header:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/basil_header.jpg",
    short_desc:
      "Basil (Ocimum basilicum), also called great basil or Saint-Joseph's-wort, is a culinary herb of the family Lamiaceae (mints). The name 'basil' comes from Latin, Basilius, and Greek βασιλικόν φυτόν (basilikón phutón), 'royal/kingly plant'.",
    difficulty_level: "medium",
    best_season: "early spring",
    climate: "Warm weather"
  },
  {
    name: "Parsley",
    category: "Herb",
    image_url_thumb:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/parsley_thumb.jpg",
    image_url_header:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/parsley_header.jpg",
    short_desc:
      "Parsley or garden parsley (Petroselinum crispum) is a species of flowering plant in the family Apiaceae, native to the central Mediterranean region (southern Italy, Greece, Portugal, Spain, Malta, Morocco, Algeria, and Tunisia), naturalized elsewhere in Europe, and widely cultivated as an herb, a spice, and a vegetable.",
    difficulty_level: "easy",
    best_season: "Late winter",
    climate: "Warm weather"
  },
  {
    name: "Garlic",
    category: "veggie",
    image_ur_thumb:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/garlic_thumb.jpg",
    image_ur_header:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/garlic_header.jpg",
    short_desc:
      "Garlic (Allium sativum) is a species in the onion genus, Allium. Its close relatives include the onion, shallot, leek, chive, and Chinese onion. Garlic is native to Central Asia and northeastern Iran, and has long been a common seasoning worldwide, with a history of several thousand years of human consumption and use. It was known to ancient Egyptians, and has been used both as a food flavoring and as a traditional medicine.",
    difficulty_level: "easy",
    best_season: "Autumn",
    climate: "Mild weather"
  },
  {
    name: "strawberry",
    category: "berry",
    image_url_thumb:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/strawberry_thumb.jpg",
    image_url_header:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/strawberry_header.jpg",
    short_desc:
      "The garden strawberry (or simply strawberry; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries. It is cultivated worldwide for its fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness.",
    difficulty_level: "medium",
    best_season: "Early spring",
    climate: "Cold weather"
  },
  {
    name: "onion",
    category: "vegetable",
    image_url_header:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/clienthttps://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/onion_header.jpg",
    image_url_thumb:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/clienthttps://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/onion_thumb.jpg",
    short_desc:
      "The onion (Allium cepa L., from Latin cepa 'onion'), also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium. Its close relatives include the garlic, shallot, leek, chive, and Chinese onion.",
    difficulty_level: "medium",
    best_season: "Early spring",
    climate: "Cold weather"
  },
  {
    name: "raspberry",
    category: "berry",
    image_url_thumb:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/clienthttps://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/raspberry_thumb.jpg",
    image_url_header:
      "https://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/clienthttps://raw.githubusercontent.com/chingu-voyage4/Geckos-Team-12/develop/client/src/assets/images/raspberry_header.jpg",
    short_desc:
      "The raspberry is the edible fruit of a multitude of plant species in the genus Rubus of the rose family, most of which are in the subgenus Idaeobatus; the name also applies to these plants themselves. Raspberries are perennial with woody stems.",
    difficulty_level: "medium",
    best_season: "Winter",
    climate: "Cold weather"
  }
];

let tasks = [
  {
    name: "Harvest tomato seeds",
    score: 100,
    steps: [
      {
        title: "Select tomato variety",
        description: "Buy your favourite organic tomatoes variety",
        status: false
      },
      {
        title: "Extract seeds",
        description:
          "Wash your tomato, then cut it in half across the middle. Squeeze tomato seeds and juice into a container.",
        status: false
      },
      {
        title: "Let seeds to rest",
        description:
          "Allow the seed mixture to sit until the surface is partially covered with whitish mold (in 3 to 5 days). In warm climates, you may need to add a little water midway through the process to keep the seeds afloat. Scrape off the white mold with a spoon, being careful not to remove seeds.",
        status: false
      },
      {
        title: "Select the good seeds",
        description:
          "Fill the container with water, then stir; the good seeds will sink to the bottom.",
        status: false
      },
      {
        title: "Dry the seeds",
        description:
          "Sprinkle seeds onto a plate and allow them to dry for one to three days, depending on the weather. Keep them out of direct sun. To make sure they dry thoroughly and don’t stick together, stir twice a day.",
        status: false
      },
      {
        title: "Good Job",
        description: "You did it! You have harvested your first tomato seeds!",
        status: false
      }
    ],
    category: "Harvest",
    short_desc: "Easily harvest tomato seeds from your favorite tomato variety",
    difficulty_level: "Easy",
    crop_id: ""
  },
  {
    name: "Plant tomato seeds",
    score: 200,
    steps: [
      {
        title: "Start the seeds",
        description:
          "you can use plastic egg containers and starting mix to start your seeds.  Fill the trays with seed mix and firm the mix down into the cells.",
        status: false
      },
      {
        title: "Germination",
        description:
          "Keep your trays moist and warm to speed germination. Loosely fit plastic wrap over the tops of the trays, to keep water in but still allow for air circulation. Light is not required to germinate seeds.",
        status: false
      },
      {
        title: "Care for the Young Seedlings",
        description:
          "Keep the seedlings watered - not overwatered, but don't let them get so dry they wilt, either.",
        status: false
      },
      {
        title: "Potting up",
        description:
          "When your tomato seedlings are showing their first set of true leaves, it's time to put them in individual pots.",
        status: false
      },
      {
        title: "Good Job",
        description: "You did it! You have planted your first tomato seeds!",
        status: false
      }
    ],
    category: "Plant",
    short_desc: "Easily plant tomatoes from your harvested seeds",
    difficulty_level: "Easy",
    crop_id: ""
  }
];

const seedDB = () => {
  Crop.remove({})
    .then(() => {
      console.log("Crops cleared");
      Task.remove({}).then(() => {
        console.log("Tasks cleared");
        crops.forEach(async (newCrop, i) => {
          await Crop.create(newCrop)
            .then(crop => {
              console.log(`Crop ${crop.name} added ${crop._id}`);
              tasks.forEach(async newTask => {
                newTask.crop_id = crop._id;
                await Task.create(newTask)
                  .then(task =>
                    console.log(`Task ${task.name} added to ${crop._id}`)
                  )
                  .catch(err => console.log("Error creating task", err));
              });
            })
            .catch(err => console.log("Error creating crop", err));
        });
      });
    })
    .catch(err => console.log(err));
};
module.exports.seedDB = seedDB;
