export interface Page {
  id: number;
  chapter: string;
  text: string;
  image: string;
}

const chapters1to10: Page[] = [
  {
    id: 1,
    chapter: "Chapter 1: The Detective's Mistake",
    text: "Detective Snuffles was not your average investigator. He stood in the dark alleyway, holding a magnifying glass that was actually just a regular glass cup. 'The suspect vanished,' Snuffles whispered to his partner, a talking cat named Sir Whiskers. 'Just like my diet on a Friday night.' The mystery was deep. Someone had stolen the Royal Donut of Power. It was a thrill to be on the case, but also a little sticky. The rain poured down, washing away the clues but not the determination in Snuffles' eyes.",
    image: "https://picsum.photos/seed/ch1/800/600"
  },
  {
    id: 2,
    chapter: "Chapter 2: The Talking Cat's Theory",
    text: "Sir Whiskers licked his paw, looking unimpressed. 'You are looking in the wrong place, Snuffles. The tracks lead to the Dragon's Cave.' Snuffles gasped. 'The Dragon? But he only eats tacos on Tuesdays!' It was Wednesday. The tension was high. If the Dragon had the donut, the balance of the fantasy world would be broken. Also, the donut was chocolate glazed, Snuffles' favorite. They walked carefully towards the cave, shadows dancing on the walls like ghosts at a silent disco.",
    image: "https://picsum.photos/seed/ch2/800/600"
  },
  {
    id: 3,
    chapter: "Chapter 3: The Lair of Laughter",
    text: "Inside the cave, it did not smell like smoke. It smelled like fresh popcorn. A voice boomed from the darkness. 'Who dares disturb my nap?' Snuffles tried to cast a light spell but instead made a bouquet of flowers appear in his hand. 'It is I, Detective Snuffles! Hand over the pastry!' The dragon stepped into the light. He was wearing funny glasses with a fake nose. 'I do not have your donut,' the dragon laughed. 'But I do have a great joke.'",
    image: "https://picsum.photos/seed/ch3/800/600"
  },
  {
    id: 4,
    chapter: "Chapter 4: The Unfunny Joke",
    text: "'Why did the skeleton go to the party alone?' the dragon asked, grinning widely. 'Because he had no body to go with!' The dragon roared with laughter, shaking the cave. Snuffles rolled his eyes. This was the comedy element he hated. 'Listen, Dragon. This is a thriller mystery. We need serious answers.' Suddenly, a trap door opened beneath them. They fell into a room full of soft pillows. 'A pillow trap?' Snuffles asked. 'This mystery is getting softer by the minute.'",
    image: "https://picsum.photos/seed/ch4/800/600"
  },
  {
    id: 5,
    chapter: "Chapter 5: The Castle in the Clouds",
    text: "In the pillow room, they found a note hidden inside a cushion. It said: 'The donut is in the castle in the sky.' 'A classic fantasy cliché,' muttered Snuffles. He tried to summon a broomstick but summoned a mop instead. 'Close enough.' They flew into the night sky. The wind rushed past them. It was thrilling. It was dangerous. It was also very clean, thanks to the mop. They arrived at the floating castle, its towers piercing the clouds.",
    image: "https://picsum.photos/seed/ch5/800/600"
  },
  {
    id: 6,
    chapter: "Chapter 6: The Door's Riddle",
    text: "The massive castle door was locked. Snuffles knocked three times. 'Knock knock.' 'Who is there?' asked the door with a grumpy voice. 'Wooden shoe.' 'Wooden shoe who?' 'Wooden shoe like to open this door?' The door groaned and swung open. Inside, the evil wizard Zorg was sitting on a throne, but he was not eating the donut. He was reading a comic book. 'You caught me!' Zorg cried. 'But you will never catch my punchline!'",
    image: "https://picsum.photos/seed/ch6/800/600"
  },
  {
    id: 7,
    chapter: "Chapter 7: The Wizard's Secret",
    text: "Zorg threw a smoke bomb. It was just a regular bomb that smelled like old socks. Snuffles coughed. 'The mystery is solved,' he said. 'But the smell remains.' Sir Whiskers found the donut on a pedestal. It was glowing. 'Wait,' said the cat. 'This is not a donut. It is a bagel.' The plot thickened. They had been chasing the wrong pastry all along. Zorg shrugged. 'I prefer savory snacks anyway.' The adventure was far from over.",
    image: "https://picsum.photos/seed/ch7/800/600"
  },
  {
    id: 8,
    chapter: "Chapter 8: The Forest of Whispers",
    text: "Leaving the castle, they descended into the Forest of Whispers. The trees here told secrets. 'He forgot to brush his teeth,' one oak tree whispered about Snuffles. 'She cheats at card games,' a pine tree murmured about the Queen. It was a place of mystery and gossip. They needed to find the Oracle of Ovens to locate the real donut. The path was winding and full of fog. Every step felt like a new riddle waiting to be solved.",
    image: "https://picsum.photos/seed/ch8/800/600"
  },
  {
    id: 9,
    chapter: "Chapter 9: The River of Riddles",
    text: "They reached a river that flowed uphill. A troll guarded the bridge. 'To cross, you must answer three questions,' the troll demanded. 'Question one: What has keys but opens no locks?' 'A piano,' Snuffles answered quickly. 'Question two: What has a head and a tail but no body?' 'A coin,' said Sir Whiskers. 'Question three: What gets wetter as it dries?' 'A towel,' they said in unison. The troll sighed. 'You guys are good at this.'",
    image: "https://picsum.photos/seed/ch9/800/600"
  },
  {
    id: 10,
    chapter: "Chapter 10: The Oracle's Kitchen",
    text: "Finally, they found the Oracle. She was a grandmother baking cookies. 'I knew you were coming,' she smiled. 'The Royal Donut is safe. It was never stolen. It was just behind the couch.' Snuffles fainted. Sir Whiskers ate a cookie. The journey had been long, funny, and full of unnecessary danger. But that is what makes a good audiobook. The end of this arc was just the beginning of many more stories to come.",
    image: "https://picsum.photos/seed/ch10/800/600"
  }
];

// Smart filler generator
const plots = [
    "The hero finds a hidden map.",
    "A secret door opens to a new world.",
    "The villain reveals a shocking truth.",
    "A magical artifact is discovered.",
    "The weather turns stormy and dark."
];

const actions = [
    "walked slowly towards the light.",
    "ran as fast as possible.",
    "thought about the meaning of life.",
    "laughed at the absurdity of it all.",
    "whispered a secret spell."
];

const twists = [
    "But nothing was as it seemed.",
    "Suddenly, everything changed.",
    "A loud noise broke the silence.",
    "Then, a friend appeared.",
    "The magic faded away."
];

const fillerPages: Page[] = [];
for (let i = 11; i <= 1000; i++) {
  const plot = plots[i % plots.length];
  const action = actions[(i * 2) % actions.length];
  const twist = twists[(i * 3) % twists.length];
  
  fillerPages.push({
    id: i,
    chapter: `Chapter ${i}: The Endless Adventure`,
    text: `The story continues. ${plot} The character ${action} It was a moment of pure suspense. The atmosphere was heavy with mystery. ${twist} There was no turning back now. The journey had to go on, for the sake of the world and the donut. This part of the tale brings new challenges and even more excitement for the listener.`,
    image: `https://picsum.photos/seed/page${i}/800/600`
  });
}

export const bookContent: Page[] = [...chapters1to10, ...fillerPages];
