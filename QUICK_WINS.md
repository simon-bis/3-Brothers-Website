# SEO & Conversion Quick Wins Checklist

## 🎯 Quick Wins - Do These First (30 minutes each)


### 7. ✅ Image Alt Text Strategy
**Time:** 30 minutes

**Why:** Alt text helps blind users and helps Google understand images

**Current Status:** Some images have alt text ✓

**Check each image has:**
- [ ] Descriptive text (not just "image" or "photo")
- [ ] Includes relevant keyword when appropriate
- [ ] Under 125 characters
- [ ] Doesn't repeat page H1 exactly

**Examples:**

❌ **Bad:**
```html
<img src="deck.webp" alt="deck" />
```

✅ **Good:**
```html
<img src="deck.webp" alt="Custom built wood deck with railings in Ottawa - 3 Brothers Landscaping" />
```

---

### 9. ✅ Set Up Phone Call Tracking
**Time:** 10 minutes

**Option 1: Simple (Free)**
- In Google Analytics, create a goal for tel: link clicks
- Track in tag manager

**Option 2: Advanced (Recommended)**
- Use [CallRail](https://www.callrail.com/) (starts $25/month)
- Tracks: which page led to call, duration, recording
- Shows ROI by page

**Setup in GA4:**
1. Go to Admin → Conversion goals
2. Create goal: "Phone Clicks"
3. Set trigger: Outbound click event + destination contains "+16137983968"

---

### 10. ✅ Optimize Form for Conversions
**File:** `src/pages/Contact.js`

**Status:** Updated with trust signals ✓

**Additional improvements:**
- [ ] Remove optional fields (keep: name, email, message, phone optional)
- [ ] Add progress indicator if multi-step
- [ ] Show "We respond in 24 hours" above form
- [ ] Add form field labels outside input
- [ ] Implement inline validation (show errors as user types)
- [ ] Success message shows next steps: "We'll call you at [phone] within 24 hours"

---

## 📊 Technical SEO Quick Checks

### 11. ✅ Check Page Speed
**Time:** 5 minutes

Go to [Google PageSpeed Insights](https://pagespeed.web.dev/)
- Enter: `https://www.3brothersottawalandscaping.ca`
- Check scores:
  - Mobile (target: >80)
  - Desktop (target: >90)

**Common fixes:**
- Minimize JavaScript
- Optimize images (use WebP)
- Enable GZIP compression
- Lazy load images below fold

---

### 13. ✅ Fix Broken Links
**Time:** 15 minutes

Use [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) or [Screaming Frog](https://www.screamingfrogseosoftware.com/) (free limited version)

Check for:
- [ ] 404 errors (broken internal links)
- [ ] External links that lead to 404s
- [ ] Redirect chains (A→B→C should be A→C)
- [ ] Mix of HTTP and HTTPS

---
ifications (if any)

---

### 15. ✅ Add Risk Reversal Guarantees
**Time:** 5 minutes

Add to service pages or About page:
```
✓ 10-Year Warranty on Workmanship
✓ 100% Satisfaction Guarantee
✓ Licensed and Fully Insured
✓ Free Estimates - No Hidden Costs
✓ Free Consultation
```

Reduces perceived risk for prospects.

---

### 16. ✅ Optimize Hero Section
**Time:** 10 minutes

Current: `src/pages/Home.js` hero

**Improvements:**
- [ ] Hero section should have clear value prop
- [ ] CTA button is prominent and contrasting
- [ ] Background image is optimized (< 300KB)
- [ ] Text is readable over background (use overlay)

**Better hero copy:**
```html
<h1>Professional Landscaping in Ottawa - Transform Your Outdoor Space</h1>
<p>Custom Interlock Patios • Decks • Fences • Landscaping Design</p>
<button>Get Free Estimate</button>
```

---

## 📋 Implementation Priority

**Do First (This Week):**
1. ✅ Update Google Business Profile
2. ✅ Add sticky phone number CTA
3. ✅ Set up GA4 conversion goals
4. ✅ Add meta tags to HTML
5. ✅ Check mobile responsiveness

**Do Next (Next Week):**
6. ✅ Verify and update sitemap
7. ✅ Audit image alt text
8. ✅ Check page speed
9. ✅ Fix any broken links
10. ✅ Optimize form for conversions

**Do Later (Next Month):**
11. ✅ Create Instagram strategy
12. ✅ Set up email newsletter
13. ✅ Create blog content
14. ✅ Advanced analytics dashboard
15. ✅ A/B test CTAs

---

## ✅ Quick Wins Score

Each item = 1 point. Track your progress:

- [ ] 1. robots.txt updated = 1 pt
- [ ] 2. Favicon optimized = 1 pt
- [ ] 3. Google Business Profile verified = 2 pts
- [ ] 4. Service pages optimized = 2 pts
- [ ] 5. Meta tags added = 1 pt
- [ ] 6. Sitemap verified = 1 pt
- [ ] 7. Image alt text improved = 2 pts
- [ ] 8. CTAs improved = 1 pt
- [ ] 9. Phone tracking set up = 2 pts
- [ ] 10. Form optimized = 2 pts
- [ ] 11. Page speed checked = 1 pt
- [ ] 12. Mobile test passed = 1 pt
- [ ] 13. Broken links fixed = 1 pt
- [ ] 14. Social proof added = 2 pts
- [ ] 15. Guarantees added = 1 pt
- [ ] 16. Hero optimized = 1 pt

**Total: 22 points**

Target: Complete 16/16 items = +40-60% leads increase

---

## Expected Results Timeline

**After Week 1:** Mobile traffic increases 5-10%
**After Week 2:** Search impressions increase 10-15%
**After Month 1:** Overall traffic increases 15-25%, leads +10-20%
**After Month 3:** Rankings improve for 5+ keywords, leads +30-50%

---

## Next Steps

1. Print this checklist
2. Assign items to team members
3. Track progress weekly
4. Monitor metrics in Google Analytics
5. Report back on conversions after 30 days
