---
layout: ../../layouts/PostLayout.astro
title: "How I Built Easedrobe"
subtitle: "A timeline story of building my smart wardrobe assistant"
publishDate: 2025-07-06
description: "A brief story on how I built my smart wardrobe assistant, Easedrobe."
---

<div class="blog-post-content">
<h1>EaseDrobe: Building a Smart Fashion Assistant</h1>

The journey of building **EaseDrobe** started with a simple idea what if we could help users get smart outfit recommendations just by uploading a picture of their clothes? I wanted to use computer vision and deep learning to classify fashion items and then build useful tools around that. Here is how it all went down:

---

<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" style="vertical-align:middle;margin-right:6px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></svg> Idea and Dataset

I discovered the **DeepFashion dataset**, which has over 800,000 images and annotations across different categories, attributes, landmarks, and bounding boxes. It was perfect for training a fashion classification model. I started by downloading the image folder and focused on using the `category` and `attribute` annotations to classify clothing into types like shirts, dresses, pants, and accessories like belts and hats.

<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" style="vertical-align:middle;margin-right:6px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 13V2l8 4-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/></svg>
   Backend Using Transformers

For the classification model, I used Hugging Face `Salesforce/blip-image-captioning-base`. It is a powerful image captioning model that could describe clothing items in natural language. I wrapped it in a FastAPI backend and used `transformers` and `torch` for inference.

### Predict Function
The `/predict` route in my FastAPI server receives an image, runs it through the BLIP model, and parses out structured JSON tags with keys like:
- `type`
- `color`
- `material`
- `pattern`
- `fit`
- `features`
- `style`
- `target_audience`

These are stored in a database for each clothing item.

##  Deployment Hurdles
I initially tried deploying this backend on **Render**, but ran into memory issues since free plans limit usage to 512MB. The model was too heavy.

### Solution: Google Colab API Server
I moved the backend to **Google Colab**, where GPU support helped. I hosted the inference model and created an endpoint using `ngrok` to expose a public URL that I could call from the frontend.

## <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" style="vertical-align:middle;margin-right:6px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></svg> Building Time
This part was honestly chaotic but fun. I was juggling between figuring out deep learning models and making them production-ready at the same time. Starting with the DeepFashion dataset, I had to write scripts to parse annotations and prepare them for my use-case. At first, I thought I’d have to train a custom model, but then I came across Hugging Face’s BLIP, which gave incredible results straight out of the box.

I kept iterating on the backend side—moving from a local FastAPI server to failed attempts on Render to finally getting things to work on Google Colab using `ngrok`. The first time the model spat out something like “a blue denim jacket with buttons”—I was hooked.

The frontend came after, where I wanted to keep things clean and functional. Building the logic for scoring and ranking outfit recommendations took several attempts. I had to go through fashion blogs, Reddit threads, and actual wardrobe guides to decide what should matter when matching clothes.

The most exciting part was making the purchase suggestion system. It really felt like I was building a smart personal shopper. All these little wins along the way kept me going.

##  Fashion Recommendation Engine
Once I had structured tags for each item, I started working on a recommendation engine.

### What the Recommendation Considers:
- `style`: matches preppy, streetwear, casual, etc.
- `target_audience`: ensures gender compatibility
- `color harmony`: uses color theory to match items
- `fit`: avoids mismatching (e.g., oversized + slim fit)
- `pattern` balance: avoids clashing patterns
- `material`: seasonal or comfort compatibility

I used a rule-based scoring system to suggest ideal matches from the user’s wardrobe. This makes suggestions feel intelligent, not random.

##  Purchase Analysis System
I then thought—why stop at just recommending outfits from the wardrobe? What if the user is shopping and wants to know whether a new item is a good purchase?

### Purchase Rating Logic:
1. Upload the new item
2. Analyze it like existing wardrobe pieces
3. Compare style, color, material, and pattern compatibility
4. Check if it fills a gap (e.g., missing formalwear)
5. Score it on:
   - **Style Match** (with user wardrobe)
   - **Uniqueness** (vs existing items)
   - **Completeness** (does it finish more outfits?)
   - **Wearability** (seasonal + style context)
6. Output: Recommend or avoid with reasoning

This system could help users build a **more intentional wardrobe**, reduce impulse buys, and encourage smarter fashion choices.

---

##  Style Rules and Guidance for Recommendations

###  Basic Instructions for Outfit Matching:
- Match **style** tags (preppy, streetwear, etc.) for cohesion.
- Ensure gender via `target_audience`.
- Use **complementary or analogous colors** (e.g., navy & beige).
- Avoid mixing busy patterns like floral + checks.
- Layering is easier with **neutral innerwear**.
- **Material** compatibility: wool for winters, cotton/linen for summer.
- Avoid clashing fits (e.g., slim + baggy).

###  Basic Fashion Style Info:
- **Streetwear**: hoodies, sneakers, baggy pants, caps.
- **Preppy**: polos, chinos, loafers.
- **Casual**: t-shirts, jeans, sneakers.
- **Formal**: button-up shirts, trousers, leather shoes.
- **Vintage**: high-waisted pants, retro prints.

These principles help the recommendation system stay realistic and fashion-conscious.

---

<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" style="vertical-align:middle;margin-right:6px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M7 21h10"/><path d="M19.5 12 22 6"/><path d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"/><path d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"/><path d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"/></svg>
    Future Plans
- Use vector embeddings for item similarity
- Train a model to auto-suggest missing pieces in a wardrobe
- Build a smart cart assistant for online shoppers

---

If you have read till here, thanks! Feel free to check out the project code or reach out if you have ideas.

</div>
