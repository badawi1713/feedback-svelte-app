import { writable } from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "Pretty nice and well place!",
      },
      {
        id: 2,
        rating: 7,
        text: "Okay I guess!",
      },
      {
        id: 3,
        rating: 6,
        text: "Hmm... not really good!",
      },
])