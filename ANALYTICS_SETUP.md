# Analytics Setup Guide for Netlify

## 🎯 What You'll Be Able to Track

- **Website Visitors**: Total visits, unique visitors, page views
- **CV Downloads**: How many times your resume was downloaded
- **User Behavior**: Time on site, bounce rate, traffic sources
- **Geographic Data**: Where your visitors are located
- **Device Information**: Desktop vs mobile usage

## 📊 Option 1: Google Analytics (Recommended - Free)

### Step 1: Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring"
3. Create an account for your portfolio
4. Set up a property for your website
5. Get your **Measurement ID** (starts with "G-")

### Step 2: Update Your Code
Replace `GA_MEASUREMENT_ID` in your `index.html` with your actual ID:

```html
<!-- Replace GA_MEASUREMENT_ID with your actual ID (e.g., G-ABC123DEF4) -->
gtag('config', 'G-ABC123DEF4');
```

### Step 3: Deploy to Netlify
1. Commit and push your changes
2. Netlify will automatically redeploy
3. Wait 24-48 hours for data to appear

## 🔍 Option 2: Netlify Analytics (Paid - $9/month)

If you want built-in Netlify analytics:
1. Go to your Netlify dashboard
2. Navigate to "Analytics" tab
3. Enable analytics for your site
4. Get detailed insights about your visitors

## 📈 Option 3: Simple Analytics (Privacy-Friendly - Free)

Alternative to Google Analytics with privacy focus:
1. Go to [Simple Analytics](https://www.simpleanalytics.com/)
2. Create account and get tracking code
3. Replace Google Analytics code with Simple Analytics

## 🎯 What You'll See in Google Analytics

### Dashboard Overview
- **Real-time**: Current visitors on your site
- **Audience**: Total users, new vs returning visitors
- **Acquisition**: How people found your site (Google, LinkedIn, direct)
- **Behavior**: Most visited pages, time on site
- **Conversions**: CV downloads (custom events)

### CV Download Tracking
- Go to **Events** → **CV** category
- See total downloads over time
- Track which pages lead to downloads

## 🚀 Advanced Tracking (Optional)

### Track Social Media Clicks
Add this to your social media buttons:

```javascript
function trackSocialClick(platform) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click', {
      'event_category': 'Social Media',
      'event_label': platform
    });
  }
}
```

### Track Contact Form Submissions
If you add a contact form later, track form submissions:

```javascript
function trackContactForm() {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_submit', {
      'event_category': 'Contact',
      'event_label': 'Contact Form'
    });
  }
}
```

## 📱 Mobile App Analytics

For mobile app testing with Appium, consider:
- **Firebase Analytics** (Google's mobile analytics)
- **Mixpanel** for detailed user behavior
- **Amplitude** for product analytics

## 🔒 Privacy & GDPR Compliance

- Google Analytics respects user privacy settings
- Consider adding a privacy policy to your site
- Mention analytics usage in your privacy policy

## 📊 Quick Setup Checklist

- [ ] Create Google Analytics account
- [ ] Get Measurement ID
- [ ] Update HTML with your ID
- [ ] Deploy to Netlify
- [ ] Wait 24-48 hours for data
- [ ] Check Analytics dashboard
- [ ] Set up custom reports (optional)

## 🎉 After Setup

You'll be able to see:
- **Daily/Monthly visitors**
- **CV download counts**
- **Traffic sources** (LinkedIn, GitHub, etc.)
- **Popular pages**
- **User engagement metrics**

## 💡 Pro Tips

1. **Set up goals** in Google Analytics for CV downloads
2. **Create custom reports** for portfolio-specific metrics
3. **Set up email alerts** for traffic spikes
4. **Use UTM parameters** when sharing your portfolio link
5. **Monitor bounce rate** to improve user engagement

## 🆘 Troubleshooting

- **No data showing**: Wait 24-48 hours, check if code is deployed
- **CV downloads not tracking**: Check browser console for errors
- **Analytics not loading**: Verify Measurement ID is correct
- **Blocked by ad blockers**: Some users may block analytics

---

**Need Help?** Check Google Analytics help center or Netlify documentation for detailed guides.
