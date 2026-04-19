document.addEventListener("DOMContentLoaded", () => {

  /* ================= ELEMENTS ================= */
  const grid = document.getElementById("grid");
  const detailsModal = document.getElementById("detailsModal");
  const loginModal = document.getElementById("loginModal");

  /* ================= STATE ================= */
  let currentUser = null;
  let currentLang = "en";
  let favorites = JSON.parse(localStorage.getItem("streamflix_favorites")) || [];

  /* ================= DATA ================= */
  const data = [

  /* ===== MOVIES (20) ===== */
  {title:"Inception",type:"movie",year:2010,rating:8.8,
  img:"https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
  desc_en:"Dream infiltration theft story.",
  desc_ar:"قصة سرقة عبر الأحلام.",
  video:"https://www.youtube.com/embed/YoHD9XEInc0"},

  {title:"Interstellar",type:"movie",year:2014,rating:8.6,
  img:"https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  desc_en:"Space travel to save humanity.",
  desc_ar:"رحلة فضائية لإنقاذ البشرية.",
  video:"https://www.youtube.com/embed/zSWdZVtXT7E"},

  {title:"The Dark Knight",type:"movie",year:2008,rating:9.0,
  img:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  desc_en:"Batman vs Joker.",
  desc_ar:"باتمان ضد الجوكر.",
  video:"https://www.youtube.com/embed/EXeTwQWrcwY"},

  {title:"Joker",type:"movie",year:2019,rating:8.4,
  img:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  desc_en:"Origin of Joker.",
  desc_ar:"أصل شخصية الجوكر.",
  video:"https://www.youtube.com/embed/zAGVQLHvwOY"},

  {title:"Avengers Endgame",type:"movie",year:2019,rating:8.4,
  img:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  desc_en:"Final Avengers battle.",
  desc_ar:"المعركة النهائية للأفنجرز.",
  video:"https://www.youtube.com/embed/TcMBFSGVi1c"},

  {title:"Titanic",type:"movie",year:1997,rating:7.9,
  img:"https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
  desc_en:"Love story on doomed ship.",
  desc_ar:"قصة حب على سفينة غارقة.",
  video:"https://www.youtube.com/embed/kVrqfYjkTdQ"},

  {title:"The Matrix",type:"movie",year:1999,rating:8.7,
  img:"https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  desc_en:"Virtual reality vs real world.",
  desc_ar:"الواقع الافتراضي ضد العالم الحقيقي.",
  video:"https://www.youtube.com/embed/vKQi3bBA1y8"},

  {title:"Gladiator",type:"movie",year:2000,rating:8.5,
  img:"https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
  desc_en:"Roman general seeks revenge.",
  desc_ar:"جنرال روماني يسعى للانتقام.",
  video:"https://www.youtube.com/embed/owK1qxDselE"},

  {title:"Forrest Gump",type:"movie",year:1994,rating:8.8,
  img:"https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
  desc_en:"Life journey of Forrest.",
  desc_ar:"رحلة حياة فورست.",
  video:"https://www.youtube.com/embed/bLvqoHBptjg"},

  {title:"The Godfather",type:"movie",year:1972,rating:9.2,
  img:"https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  desc_en:"Mafia family saga.",
  desc_ar:"ملحمة عائلة المافيا.",
  video:"https://www.youtube.com/embed/sY1S34973zA"},

  {title:"Pulp Fiction",type:"movie",year:1994,rating:8.9,
  img:"https://image.tmdb.org/t/p/w500/4P2Tz5m2g9bKx1q3gZb0sF8p2cA.jpg",
  desc_en:"Crime stories intertwined.",
  desc_ar:"قصص جريمة متشابكة.",
  video:"https://www.youtube.com/embed/s7EdQ4FqbhY"},

  {title:"Fight Club",type:"movie",year:1999,rating:8.8,
  img:"https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
  desc_en:"Underground fight society.",
  desc_ar:"مجتمع قتال سري.",
  video:"https://www.youtube.com/embed/qtRKdVHc-cE"},

  {title:"The Shawshank Redemption",type:"movie",year:1994,rating:9.3,
  img:"https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  desc_en:"Hope inside prison.",
  desc_ar:"الأمل داخل السجن.",
  video:"https://www.youtube.com/embed/6hB3S9bIaco"},

  {title:"The Lion King",type:"movie",year:1994,rating:8.5,
  img:"https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
  desc_en:"Lion prince journey.",
  desc_ar:"رحلة الأمير الأسد.",
  video:"https://www.youtube.com/embed/7TavVZMewpY"},

  {title:"Avatar",type:"movie",year:2009,rating:7.8,
  img:"https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
  desc_en:"Humans vs Na'vi.",
  desc_ar:"البشر ضد النافي.",
  video:"https://www.youtube.com/embed/5PSNL1qE6VY"},

  {title:"The Avengers",type:"movie",year:2012,rating:8.0,
  img:"https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
  desc_en:"Superheroes unite.",
  desc_ar:"الأبطال الخارقون يتحدون.",
  video:"https://www.youtube.com/embed/eOrNdBpGMv8"},

  {title:"Iron Man",type:"movie",year:2008,rating:7.9,
  img:"https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
  desc_en:"Birth of Iron Man.",
  desc_ar:"ولادة الرجل الحديدي.",
  video:"https://www.youtube.com/embed/8ugaeA-nMTc"},

  {title:"Doctor Strange",type:"movie",year:2016,rating:7.5,
  img:"https://image.tmdb.org/t/p/w500/uGBVj3b2hXOd9u1qV6P4s9b1G7K.jpg",
  desc_en:"Sorcerer learns magic.",
  desc_ar:"ساحر يتعلم السحر.",
  video:"https://www.youtube.com/embed/HSzx-zryEgM"},

  {title:"Black Panther",type:"movie",year:2018,rating:7.3,
  img:"https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
  desc_en:"King of Wakanda.",
  desc_ar:"ملك واكاندا.",
  video:"https://www.youtube.com/embed/xjDjIWPwcPU"},
      /* ===== SERIES (20) ===== */
  {title:"The Boys",type:"series",year:2019,rating:8.7,
  img:"https://image.tmdb.org/t/p/w500/7Ns6tO3aYjppI5bFhyYz0Dq2X.jpg",
  desc_en:"Anti-superhero squad.",
  desc_ar:"فرقة ضد الأبطال الخارقين.",
  video:"https://www.youtube.com/embed/MV8rRcq0Q5c"},

  {title:"Peaky Blinders",type:"series",year:2013,rating:8.8,
  img:"https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
  desc_en:"Gangster family in Birmingham.",
  desc_ar:"عائلة عصابات في برمنغهام.",
  video:"https://www.youtube.com/embed/oVzVdvGIC7U"},

  {title:"Sherlock",type:"series",year:2010,rating:9.1,
  img:"https://image.tmdb.org/t/p/w500/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg",
  desc_en:"Modern detective Sherlock Holmes.",
  desc_ar:"المحقق شيرلوك هولمز في العصر الحديث.",
  video:"https://www.youtube.com/embed/IrBKwzLqGJw"},

  {title:"House of Cards",type:"series",year:2013,rating:8.7,
  img:"https://image.tmdb.org/t/p/w500/if5R8Q4T2W3XcQ0k2a3Z5Y9kQqD.jpg",
  desc_en:"Political drama in Washington.",
  desc_ar:"دراما سياسية في واشنطن.",
  video:"https://www.youtube.com/embed/ULwUzF1q5w4"},

  {title:"Lost",type:"series",year:2004,rating:8.3,
  img:"https://image.tmdb.org/t/p/w500/2KFd8e8K8q1v1x9xQ3yZ9q0Z0Qe.jpg",
  desc_en:"Survivors on mysterious island.",
  desc_ar:"ناجون على جزيرة غامضة.",
  video:"https://www.youtube.com/embed/KTu8iDynwNc"},

  {title:"Prison Break",type:"series",year:2005,rating:8.3,
  img:"https://image.tmdb.org/t/p/w500/j3Z3X3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3.jpg",
  desc_en:"Escape from prison.",
  desc_ar:"الهروب من السجن.",
  video:"https://www.youtube.com/embed/AL9zLctDJaU"},

  {title:"Friends",type:"series",year:1994,rating:8.9,
  img:"https://image.tmdb.org/t/p/w500/gmL1z5Y3Y3Y3Y3Y3Y3Y3Y3Y3.jpg",
  desc_en:"Comedy about six friends.",
  desc_ar:"كوميديا عن ستة أصدقاء.",
  video:"https://www.youtube.com/embed/hDNNmeeJs1Q"},

  {title:"The Office",type:"series",year:2005,rating:8.9,
  img:"https://image.tmdb.org/t/p/w500/qWn1z1z1z1z1z1z1z1z1z1z1.jpg",
  desc_en:"Comedy in office life.",
  desc_ar:"كوميديا عن حياة المكتب.",
  video:"https://www.youtube.com/embed/dJ9fD2S0jKE"},

  {title:"How I Met Your Mother",type:"series",year:2005,rating:8.3,
  img:"https://image.tmdb.org/t/p/w500/yA1z1z1z1z1z1z1z1z1z1z1.jpg",
  desc_en:"Story of Ted and friends.",
  desc_ar:"قصة تيد وأصدقائه.",
  video:"https://www.youtube.com/embed/cXFFlRzSOzw"},

  {title:"The Crown",type:"series",year:2016,rating:8.7,
  img:"https://image.tmdb.org/t/p/w500/2t5z5z5z5z5z5z5z5z5z5z5.jpg",
  desc_en:"Life of Queen Elizabeth II.",
  desc_ar:"حياة الملكة إليزابيث الثانية.",
  video:"https://www.youtube.com/embed/JWtnJjn6ng0"},

  {title:"Westworld",type:"series",year:2016,rating:8.6,
  img:"https://image.tmdb.org/t/p/w500/6LrSj9Y9Y9Y9Y9Y9Y9Y9Y9.jpg",
  desc_en:"Theme park with AI hosts.",
  desc_ar:"مدينة ملاهي مع مضيفين آليين.",
  video:"https://www.youtube.com/embed/qLkCzj2S0tQ"},

  {title:"Better Call Saul",type:"series",year:2015,rating:8.9,
  img:"https://image.tmdb.org/t/p/w500/3P8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8.jpg",
  desc_en:"Lawyer Jimmy McGill story.",
  desc_ar:"قصة المحامي جيمي ماكغيل.",
  video:"https://www.youtube.com/embed/HN4oydykJFc"},

  {title:"Narcos",type:"series",year:2015,rating:8.8,
  img:"https://image.tmdb.org/t/p/w500/7I3t3t3t3t3t3t3t3t3t3t3.jpg",
  desc_en:"Story of Pablo Escobar.",
  desc_ar:"قصة بابلو إسكوبار.",
  video:"https://www.youtube.com/embed/ugSV6vLQ0pY"},

  {title:"Vikings",type:"series",year:2013,rating:8.5,
  img:"https://image.tmdb.org/t/p/w500/oktTNFM8PzdseiK1X0E0XhB6s3z.jpg",
  desc_en:"Saga of Viking Ragnar.",
  desc_ar:"ملحمة الفايكنغ راجنار.",
  video:"https://www.youtube.com/embed/9GgxinPwAGc"},

  {title:"Chernobyl",type:"series",year:2019,rating:9.4,
  img:"https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
  desc_en:"Nuclear disaster story.",
  desc_ar:"قصة كارثة نووية.",
  video:"https://www.youtube.com/embed/s9APLXM9Ei8"},

  {title:"Dexter",type:"series",year:2006,rating:8.6,
  img:"https://image.tmdb.org/t/p/w500/4CzK1ZK1ZK1ZK1ZK1ZK1ZK1.jpg",
  desc_en:"Serial killer with code.",
  desc_ar:"قاتل متسلسل بقانون خاص.",
  video:"https://www.youtube.com/embed/YQeUmSD1c3g"},

  {title:"The Mandalorian",type:"series",year:2019,rating:8.7,
  img:"https://image.tmdb.org/t/p/w500/6Lw54zxm6BAEKJeGlabyzzR5Juu.jpg",
  desc_en:"Star Wars bounty hunter.",
  desc_ar:"صياد جوائز من حرب النجوم.",
  video:"https://www.youtube.com/embed/aOC8E8z_ifw"},

  {title:"Loki",type:"series",year:2021,rating:8.2,
  img:"https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg",
  desc_en:"Marvel god of mischief.",
  desc_ar:"إله الشر من مارفل.",
  video:"https://www.youtube.com/embed/nW948Va-l10"},

  {title:"WandaVision",type:"series",year:2021,rating:8.0,
  img:"https://image.tmdb.org/t/p/w500/fuKY6o5o5o5o5o5o5o5o5o.jpg",
  desc_en:"Marvel sitcom mystery.",
  desc_ar:"كوميديا غامضة من مارفل.",
  video:"https://www.youtube.com/embed/sj9J2ecsSpo"},
      /* ===== ANIME (20) ===== */
  {title:"Fullmetal Alchemist: Brotherhood",type:"anime",year:2009,rating:9.1,
  img:"https://picsum.photos/seed/fma/500/750",
  desc_en:"Alchemy brothers seek Philosopher's Stone.",
  desc_ar:"الأخوان الكيميائيان يبحثان عن حجر الفيلسوف.",
  video:"https://www.youtube.com/embed/dv3ZlsE7X1Y"},

  {title:"Bleach",type:"anime",year:2004,rating:8.2,
  img:"https://picsum.photos/seed/bleach/500/750",
  desc_en:"Ichigo becomes Soul Reaper.",
  desc_ar:"إيتشيغو يصبح حاصد الأرواح.",
  video:"https://www.youtube.com/embed/8kZtI1QzP6g"},

  {title:"Fairy Tail",type:"anime",year:2009,rating:8.0,
  img:"https://picsum.photos/seed/fairytail/500/750",
  desc_en:"Guild of wizards adventures.",
  desc_ar:"مغامرات نقابة السحرة.",
  video:"https://www.youtube.com/embed/4KSN3lZz0Yg"},

  {title:"Tokyo Ghoul",type:"anime",year:2014,rating:8.0,
  img:"https://picsum.photos/seed/tokyoghoul/500/750",
  desc_en:"Boy becomes half-ghoul.",
  desc_ar:"فتى يصبح نصف غول.",
  video:"https://www.youtube.com/embed/vGuQeQsoRgU"},

  {title:"My Hero Academia",type:"anime",year:2016,rating:8.4,
  img:"https://picsum.photos/seed/mha/500/750",
  desc_en:"Students train to be heroes.",
  desc_ar:"طلاب يتدربون ليصبحوا أبطال.",
  video:"https://www.youtube.com/embed/wIb3nnOeves"},

  {title:"Hunter x Hunter",type:"anime",year:2011,rating:9.0,
  img:"https://picsum.photos/seed/hxh/500/750",
  desc_en:"Gon seeks his father.",
  desc_ar:"غون يبحث عن والده.",
  video:"https://www.youtube.com/embed/d6kBeJjTGnY"},

  {title:"One Punch Man",type:"anime",year:2015,rating:8.7,
  img:"https://picsum.photos/seed/opm/500/750",
  desc_en:"Hero defeats with one punch.",
  desc_ar:"بطل يهزم بضربة واحدة.",
  video:"https://www.youtube.com/embed/2JAElThbKrI"},

  {title:"Sword Art Online",type:"anime",year:2012,rating:7.6,
  img:"https://picsum.photos/seed/sao/500/750",
  desc_en:"Players trapped in VR game.",
  desc_ar:"لاعبون عالقون في لعبة واقع افتراضي.",
  video:"https://www.youtube.com/embed/6ohYYtxfDCg"},

  {title:"Cowboy Bebop",type:"anime",year:1998,rating:8.9,
  img:"https://picsum.photos/seed/cowboybebop/500/750",
  desc_en:"Space bounty hunters.",
  desc_ar:"صيادو جوائز في الفضاء.",
  video:"https://www.youtube.com/embed/qig4KOK2R2g"},

  {title:"Neon Genesis Evangelion",type:"anime",year:1995,rating:8.5,
  img:"https://picsum.photos/seed/evangelion/500/750",
  desc_en:"Mecha vs angels.",
  desc_ar:"مكا ضد الملائكة.",
  video:"https://www.youtube.com/embed/13nSISwxrY4"},

  {title:"Yu-Gi-Oh!",type:"anime",year:2000,rating:7.5,
  img:"https://picsum.photos/seed/yugioh/500/750",
  desc_en:"Card duel battles.",
  desc_ar:"معارك مبارزة بالبطاقات.",
  video:"https://www.youtube.com/embed/20QzjL2l3nY"},

  {title:"Digimon Adventure",type:"anime",year:1999,rating:7.8,
  img:"https://picsum.photos/seed/digimon/500/750",
  desc_en:"Kids in digital world.",
  desc_ar:"أطفال في العالم الرقمي.",
  video:"https://www.youtube.com/embed/1Y3Yf8zK0nE"},

  {title:"Pokémon",type:"anime",year:1997,rating:7.5,
  img:"https://picsum.photos/seed/pokemon/500/750",
  desc_en:"Ash catches Pokémon.",
  desc_ar:"آش يصطاد البوكيمون.",
  video:"https://www.youtube.com/embed/rg6CiPI6h2g"},

  {title:"Yu Yu Hakusho",type:"anime",year:1992,rating:8.4,
  img:"https://picsum.photos/seed/yuyuhakusho/500/750",
  desc_en:"Spirit detective battles.",
  desc_ar:"معارك المحقق الروحي.",
  video:"https://www.youtube.com/embed/8i7wKQzQfXc"},

  {title:"Akame ga Kill!",type:"anime",year:2014,rating:7.9,
  img:"https://picsum.photos/seed/akame/500/750",
  desc_en:"Assassins fight empire.",
  desc_ar:"قتلة يقاتلون الإمبراطورية.",
  video:"https://www.youtube.com/embed/7aMOurgDB-o"},

  {title:"Black Clover",type:"anime",year:2017,rating:8.0,
  img:"https://picsum.photos/seed/blackclover/500/750",
  desc_en:"Boy without magic aims high.",
  desc_ar:"فتى بلا سحر يطمح للقمة.",
  video:"https://www.youtube.com/embed/9aW3lQnQGJQ"},

  {title:"Blue Exorcist",type:"anime",year:2011,rating:7.5,
  img:"https://picsum.photos/seed/blueexorcist/500/750",
  desc_en:"Son of Satan fights demons.",
  desc_ar:"ابن الشيطان يقاتل الشياطين.",
  video:"https://www.youtube.com/embed/5BRzjLzq0nE"},

  {title:"Code Geass",type:"anime",year:2006,rating:8.7,
  img:"https://picsum.photos/seed/codegeass/500/750",
  desc_en:"Lelouch gains Geass power.",
  desc_ar:"لولوش يحصل على قوة الجياس.",
  video:"https://www.youtube.com/embed/0DqL6QY0zSg"},

  {title:"Gintama",type:"anime",year:2006,rating:8.9,
  img:"https://picsum.photos/seed/gintama/500/750",
  desc_en:"Comedy samurai adventures.",
  desc_ar:"مغامرات كوميدية للساموراي.",
  video:"https://www.youtube.com/embed/7R5t0rVfYxw"},

  {title:"Haikyuu!!",type:"anime",year:2014,rating:8.7,
  img:"https://picsum.photos/seed/haikyuu/500/750",
  desc_en:"High school volleyball team.",
  desc_ar:"فريق كرة الطائرة في المدرسة.",
  video:"https://www.youtube.com/embed/tt8wE1zYfSg"}

  ];
  
// ================= SHOW =================
function show(list){
  grid.innerHTML = "";
  list.forEach(i=>{
    grid.innerHTML += `
      <div class="card" onclick="openDetails('${i.title}')">
        <img src="${i.img}">
        <h4>${i.title}</h4>
        <small>${i.year} | ⭐ ${i.rating}</small>
      </div>
    `;
  });
}

// تشغيل أولي
show(data);

// ================= SEARCH =================
document.querySelector(".search").addEventListener("input",(e)=>{
  let v = e.target.value.toLowerCase();
  show(data.filter(i=>i.title.toLowerCase().includes(v)));
});

// ================= FILTER =================
window.showAll = function(){
  show(data);
};

window.filterType = function(t){
  show(data.filter(i=>i.type===t));
};
  
window.openDetails = function(title){
  const item = data.find(i => i.title === title);
  if(!item) return;

  const desc = currentLang === "ar" ? item.desc_ar : item.desc_en;

  detailsModal.innerHTML = `
    <div class="modal-content" style="width:600px;max-height:90%;overflow:auto;">
      <h2>${item.title}</h2>
      <img src="${item.img}" style="width:100%;border-radius:10px;">
      <p>${desc}</p>
      <small>${item.year} | ⭐ ${item.rating}</small>
      <div style="margin-top:15px;">
        <iframe width="100%" height="315" src="${item.video}" frameborder="0" allowfullscreen></iframe>
      </div>
      <button onclick="addFavorite('${item.title}')">Add to Favorites</button>
      <button onclick="closeDetails()">Close</button>
    </div>
  `;

  detailsModal.style.display = "flex";
};

window.closeDetails = function(){
  detailsModal.style.display = "none";
};
  
window.openLogin = function(){
  loginModal.style.display = "flex";
};

window.closeLogin = function(){
  loginModal.style.display = "none";
};

window.login = function(){
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if(username && password){
    localStorage.setItem("streamflix_user", username);
    currentUser = username;
    document.querySelector(".login-btn").innerText = username;
    closeLogin();
  } else {
    alert("Please enter username and password");
  }
};

// restore user
const savedUser = localStorage.getItem("streamflix_user");
if(savedUser){
  currentUser = savedUser;
  document.querySelector(".login-btn").innerText = savedUser;
}
  
window.addFavorite = function(title){
  if(!currentUser){
    alert("Please login first!");
    return;
  }

  if(!favorites.includes(title)){
    favorites.push(title);
    localStorage.setItem("streamflix_favorites", JSON.stringify(favorites));
    alert("Added to favorites!");
  } else {
    alert("Already in favorites!");
  }
};

window.openFavorites = function(){
  if(!currentUser){
    alert("Please login first!");
    return;
  }

  const favItems = data.filter(i => favorites.includes(i.title));

  detailsModal.innerHTML = `
    <div class="modal-content" style="width:600px;max-height:90%;overflow:auto;">
      <h2>Favorites</h2>
      ${favItems.map(item=>`
        <div style="margin:10px 0;padding:10px;background:#333;border-radius:8px;">
          <h3>${item.title}</h3>
          <small>${item.year} | ⭐ ${item.rating}</small>
          <button onclick="openDetails('${item.title}')">View</button>
        </div>
      `).join("")}
      <button onclick="closeDetails()">Close</button>
    </div>
  `;

  detailsModal.style.display = "flex";
};
  
let currentLang = "en";

const translations = {
  en: {
    home: "Home",
    movies: "Movies",
    series: "Series",
    anime: "Anime",
    favorites: "Favorites",
    hero: "Watch Movies, Series & Anime",
    login: "Login",
    lang: "Language"
  },
  ar: {
    home: "الرئيسية",
    movies: "أفلام",
    series: "مسلسلات",
    anime: "أنمي",
    favorites: "المفضلة",
    hero: "شاهد الأفلام والمسلسلات والأنمي",
    login: "تسجيل الدخول",
    lang: "اللغة"
  }
};

window.toggleLang = function(){
  currentLang = currentLang === "en" ? "ar" : "en";

  document.querySelectorAll("[data-lang]").forEach(el=>{
    const key = el.getAttribute("data-lang");
    el.innerText = translations[currentLang][key];
  });
};

});
