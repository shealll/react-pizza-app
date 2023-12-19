import baconbanana from "./images/baconbanana.png";
import smokedsalmon from "./images/smokedsalmon.jpg";
import currybanana from "./images/currybanana.jpg";
import hawaiian from "./images/hawaiian.jpg";
import chorizo from "./images/chorizo.jpg";
import margherita from "./images/margherita.jpg";

export const PIZZA = [
  { id: 1, 
      name: 'Bacon & Banana Pizza', 
      description: 'Cheese, bacon and banana pizza on a rich tomato base',
      price: 25.86, 
      image: baconbanana
  },
  { id: 2, 
    name: 'Smoked Salmon Pizza', 
    description: 'Sliced smoked salmon with capers, red onions and black olives',
    price: 26.32, 
    image: smokedsalmon
  },
  { id: 3, 
    name: 'Margherita Pizza', 
    description: 'Traditional italian pizza with tomato, cheese and basil',
    price: 24.56, 
    image: margherita
  },
  { id: 4, 
    name: 'Chorizo Pizza', 
    description: 'Cheese and chorizo pizza on a rich tomato base',
    price: 25.00,
    image: chorizo
  },
  { id: 5, 
    name: 'Hawaiian Pizza', 
    description: 'Roasted and shredded chicken, pineapples on a rich tomato base',
    price: 25.00, 
    image: hawaiian 
  },
  { id: 6, 
    name: 'Banana Curry Pizza', 
    description: 'Cheese and curry with grated smoked cheese and bananas',
    price: 26.90, 
    image: currybanana
  }
]

export const REVIEW = [
  { id: 1, 
      name: 'Ivan Chong', 
      review: 'End-to-end order-to-delivery was a seamless experience. Ordered the Banana Curry Pizza for the second time and was tasty as always. A little pricey but you’d forget about the price as the cake melts in your mouth.',
  },
  { id: 2, 
    name: 'Nur Shahirah Mohd Zairi', 
    review: 'First time buying from Bananas Pizzeria. I ordered the Banana Curry Pizza for a party and it is soooooo good! I was skeptic at first because I don’t know if I will like it but the taste of the banana and curry compliments each other. Recommended!'
  },
  { id: 3, 
    name: 'Lydia Chin', 
    review: 'Randomly Googled pizza for delivery and this popped up. Ordered their Smoked Salmon Pizza. They offered free delivery. Honestly, this pizzeria is soooo under-rated. It was delicious. Beats a lot of pizza brands out there. So rich in flavour, not dense, just the right savouriness, perfect combination of every layer.'
  },
  { id: 4, 
    name: ' Thavin Kumar', 
    review: 'Love the pizzas, fancy flavours and lots of texture in every bite, and the taste is excellent, not super bland but more on ingredients based. Definitely repeatable',
  }
]