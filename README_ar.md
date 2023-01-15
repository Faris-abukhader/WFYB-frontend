
<h1 align="center">WFYB</h1>
<p align="center">
📔<a href="https://github.com/Faris-abukhader/WFYB-frontend/blob/master/README.md"> English </a>📔 
 </p>
<p align="center">
  باك اند  <a href="https://github.com/Faris-abukhader/WFYB-backend">من هنا </a>  
</p>


## 🚩 قائمة المحتويات 


- [المقدمة](#--المقدمة)
- [النماذج والرسم البياني](#--النماذج-والرسم-البياني)
- [تحميل المستودع](#--تحميل-المستودع)
- [تهيئة المشروع](#--تهيئة-المشروع)
- [بنية مجلد المشروع](#--بنية-مجلد-المشروع)
- [الخصائص](#--الخصائص)
- [المكتبات](#-المكتبات)
- [الرخصة](#-الرخصة)




## <img src="https://cdn-icons-png.flaticon.com/512/1436/1436664.png" width="25" height="25" style="padding-right:15px">  المقدمة 

<p dir="rtl" align="right">
منصة WFYB وجدت لمساعدة الأفكار المميزة وتطبيقها على ارض الواقع ، منصة تحتضن العديد من المشاريع بشتى انواعها ، افلام ، فن، سنما، العاب ،تصميم، تصوير واكثر .

الفكرة الرئيسية لهذا المشروع هو التمويل الجماعي ، والذي يعني أن المشروع الواحد يتم تمويله بعدد كبير من الممولين .

والان دعنا نتكلم عن كيفية عمل هذه المنصة ، في هذه المنصة هناك حسابين مختلفين ، الأول هو رائد الأعمال أو اصحاب الأفكار ، الحساب الآخر هو الممولين ، بحيث أن رواد الاعمال يملكون الأفكار الخلاقة والتي هي جاهزة لتطبيقها على ارض الواقع ولكن ينقصهم التمويل ، وهنا يأتي دور الممولين فهم لديهم المال ويحتاجون فكرة مشروع ، ورائد الأعمال عنده الفكرة ويحتاج الأموال ، وهنا يمكن فهم اهمية كل منهم للآخر . والجميل بفكرة التمويل الجماعي انخفاض مقدار المخاطره في المشروع ، فالمساهم او الممولين غير مطالب بدفع مبلغ كبيرة ، وانما مبلغ 10 دولار أو اكثر ، بذلك يمكن المساهمة باكثر من مشروع دفعه واحده ، لتصبح فرصة النجاح اكبر .

والان بعد تطرقنا لمفهوم التمويل الجماعي وآلية عمله ، دعنا نتكلم اكثر عن طريقة عمل هذه المنصة . 

في البداية جميعنا نتفق أن الحماية والخصوصية هي من اهم مميزات اي منصة لذلك سنستهل حديثنا عن موضوع الحماية authentication ، من ناحية الخصوصية هناك نوعان مختلفان من الصفحات في مشروعنا ، الأول هي صفحات عامة يمكن الوصول لها من قبل أي شخص في العالم ، والثانية الصفحات الخاصة أو المحمية ، والتي يتم الوصول إليها فقط عند الحصول على حساب على المنصة ، وهنا اود التنوية أن جميع هذه الخصائص تم تطبيقها عن طريقة استخدام المكتبة next-auth . 

الطريقة التي تم استخدامها لحماية المنصة هي عن طريقة حفظ معلومات المستخدم داخل session في الخادم ، ويتم التأكد منها في كل مره يرسل المستخدم طلب للخادم عن طريق SSR بحيث يتم التأكد من معلومات المستخدم قبل تقديم الصفحة للمستخدم ، وبذلك تكون المنصة اكثر سرعة وامان .

بعد حديثنا عن الحماية والاسلوب المستخدم في تطبيقها ، دعنا نتكلم عن محتوى الصفحات المحمية ، في الحقيقة هناك ثلاث انواع من الصفحات المحمية ، اول صفحات خاصة بالممولين فقط ، وصفحات خاصة فقط بالرواد الاعمال ، واخيرا صفحات مشتركة بينهما ، ونستهل حديثنا عن الصفحات المشتركة ومنها : 
- الصفحة الرئيسية : وتحوي هذه الصفحات احصائيات عامة عن الحساب كعدد المشاريع المنشورة او المشاريع الممولة ، التمويل المستلم او التمويل المقدم للمشاريع …الخ ، ويتم عرض هذه المعلومات عن طريق رسوم بيانية لجعل التعامل معها اكثر سهولة .
- الملف الشخصي : وهي الصفحة التي يمكن للمستخدمين تعديل بياناتهم ، كالاسم والجنسية والصورة الشخصية .

أما بالنسبة لحساب رواد الاعمال هناك صفحة خاصة به وهي  : 
- صفحة المشاريع : تحوي هذه الصفحة على قائمة بالمشاريع المنشورة ، كما يمكن من خلال هذه الصفحة نشر مشروع جديد ، او تعديل على مشروع او حتى معاينة المشروع ، ومتابعة ارقام التعهدات لكل مشروع .

أما لحساب الممولين فهناك صفحتان خاصتان به : 
- المفضلة : وتحوي هذه الصفحة على قائمة بالمشاريع المفضلة لدى المستخدم ، بحيث يسهل الوصول اليها باي وقت .
- المشاريع الممولة : وتحوي المشاريع التي تم تمويلها من قبل المستخدم ، بحيث يمكن له اخذ نظرة سريعة للمشاريع التي تم المساهمة بها ، والمبلغ المدفوع ، ونسبة اكتمال المشروع . 





</p>

## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  النماذج والرسم البياني

<div style="padding:0px 200px 0px 200px">
<img src='https://user-images.githubusercontent.com/70070951/208333388-3f410e1a-e8b6-4fea-be73-e076a8c3bc03.png'/>
<img src='https://user-images.githubusercontent.com/70070951/208333380-18e81015-7bb5-44eb-bd97-f7c0cf8c7ef2.png'/>
</div>


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
- 15 عنصر يمكن اعادة استخدامه ، انظر للملف components -> general
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

هذا المشروع تحت رخصة [MIT](https://github.com/Faris-abukhader/WFYB-frontend/blob/main/licence) © [FaRiS](https://github.com/Faris-abukhader).
