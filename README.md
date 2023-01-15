<h1 align="center">WFYB</h1>
<p align="center">
📔<a href="https://github.com/Faris-abukhader/WFYB-frontend/blob/main/README_ar.md"> بالعربي </a>📔 
 </p>
<p align="center">
 backend-end part <a href="https://github.com/Faris-abukhader/WFYB-backend">from here</>
</p>


## 🚩 Table of Contents

- [Introduction](#--introduction)
- [Model and diagram](#--model-and-diagram)
- [Installation](#--installation)
- [Development setup](#--development-setup)
- [Project structure](#--project-structure)
- [Features](#--features)
- [Packages](#-packages)
- [License](#-license)


## <img src="https://cdn-icons-png.flaticon.com/512/1436/1436664.png" width="25" height="25" style="padding-right:15px">  Introduction 

<p>
WFYB is to help bring creative projects to life. A home for film, music, art, theater, games, comics, design, photography, and more.

The main idea behind this project is Crowdfunding which is the practice of funding a project  by raising money from a large number of people.

Let's talk about how does it work , so in this platform we have two type of accounts , first is the owner of the idea or project (starter) , second is the investor (backer) , so the starter have a creative idea or start up , but he/she needs money , here the backer comes up , the backer has money and want to invest this  money into a projects  so he/she can gain  more and more , so the backer can invest into this project or idea, and the cool things here , that the backer is not asked to invest a lot of money in one project , the pledge limit start from 10$ , which is very safe way to invest your money , invests it into many project rather than invest it in one project .

after we got the general idea about this project main idea , let's dive deeper into the core of this project.

First we're going to look at the project from authentication layer , from this aspect we have two different types of pages , one is public pages which include main page (landing page) project list page , authentication pages ... etc. Second is the private pages which is include dashboard pages ,. Here it's good to mention that I used next-auth library to handle the whole authentication part at frontend .

Now after we learn about public and private pages , let's dive deeper with private page , in private pages we also have three different pages , first one is only accessible by the starter account , second only accessible by the backer account , third is accessible for both accounts , that's what we mean by authorization .

The technic that I used for authentication and authorization is by storing the user info into session in the server , and check this session at server side rendering SSR , before I render the pages itself , this one makes the authentication more effective and secure.

After we talked about authentication and authorization it's time to talk about the private route (page) which is all under the dashboard route , again here we use authorization to render different pages to different users . let’s start our saying with the shard pages for both users :

- Main page (home page) : in this page I included real statistics about the account , which include how many project published or supported , how many pledge received or published , then I used chart to present all these data to the user , giving him/her a better user experience.

- Profile :  this page where the user can update his/her info , which include first name , last name , nationality and avatar.

 
Now let talk about the starter pages :
- Projects page: in this page we have user's projects list , where you can apply CRUD operation on it , CREATE, READ, UPDATE and DELETE , also he/she can review their project by clicking on the title from the project card in the list.


And for the backer we have :
- bookMark : where in this page the backer can check the projects that he/she saved  , and the percentage of project funding goal , by clicking on the project's name it will navigate to the project detail page .
- investedProjects : in this page the backer can check the project that he/she invested into ,  and his/her pledge the amount with the date of creating.


</p>

## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  Model and diagram

<div style="padding:0px 200px 0px 200px">
<img src='https://user-images.githubusercontent.com/70070951/208333388-3f410e1a-e8b6-4fea-be73-e076a8c3bc03.png'/>
<img src='https://user-images.githubusercontent.com/70070951/208333380-18e81015-7bb5-44eb-bd97-f7c0cf8c7ef2.png'/>
</div>

## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  Installation 


### 🔘 Cloning repository
1. On GitHub.com, navigate to the main page of the repository.
2. Above the list of files, click  Code.
3. Copy the URL for the repository.
4. Open Terminal.
5. Change the current working directory to the location where you want the cloned directory.
6. Type git clone, and then paste the URL you copied earlier.
```
git clone github.com/Faris-abukhader/WFYB-frontend
```
Press Enter to create your local clone
```
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `WFYB-frontend`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```
<br/>


## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  Development setup

To set up this project you need to download NodeJs in your machine or if you have it make sure you have the latest version of it.

### 🔘 Checking up Node version
```
node -v
```

### 🔘 Downloading Node

> for Windows  


Download the windows installer from [NodeJs offical website](https://nodejs.org/en/download/) make sure you have download the latest version of NodeJs.
<br/>


> for Mac
- You can download NodeJs using brew CLI
```
brew install node
```
- You can download NodeJs mac version through [the offical website](https://nodejs.org/en/download/)
<br/>
<hr/>


### 🔘 Downloading the packages

Go to project direct where  <package.json> is exist and type in terminal :
```
npm install 
```

To run the project just type down in terminal :
```
npm run dev
```

<br/>
<hr/>


## <img src="https://cdn-icons-png.flaticon.com/512/535/535471.png" width="25" height="25" style="padding-right:15px">  Project structure  

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


## <img src="https://cdn-icons-png.flaticon.com/512/535/535471.png" width="25" height="25" style="padding-right:15px">  Features  

- Authentications , authorizations are all implemented with differents layers.
- Different custom hooks.
- 15 reusable componenets , check components -> general folder  
- Whole project pages is full responsive.
- Two Custom layout 



## 📦 Packages


| Name | Description |
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


## 📜 License

This software is licensed under the [MIT](https://github.com/Faris-abukhader/WFYB-frontend/blob/main/licence) © [FaRiS](https://github.com/Faris-abukhader).
