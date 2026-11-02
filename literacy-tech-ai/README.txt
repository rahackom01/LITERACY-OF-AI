LITERACY OF TECH, AI & HARDWARE EDUCATION
========================================

FILES
- public/index.html : website structure and content
- public/style.css  : responsive dark technology design
- public/script.js  : AI tool search, category filters, mobile menu and year
- firebase.json     : Firebase Hosting configuration

IMPORTANT
This is a static front-end starter website. The AI tools directory links to third-party services; it does not itself provide AI model access. Login/register, user accounts, contact form submission, database, admin dashboard and paid subscriptions are not connected yet. Do not collect passwords or personal data until a secure backend and authentication are configured.

DEPLOY TO FIREBASE HOSTING (FREE SPARK PLAN)
1. Create/sign in to a Google account.
2. Open https://console.firebase.google.com/ and create a Firebase project.
3. On your computer install Node.js LTS from https://nodejs.org/ if it is not already installed.
4. Open a terminal in this extracted folder (the folder containing firebase.json).
5. Run: npm install -g firebase-tools
6. Run: firebase login
7. Run: firebase projects:list
8. Run: firebase use --add
   Choose the Firebase project you created and give it the alias default.
9. Run: firebase deploy --only hosting
10. Firebase prints your public URL, normally https://YOUR-PROJECT-ID.web.app

If Firebase asks you to initialize Hosting, choose the existing project and use "public" as the public directory. Since firebase.json is already included, normally you can proceed with firebase use --add and deploy.

BROWSER-ONLY OPTION
Google Cloud Shell includes Firebase CLI. Upload/extract this folder in Cloud Shell, open its terminal in the folder containing firebase.json, then run firebase login (if needed), firebase use --add, and firebase deploy --only hosting.

FREE PLAN
Keep the project on Firebase Spark (no-cost) and monitor usage. Do not upgrade to Blaze or enable paid services unless you understand the billing implications. Firebase Hosting has a no-cost quota; exceeding applicable quotas or using paid services can require billing.

CUSTOMISE BEFORE LAUNCH
- Replace hello@yourdomain.example in public/index.html with your real contact email.
- Review all external links and descriptions.
- Choose an available Firebase project ID; it becomes part of your free web.app address.
