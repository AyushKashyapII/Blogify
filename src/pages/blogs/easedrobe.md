---
title: "How I Built Easedrobe"
description: "A casual, step-by-step timeline of my journey building Easedrobe — a smart wardrobe assistant powered by AI and vision."
publishDate: 2025-07-06
---

<section class="prose prose-invert max-w-3xl mx-auto px-6 py-16 space-y-12">

  <h1 class="text-3xl font-bold">How I Built Easedrobe</h1>

  <p>
    This isn't just a project breakdown — it's a story. From scribbling the idea during an outfit crisis to hacking through APIs, here's a casual timeline of how I built Easedrobe — my smart wardrobe assistant powered by AI and computer vision.
  </p>

  <!-- 🧠 Idea Section -->
  <div>
    <h2 class="text-xl font-semibold">🧠 The Spark</h2>
    <p>
      It started when I realized I kept re-wearing the same 5 outfits — not because I don't have clothes, but because I didn't remember what I had.
    </p>
    <p>
      That got me thinking... What if I could *digitize* my wardrobe and get outfit suggestions like Spotify gives music recs?
    </p>
    <p>
      That thought snowballed into the first sketch of **Easedrobe**.
    </p>
  </div>

  <!-- 🎯 Problem -->
  <div>
    <h2 class="text-xl font-semibold">🎯 What I Wanted to Solve</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>Make it easy to log and browse my wardrobe visually</li>
      <li>Suggest outfits based on weather, event, or color match</li>
      <li>Use AI to make this smart — not just a dumb image gallery</li>
    </ul>
  </div>

  <!-- 🧱 Timeline -->
  <div>
    <h2 class="text-xl font-semibold">📆 Build Timeline</h2>

    <ul class="border-l border-gray-600 pl-4 mt-4 space-y-6">

      <li>
        <div class="ml-2">
          <h3 class="font-bold">📌 Week 1: Idea dump + wireframes</h3>
          <p class="text-sm text-gray-400">
            Drew out how I wanted the wardrobe page to look and how adding new clothes should work. Started playing with Tailwind UI cards.
          </p>
        </div>
      </li>

      <li>
        <div class="ml-2">
          <h3 class="font-bold">🧪 Week 2: Building the add-item flow</h3>
          <p class="text-sm text-gray-400">
            Users can upload an image and select type, color, and tags. I stored these in a mock database.
          </p>
        </div>
      </li>

      <li>
        <div class="ml-2">
          <h3 class="font-bold">🧠 Week 3: Trying out image classification</h3>
          <p class="text-sm text-gray-400">
            Integrated a basic CV model to detect shirts, pants, etc. Used TensorFlow.js and tested a few pre-trained classifiers.
          </p>
        </div>
      </li>

      <li>
        <div class="ml-2">
          <h3 class="font-bold">🎨 Week 4: Styling + dashboard polish</h3>
          <p class="text-sm text-gray-400">
            Switched to a dark UI, added filtering by tags, and set up the outfit recommendation placeholder.
          </p>
        </div>
      </li>

      <li>
        <div class="ml-2">
          <h3 class="font-bold">🚀 Week 5: MVP ready + test users</h3>
          <p class="text-sm text-gray-400">
            Showed the MVP to a few friends. Some cool feedback around UX and what to add next!
          </p>
        </div>
      </li>

    </ul>
  </div>

  <!-- 📌 What's Next -->
  <div>
    <h2 class="text-xl font-semibold">📌 What's Next</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>Better AI models for outfit generation</li>
      <li>Daily outfit suggestions based on calendar</li>
      <li>Integrating weather API for smart filters</li>
      <li>Eventually open-sourcing the core!</li>
    </ul>
  </div>

  <!-- 💭 Closing Note -->
  <div>
    <h2 class="text-xl font-semibold">💭 Final Thoughts</h2>
    <p>
      Building Easedrobe has been fun, frustrating, and full of learning. I'm still experimenting with new ideas, but it already feels like one of my most "me" projects.
    </p>
    <p>
      If you're building something similar — or if you just forget what's in your closet too — hit me up, let's swap ideas.
    </p>
  </div>

</section>
