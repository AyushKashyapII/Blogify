---
layout: ../../layouts/PostLayout.astro
title: "How I Built Easedrobe"
subtitle: "A timeline story of building my smart wardrobe assistant"
publishDate: 2025-07-06
---

<div class="blog-post-content">

<h2>
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" style="vertical-align:middle;margin-right:6px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></svg>
  The Idea
</h2>

It started one evening when I realized I had no clue what clothes were clean or what I wore last week. I thought, what if my wardrobe had a memory?

That was the seed for **Easedrobe**, a digital wardrobe that helps track, suggest, and organize what I wear using computer vision. And to put people on fashion game.

---

<h2>
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" style="vertical-align:middle;margin-right:6px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 13V2l8 4-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/></svg>
  What I Wanted to Solve
</h2>

- Make my wardrobe searchable and visible  
- Track when I last wore something  
- Recommend outfits based on what I already have  
- Use AI to help match clothes or suggest styles

---

<h2>
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" style="vertical-align:middle;margin-right:6px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
  Timeline
</h2>

<div class="timeline-accordion">
  <div class="timeline-accordion-item" tabindex="0">
    <div class="timeline-accordion-header">
      <span class="timeline-date">10th June</span>
      <span class="timeline-title">Wireframes + Basic UI Setup</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="timeline-arrow timeline-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="timeline-arrow timeline-arrow-up"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
    </div>
    <div class="timeline-accordion-content">
      Started with thinking with the app is supposed to do with user flow and then the pages that had to be created .Went on lovable and created a basic working prototype with upload working. Lovable is <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
    </div>
  </div>
  <div class="timeline-accordion-item" tabindex="0">
    <div class="timeline-accordion-header">
      <span class="timeline-date">12th June</span>
      <span class="timeline-title">Database Integration</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="timeline-arrow timeline-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="timeline-arrow timeline-arrow-up"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
    </div>
    <div class="timeline-accordion-content">
      Conencted NeonPostgresql for this project.No particular reason .Tbh i will always prefer MongoDB or Supabase .Set up Auth and overall flow of app was completed.Lightwork!!! 
    </div>
  </div>
  <div class="timeline-accordion-item" tabindex="0">
    <div class="timeline-accordion-header">
      <span class="timeline-date">16th June</span>
      <span class="timeline-title">Setting up Zero-shot classification</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="timeline-arrow timeline-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="timeline-arrow timeline-arrow-up"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
    </div>
    <div class="timeline-accordion-content">
      For the MVP i decided to go with <a href="https://huggingface.co/Salesforce/blip-image-captioning-base">Salesforce BLIP model</a> to classify my clothing items in major attributes of clothing (from bloomberg fashion experts) like type, color, material,features etc.Although not perfect but at this point my laptop couldnt handle the 800,000+ images dataset of DeepFashion and also cause i m lazy.
    </div>
  </div>
  <div class="timeline-accordion-item" tabindex="0">
    <div class="timeline-accordion-header">
      <span class="timeline-date">20th June</span>
      <span class="timeline-title">Added outfit suggestion logic, MVP ready</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="timeline-arrow timeline-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="timeline-arrow timeline-arrow-up"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
    </div>
    <div class="timeline-accordion-content">
      Added outfit suggestion logic and completed the MVP.Less goooo!!! I still only categorise tops and bottoms no footwear or accessories which i something i will be working on next.
    </div>
  </div>
</div>

---

<h2>
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" style="vertical-align:middle;margin-right:6px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M7 21h10"/><path d="M19.5 12 22 6"/><path d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"/><path d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"/><path d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"/></svg>
  What's Next
</h2>


- Use users mood and taste to develop styles after scraping Pinterest on the styles 
- Probably train the Salesforce BLIP model on <a href="https://mmlab.ie.cuhk.edu.hk/projects/DeepFashion.html">DeepFashion Dataset</a> (a lot of work)
- Add Accesories and footwear to the classifaction model  

---

<h2>
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" style="vertical-align:middle;margin-right:6px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></svg>
  Final Take
</h2>

This is one of my favorite projects, not just because it solves a problem I personally face, but because it is letting me explore ML, UI/UX, and real-world edge cases all in one go.

Still building. Still learning.

<style>
.timeline-accordion {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}
.timeline-accordion-item {
  background: var(--hover-bg, #23272f);
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: box-shadow 0.2s;
  outline: none;
}
.timeline-accordion-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 1.3rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--text);
}
.timeline-date {
  color: #4094e7;
  font-weight: 700;
  margin-right: 1.2rem;
  min-width: 90px;
}
.timeline-title {
  flex: 1;
}
.timeline-arrow {
  margin-left: 1.2rem;
  font-size: 1.2rem;
  transition: transform 0.3s, opacity 0.2s;
  vertical-align: middle;
  cursor: pointer;
}
.timeline-arrow-up {
  display: none;
}
.timeline-accordion-item.active .timeline-arrow-down {
  display: none;
}
.timeline-accordion-item.active .timeline-arrow-up {
  display: inline-block;
}
.timeline-accordion-content {
  max-height: 0;
  overflow: hidden;
  background: rgba(0,0,0,0.08);
  color: var(--text);
  font-size: 1rem;
  padding: 0 1.3rem;
  transition: max-height 0.3s, padding 0.3s;
}
.timeline-accordion-item.active .timeline-accordion-content {
  max-height: 300px;
  padding: 1rem 1.3rem 1.3rem 1.3rem;
}
.blog-post-content a {
  color: #888 !important;
  text-decoration: none !important;
  transition: color 0.2s;
}
html.dark .blog-post-content a {
  color: #bbb !important;
}
.blog-post-content a:hover {
  color: #4094e7 !important;
  text-decoration: none !important;
}
</style>

<script>
document.querySelectorAll('.timeline-accordion-item').forEach(item => {
  item.addEventListener('click', function(e) {
    // Only toggle if header or arrow is clicked
    if (
      e.target.classList.contains('timeline-accordion-header') ||
      e.target.classList.contains('timeline-arrow') ||
      e.target.classList.contains('timeline-title') ||
      e.target.classList.contains('timeline-date')
    ) {
      this.classList.toggle('active');
    }
  });
  // Optional: allow keyboard navigation
  item.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.classList.toggle('active');
    }
  });
});
</script>

</div>


