
<h1 align="center">WFYB</h1>
<p align="center">
📔<a href="https://github.com/Faris-abukhader/WFYB-frontend/blob/master/README.md"> English </a>📔 
 </p>
<p align="center">
  باك اند  <a href="https://github.com/Faris-abukhader/WFYB-backend">من هنا </a>  
</p>


## 🚩 قائمة المحتويات 


- [المقدمة](#--المقدمة)
- [تحميل المستودع](#--تحميل-المستودع)
- [تهيئة المشروع](#--تهيئة-المشروع)
- [بنية مجلد المشروع](#--بنية-مجلد-المشروع)
- [الخصائص](#--الخصائص)
- [المكتبات](#-المكتبات)
- [الرخصة](#-الرخصة)




## <img src="https://cdn-icons-png.flaticon.com/512/1436/1436664.png" width="25" height="25" style="padding-right:15px">  المقدمة 

<p>

</p>


## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  تحميل المستودع  


### 🔘 نسخ مستودع المشروع 
1. اذهب الى الصفحة الرئسية للمشروع .
2. في اعلى الصفحة انقر على الزر "code".
3. انسخ رابط المستودع .
4. افتح خط الاوامر terminal على الجهاز الخاص بك.
5. انتقل على المكان المراد تحميل المشروع اليه .
6. ادخل الامر التالي لنسخ مستودع المشروع لجهاز الحاسب الخاص بك:
```
git clone github.com/Faris-abukhader/WFYB-frontend
```
انقر على الزر enter لاتمام العملية 
```
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `WFYB-frontend`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```
<br/>


## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  تهيئة المشروع 

لتهيئة المشروع لابد من تحميل NodeJs على جهاز الخاص ، اما اذا كنت تمتلكه بالفعل فتأكد تحميل اخر اصدار.
### 🔘 التأكد من اصدار NodeJs
```
node -v
```

### 🔘 تحميل NodeJs


> لاجهزة وندوز
- يمكن تحميل نسخة ويندوز عبر الصفحة الرسمية ل NodeJs ، يرجى التأكد من تحميل آخر اصدار متاح .
 [الصفحة الرسمية](https://nodejs.org/en/download/)

<br/>

> لاجهزة الماك 
- يمكن تحميل NodeJs عبر اوامر brew 
```
brew install node
```
- يمكنك تحميل نسخة الماك عن طريق  ل NodeJs  [الصفحة الرسمية  ](https://nodejs.org/en/download/)
<br/>
<hr/>


### 🔘 تحميل المكتبات اللازمة 

من خلال شريط الاوامر terminal انتقل الى مكان تواجد الملف package.json ثم ادخل الامر التالي  :
```
npm install 
```


لتشغيل المشروع ادخل الامر التالي : 
```
npm run dev
```

<br/>
<hr/>


## <img src="https://cdn-icons-png.flaticon.com/512/535/535471.png" width="25" height="25" style="padding-right:15px">  بنية مجلد المشروع   

```
📦wfyb-frontend
 ┣ 📂components
 ┃ ┣ 📂UserLayout
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜…
 ┃ ┃ ┗ 📜Layout.js
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┗ 📜…
 ┃ ┣ 📂dashboardBookmark
 ┃ ┃ ┣ 📜dashboardBookmark.js
 ┃ ┃ ┗ 📜…
 ┃ ┣ 📂dashboardHomePage
 ┃ ┃ ┣ 📜dashboardHomePage.js
 ┃ ┃ ┗ 📜…
 ┃ ┣ 📂dashboardInvestedProjects
 ┃ ┃ ┣ 📜dashboardInvestedProjects.js
 ┃ ┃ ┗ 📜…
 ┃ ┣ 📂dashboardMyProjects
 ┃ ┃ ┣ 📜dashboardMyProjects.js
 ┃ ┃ ┗ 📜…
 ┃ ┣ 📂dashboardProfile
 ┃ ┃ ┣ 📜dashboardProfile.js
 ┃ ┃ ┗ 📜…
 ┃ ┣ 📂general
 ┃ ┃ ┣ 📜…
 ┃ ┃ ┗ 📜general.js
 ┃ ┣ 📂landingPage
 ┃ ┃ ┣ 📜…
 ┃ ┃ ┗ 📜landingPage.js
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜…
 ┃ ┃ ┗ 📜Layout.js
 ┃ ┣ 📂myProjects
 ┃ ┃ ┗ 📜myProjects.js
 ┃ ┣ 📂projectDetails
 ┃ ┃ ┣ 📜…
 ┃ ┃ ┗ 📜projectDetails.js
 ┃ ┗ 📂projectList
 ┃ ┃ ┣ 📜…
 ┃ ┃ ┗ 📜projectList.js
 ┣ 📂hooks
 ┃ ┣ 📜DeleteRequest.js
 ┃ ┣ 📜GetRequest.js
 ┃ ┣ 📜PostRequest.js
 ┃ ┗ 📜PutRequest.js
 ┣ 📂localization
 ┃ ┣ 📂sources
 ┃ ┃ ┣ 📜ar.js
 ┃ ┃ ┣ 📜en.js
 ┃ ┃ ┣ 📜sw.js
 ┃ ┃ ┗ 📜tkm.js
 ┃ ┣ 📜config.js
 ┃ ┗ 📜locationlizationContext.js
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┗ 📜[...nextauth].js
 ┃ ┃ ┗ 📜hello.js
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜signIn.js
 ┃ ┃ ┗ 📜signUp.js
 ┃ ┣ 📂dashboard
 ┃ ┃ ┣ 📜bookmark.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜investedProjects.js
 ┃ ┃ ┣ 📜myProjects.js
 ┃ ┃ ┗ 📜profile.js
 ┃ ┣ 📜404.js
 ┃ ┣ 📜_app.js
 ┃ ┣ 📜_errors.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜projectDetails.js
 ┃ ┗ 📜projectList.js
 ┣ 📂public
 ┃ ┣ 📂avatar
 ┃ ┣ 📂fonts
 ┃ ┃ ┗ 📂almarai
 ┃ ┣ 📂icons
 ┃ ┣ 📂illustrations
 ┃ ┗ 📂images
 ┣ 📂store
 ┃ ┣ 📂slices
 ┃ ┃ ┣ 📜bookmark.js
 ┃ ┃ ┣ 📜language.js
 ┃ ┃ ┗ 📜project.js
 ┃ ┣ 📜actionHelper.js
 ┃ ┗ 📜store.js
 ┣ 📂styles
 ┃ ┣ 📜Home.module.css
 ┃ ┗ 📜globals.css
 ┣ 📂utils
 ┃ ┣ 📜fireNotification.js
 ┃ ┣ 📜getPagesList.js
 ┃ ┣ 📜languageList.js
 ┃ ┣ 📜projectCateogries.js
 ┃ ┣ 📜projectType.js
 ┃ ┗ 📜utils.js
 ┣ 📜.env.local
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜next.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜postcss.config.js
 ┗ 📜tailwind.config.js

```


## <img src="https://cdn-icons-png.flaticon.com/512/535/535471.png" width="25" height="25" style="padding-right:15px">  الخصائص  

- المصادقة authentication و التفويض authorization لعد طبقات . 
- نظام ادارة الحالة (البيانات) باستخدام مكتبة redux toolkit . 
- استخدام خرائط جوجل لاظهار موقع شركة المُعلن.
- 24 عنصر يمكن اعادة استخدامه ، انظر للملف components -> general
- جميع صفحات المشروع متجاوبة مع جميع الشاشات باختلاف احجامها . 
- تصميمين او نصقين مختلفين .

## 📦 المكتبات


  | اسم المكتبة  | الوصف |
| --- | --- |
| [`@reduxjs/toolkit`](https://www.npmjs.com/package/@reduxjs/toolkit) | Simple. Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more |
| [`next-redux-wrapper`](https://www.npmjs.com/package/next-redux-wrapper) | A HOC that brings Next.js and Redux together |
| [`animate.css`](https://www.npmjs.com/package/animate.css) | Animate.css is a library of ready-to-use, cross-browser animations |
| [`sweetalert2`](https://www.npmjs.com/package/sweetalert2) | A beautiful, responsive, customizable, accessible for JavaScript's popup boxes. |
| [`next-auth`](https://github.com/nextauthjs/next-auth) | is a complete open source authentication solution for Next.js applications. |
| [`@smastrom/react-rating`](https://www.npmjs.com/package/@smastrom/react-rating) | react rating component.  |
| [`tailwindcss`](https://www.npmjs.com/package/tailwindcss) | A utility-first CSS framework for rapidly building custom user interfaces. |
| [`atropos`](https://www.npmjs.com/package/atropos) | Touch-friendly 3D parallax hover effects. |
| [`axios`](https://www.npmjs.com/package/axios) | Promise based HTTP client for the browser and node.js |
| [`chart.js`](https://www.npmjs.com/package/chart.js) | Simple yet flexible JavaScript charting for designers & developers. |
| [`formik`](https://www.npmjs.com/package/formik) | Build forms in React, without the tears. |
| [`hamburger-react`](https://www.npmjs.com/package/hamburger-react) | Animated hamburger menu icons for React. |
| [`i18next`](https://www.npmjs.com/package/i18next) | I18next internationalization framework. |
| [`react-responsive-carousel`](https://www.npmjs.com/package/react-responsive-carousel) | React Responsive Carousel. |
| [`yup`](https://www.npmjs.com/package/yup) | Dead simple Object schema validation. |


## 📜 الرخصة

هذا المشروع تحت رخصة [MIT](https://github.com/Faris-abukhader/we-work/blob/main/license) © [FaRiS](https://github.com/Faris-abukhader).
