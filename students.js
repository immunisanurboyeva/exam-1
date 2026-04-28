let students = [
    { id: 1, name: "Abduvaliy Raxmatullayev", username: "abduvaliyraxmatullayev", email: "abduvaliyraxmatullayev@gmail.com", phone: "+998901112233", img: "https://img.freepik.com/free-vector/programmer-working-flat-style_52683-15041.jpg", score: 86, group: "A" },

    { id: 2, name: "Hadicha Abubakirova", username: "hadichaabubakirova", email: "hadichaabubakirova@gmail.com", phone: "+998901112234", img: "https://img.freepik.com/free-vector/software-developer-working_52683-14179.jpg", score: 91, group: "B" },

    { id: 3, name: "Azizbek Anvarov", username: "azizbekanvarov", email: "azizbekanvarov@gmail.com", phone: "+998901112235", img: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg", score: 64, group: "A" },

    { id: 4, name: "Bahrom Inogamov", username: "bahrominogamov", email: "bahrominogamov@gmail.com", phone: "+998901112236", img: "https://img.freepik.com/free-vector/coding-concept-illustration_114360-939.jpg", score: 68, group: "C" },

    { id: 5, name: "Azizbek Davronov", username: "azizbekdavronov", email: "azizbekdavronov@gmail.com", phone: "+998901112237", img: "https://img.freepik.com/free-vector/web-development-concept_114360-1099.jpg", score: 39, group: "B" },

    { id: 6, name: "Shoxruz Djurayev", username: "shoxruzdjurayev", email: "shoxruzdjurayev@gmail.com", phone: "+998901112238", img: "https://img.freepik.com/free-vector/programming-background-coding_52683-12224.jpg", score: 77, group: "A" },

    { id: 7, name: "Abdulloh Haliljonov", username: "abdullohhaliljonov", email: "abdullohhaliljonov@gmail.com", phone: "+998901112239", img: "https://img.freepik.com/free-vector/app-development-concept_52683-47931.jpg", score: 53, group: "C" },

    { id: 8, name: "Hojiakbar Joraniyozov", username: "hojiakbarjoraniyozov", email: "hojiakbarjoraniyozov@gmail.com", phone: "+998901112240", img: "https://img.freepik.com/free-vector/frontend-development-concept_114360-2224.jpg", score: 81, group: "B" },

    { id: 9, name: "Asadbek Izzatullayev", username: "asadbekizzatullayev", email: "asadbekizzatullayev@gmail.com", phone: "+998901112241", img: "https://img.freepik.com/free-vector/backend-development-concept_114360-1095.jpg", score: 70, group: "A" },

    { id: 10, name: "Abdulloh Karimov", username: "abdullohkarimov", email: "abdullohkarimov@gmail.com", phone: "+998901112242", img: "https://img.freepik.com/free-vector/debugging-concept-illustration_114360-1819.jpg", score: 94, group: "C" },

    { id: 11, name: "Sardor Mirzalukov", username: "sardormirzalukov", email: "sardormirzalukov@gmail.com", phone: "+998901112243", img: "https://img.freepik.com/free-vector/web-design-concept_114360-4444.jpg", score: 66, group: "B" },

    { id: 12, name: "Munisa Nurboyeva", username: "munisanurboyeva", email: "munisanurboyeva@gmail.com", phone: "+998901112244", img: "https://img.freepik.com/free-vector/ux-concept-illustration_114360-1401.jpg", score: 95, group: "A" },

    { id: 13, name: "Boburjon Nazirkulov", username: "boburjonnazirkulov", email: "boburjonnazirkulov@gmail.com", phone: "+998901112245", img: "https://img.freepik.com/free-vector/javascript-frameworks-concept_114360-1348.jpg", score: 49, group: "C" },

    { id: 14, name: "Abdulhafiz Odiljonov", username: "abdulhafizodiljonov", email: "abdulhafizodiljonov@gmail.com", phone: "+998901112246", img: "https://img.freepik.com/free-vector/api-concept-illustration_114360-982.jpg", score: 87, group: "B" },

    { id: 15, name: "Bobur Qodirov", username: "boburqodirov", email: "boburqodirov@gmail.com", phone: "+998901112247", img: "https://img.freepik.com/free-vector/database-storage-concept_114360-4543.jpg", score: 72, group: "A" },

    { id: 16, name: "Aziz Rakhmonaliyev", username: "azizrakhmonaliyev", email: "azizrakhmonaliyev@gmail.com", phone: "+998901112248", img: "https://img.freepik.com/free-vector/cloud-computing-concept_114360-1006.jpg", score: 90, group: "C" },

    { id: 17, name: "Azizbek Rashidov", username: "azizbekrashidov", email: "azizbekrashidov@gmail.com", phone: "+998901112249", img: "https://img.freepik.com/free-vector/coding-workshop-concept_114360-1117.jpg", score: 44, group: "B" },

    { id: 18, name: "Shaxriyor Abdunazarov", username: "shaxriyorabdunazarov", email: "shaxriyorabdunazarov@gmail.com", phone: "+998901112250", img: "https://img.freepik.com/free-vector/mobile-app-development-concept_114360-732.jpg", score: 83, group: "A" },

    { id: 19, name: "Munisa Shukurullayeva", username: "munisashukurullayeva", email: "munisashukurullayeva@gmail.com", phone: "+998901112251", img: "https://img.freepik.com/free-vector/seo-concept-illustration_114360-557.jpg", score: 76, group: "C" },

    { id: 20, name: "Jonibek Sulaymonov", username: "jonibeksulaymonov", email: "jonibeksulaymonov@gmail.com", phone: "+998901112252", img: "https://img.freepik.com/free-vector/code-review-concept_114360-1242.jpg", score: 88, group: "B" },

    { id: 21, name: "Azamat Tohirjonov", username: "azamattohirjonov", email: "azamattohirjonov@gmail.com", phone: "+998901112253", img: "https://img.freepik.com/free-vector/it-support-concept_114360-1211.jpg", score: 19, group: "A" },

    { id: 22, name: "Zahro Abdurahmonova", username: "zahroabdurahmonova", email: "zahroabdurahmonova@gmail.com", phone: "+998901112254", img: "https://img.freepik.com/free-vector/women-coding-concept_114360-744.jpg", score: 92, group: "C" }
];