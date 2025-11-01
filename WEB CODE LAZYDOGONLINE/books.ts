export interface Book {
  id: number
  title: string
  subtitle: string
  description: string
  price: string
  image: string
  amazonUrl: string
  youtubeUrl: string
  category: string
  ages: string
  hasColoring: boolean
  hasSong: boolean
  featured: boolean
}

// All 8 books with correct Amazon URLs and YouTube links
export const books: Book[] = [
  {
    id: 1,
    title: "If Only She Could Talk: The Tale of Tilly",
    subtitle: "A Musical Story",
    description:
      "A touching story about Tilly, a beautiful rescue cat, and the special bond between pets and their families.",
    price: "$12.99",
    image: "/images/tilly-cover.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FD9CTQSH",
    youtubeUrl: "https://youtube.com/watch?v=HPPO3s6uxT4",
    category: "Story Book",
    ages: "4-8",
    hasColoring: true,
    hasSong: true,
    featured: true,
  },
  {
    id: 2,
    title: "Aquatic Affirmations Coloring Book",
    subtitle: "An A to Z of Aquatic Affirmations",
    description:
      "Dive into positive thinking with this vibrant underwater adventure! Features 26 sea creatures from A to Z, each with uplifting affirmations to inspire calm, confidence, and creativity.",
    price: "$6.99",
    image: "/images/aquatic-affirmations-cover.png",
    amazonUrl: "https://www.amazon.com/dp/B0F9YNH9DB",
    youtubeUrl: "https://youtube.com/watch?v=Fn8DL6y347c",
    category: "Coloring Book",
    ages: "4+",
    hasColoring: true,
    hasSong: true,
    featured: true,
  },
  {
    id: 3,
    title: "Gnome Sweet Gnome Coloring Book",
    subtitle: "An A to Z of Magical Mindsets",
    description:
      "Enter a whimsical world of gnomes, mushroom houses, and magical thinking! This mindful affirmation coloring book features A to Z positive thoughts to nurture creativity and calm.",
    price: "$6.99",
    image: "/images/gnome-sweet-gnome-cover.png",
    amazonUrl: "https://www.amazon.com/dp/B0F9TVJ699",
    youtubeUrl: "https://youtube.com/watch?v=N6fdC6spBlg",
    category: "Coloring Book",
    ages: "4-8",
    hasColoring: true,
    hasSong: true,
    featured: true,
  },
  {
    id: 4,
    title: "Learn To Trace The Alphabet",
    subtitle: "Educational Tracing Book",
    description:
      "Help children develop fine motor skills and letter recognition with this engaging tracing book featuring 100 pages of animal-themed alphabet activities.",
    price: "$7.99",
    image: "/images/learn-to-trace-cover.png",
    amazonUrl: "https://www.amazon.com/dp/B0FD9TPYRC",
    youtubeUrl: "https://youtube.com/watch?v=hXA5woWzEXw",
    category: "Educational Book",
    ages: "3-6",
    hasColoring: false,
    hasSong: true,
    featured: false,
  },
  {
    id: 5,
    title: "Millie Learns to Be Kind",
    subtitle: "A Rhyming Story About Sharing, Big Feelings, and Using Gentle Hands",
    description:
      "A heartwarming rhyming story that teaches children about sharing, managing big feelings, and using gentle hands. Follow Millie as she learns important lessons about kindness and emotional regulation.",
    price: "$12.99",
    image: "/images/millie-learns-to-be-kind-cover.png",
    amazonUrl: "https://www.amazon.com/dp/B0FD3B58JF",
    youtubeUrl: "https://youtube.com/watch?v=pXWUeH23zg0",
    category: "Story Book",
    ages: "4-8",
    hasColoring: false,
    hasSong: true,
    featured: false,
  },
  {
    id: 6,
    title: "Learn To Trace The Alphabet ABC",
    subtitle: "Advanced Tracing Practice",
    description: "Advanced alphabet tracing with uppercase and lowercase letters for developing writers.",
    price: "$9.99",
    image: "/images/learn-to-trace-alphabet-abc-cover.png",
    amazonUrl: "https://www.amazon.com/dp/B0FD9XDRW1",
    youtubeUrl: "https://youtube.com/watch?v=VsKzDraLMXc",
    category: "Educational Book",
    ages: "4-7",
    hasColoring: true,
    hasSong: true,
    featured: false,
  },
  {
    id: 7,
    title: "Thumper the Brave",
    subtitle: "A Porcupine's Journey",
    description:
      "A heartwarming tale of courage, kindness, and wildlife rescue. Follow Thumper the porcupine on an adventure that teaches children about bravery and helping others in need.",
    price: "$12.99",
    image: "/images/thumper-the-brave-cover.png",
    amazonUrl: "https://www.amazon.com/dp/B0FD9CDGD5",
    youtubeUrl: "https://youtube.com/watch?v=3L4-kArq5_4",
    category: "Story Book",
    ages: "4-8",
    hasColoring: false,
    hasSong: true,
    featured: false,
  },
  {
    id: 8,
    title: "Christmas Legends Around the Globe",
    subtitle: "Rhyming Folklore and Festive Traditions from Every Land",
    description:
      "Journey around the world through enchanting Christmas folklore and traditions! This beautifully illustrated rhyming story explores how different cultures celebrate the magic of the holiday season, from Santa's reindeer to the Yule goat and beyond.",
    price: "$12.99",
    image: "/images/christmas-legends-cover.png",
    amazonUrl: "https://www.amazon.com/dp/B0FPX6CX1J?tag=lazydogonline-20",
    youtubeUrl: "https://youtu.be/uJb8M3ufQuk",
    category: "Story Book",
    ages: "4-8",
    hasColoring: false,
    hasSong: true,
    featured: true,
  },
]

export const getFeaturedBooks = () => books.filter((book) => book.featured)
export const getBooksByCategory = (category: string) =>
  category === "All" ? books : books.filter((book) => book.category === category)
