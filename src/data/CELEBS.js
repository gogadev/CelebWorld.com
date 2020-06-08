const CELEBS = [
  {
    id: 1,
    name: "Ariana Grande",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores cupiditate deleniti dolore, ullam pariatur distinctio ducimus dolorem quos voluptatem eveniet quod minima molestiae, cum tempora ex harum est animi voluptatum blanditiis consequatur illum! Error hic recusandae veritatis, consectetur culpa quisquam, cupiditate corrupti architecto quidem velit repudiandae adipisci maxime quam officiis repellendus impedit, laborum nulla nemo earum ut cum in.",
    about_:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores cupiditate deleniti dolore, ullam pariatur distinctio ducimus dolorem quos voluptatem eveniet quod minima molestiae, cum tempora ex harum est animi voluptatum blanditiis consequatur illum! Error hic recusandae veritatis, consectetur culpa quisquam, cupiditate corrupti architecto quidem velit repudiandae adipisci maxime quam officiis repellendus impedit, laborum nulla nemo earum ut cum in.",

    img_src: "https://data.whicdn.com/images/328091031/original.jpg",
    profile_img: "https://data.whicdn.com/images/324429750/original.jpg",
  },
  {
    id: 2,
    name: "Mila Kunis",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores cupiditate deleniti dolore, ullam pariatur distinctio ducimus dolorem quos voluptatem eveniet quod minima molestiae, cum tempora ex harum est animi voluptatum blanditiis consequatur illum! Error hic recusandae veritatis, consectetur culpa quisquam, cupiditate corrupti architecto quidem velit repudiandae adipisci maxime quam officiis repellendus impedit, laborum nulla nemo earum ut cum in.",
    about_:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores cupiditate deleniti dolore, ullam pariatur distinctio ducimus dolorem quos voluptatem eveniet quod minima molestiae, cum tempora ex harum est animi voluptatum blanditiis consequatur illum! Error hic recusandae veritatis, consectetur culpa quisquam, cupiditate corrupti architecto quidem velit repudiandae adipisci maxime quam officiis repellendus impedit, laborum nulla nemo earum ut cum in.",

    img_src:
      "https://lh3.googleusercontent.com/proxy/tu-hjy8mbwzCNsViLOzng-CVo3R6vwtUpLaS5St3Uifj5DnSQY9DiRkRoffhCZaNMMmiiK4rg8g71-wSwAPhNRG71H-pHOaB7SZiTjWWf6Fgz49XZH-aOAduJOvUKjsCYD63v52X6Q1Hnuo1oYWzaHuF_XU",
    profile_img:
      "https://i.pinimg.com/originals/3a/c1/d5/3ac1d52f3925bfe3fdb20e4fdd6cfb75.png",
  },
  {
    id: 3,
    name: "Selena Gomez",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores cupiditate deleniti dolore, ullam pariatur distinctio ducimus dolorem quos voluptatem eveniet quod minima molestiae, cum tempora ex harum est animi voluptatum blanditiis consequatur illum! Error hic recusandae veritatis, consectetur culpa quisquam, cupiditate corrupti architecto quidem velit repudiandae adipisci maxime quam officiis repellendus impedit, laborum nulla nemo earum ut cum in.",
    about_:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores cupiditate deleniti dolore, ullam pariatur distinctio ducimus dolorem quos voluptatem eveniet quod minima molestiae, cum tempora ex harum est animi voluptatum blanditiis consequatur illum! Error hic recusandae veritatis, consectetur culpa quisquam, cupiditate corrupti architecto quidem velit repudiandae adipisci maxime quam officiis repellendus impedit, laborum nulla nemo earum ut cum in.",

    img_src:
      "https://www.theplace2.ru/cache/archive/selena_gomez/img/image(458)-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg",
    profile_img:
      "https://25.media.tumblr.com/3e0c5280dc25e376e93f9161ef69ab0a/tumblr_mipmpkrsAD1rxckzmo1_500.jpg",
  },
  {
    id: 4,
    name: "Romee Strijd",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores cupiditate deleniti dolore, ullam pariatur distinctio ducimus dolorem quos voluptatem eveniet quod minima molestiae, cum tempora ex harum est animi voluptatum blanditiis consequatur illum! Error hic recusandae veritatis, consectetur culpa quisquam, cupiditate corrupti architecto quidem velit repudiandae adipisci maxime quam officiis repellendus impedit, laborum nulla nemo earum ut cum in.",
    about_:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores cupiditate deleniti dolore, ullam pariatur distinctio ducimus dolorem quos voluptatem eveniet quod minima molestiae, cum tempora ex harum est animi voluptatum blanditiis consequatur illum! Error hic recusandae veritatis, consectetur culpa quisquam, cupiditate corrupti architecto quidem velit repudiandae adipisci maxime quam officiis repellendus impedit, laborum nulla nemo earum ut cum in.",

    img_src: "https://data.whicdn.com/images/210280161/original.jpg",
    profile_img:
      "https://i.pinimg.com/originals/95/22/33/952233ab8e10ffd39a7b8503a0bab994.png",
  },
  {
    id: 5,
    name: "Kelly Clarkson",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores cupiditate deleniti dolore, ullam pariatur distinctio ducimus dolorem quos voluptatem eveniet quod minima molestiae, cum tempora ex harum est animi voluptatum blanditiis consequatur illum! Error hic recusandae veritatis, consectetur culpa quisquam, cupiditate corrupti architecto quidem velit repudiandae adipisci maxime quam officiis repellendus impedit, laborum nulla nemo earum ut cum in.",
    about_:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores cupiditate deleniti dolore, ullam pariatur distinctio ducimus dolorem quos voluptatem eveniet quod minima molestiae, cum tempora ex harum est animi voluptatum blanditiis consequatur illum! Error hic recusandae veritatis, consectetur culpa quisquam, cupiditate corrupti architecto quidem velit repudiandae adipisci maxime quam officiis repellendus impedit, laborum nulla nemo earum ut cum in.",

    img_src:
      "https://lastfm.freetls.fastly.net/i/u/770x0/e427314658384deabd95caa8e56b5d36.jpg",
    profile_img:
      "https://thedailyaztec.com/wp-content/uploads/2019/01/Kelly-Clarkson-002-high-res-bw-credit-Vincent-Peters_color.jpg",
  },
  {
    id: 6,
    name: "Kate Winslet",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores cupiditate deleniti dolore, ullam pariatur distinctio ducimus dolorem quos voluptatem eveniet quod minima molestiae, cum tempora ex harum est animi voluptatum blanditiis consequatur illum! Error hic recusandae veritatis, consectetur culpa quisquam, cupiditate corrupti architecto quidem velit repudiandae adipisci maxime quam officiis repellendus impedit, laborum nulla nemo earum ut cum in.",
    about_:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores cupiditate deleniti dolore, ullam pariatur distinctio ducimus dolorem quos voluptatem eveniet quod minima molestiae, cum tempora ex harum est animi voluptatum blanditiis consequatur illum! Error hic recusandae veritatis, consectetur culpa quisquam, cupiditate corrupti architecto quidem velit repudiandae adipisci maxime quam officiis repellendus impedit, laborum nulla nemo earum ut cum in.",

    img_src:
      "https://i.pinimg.com/736x/a8/23/bd/a823bd77c1419cf712f9c4da687d2834--kate-winselt-hairstyle-ideas.jpg",
    profile_img:
      "https://i.pinimg.com/originals/5b/0d/6b/5b0d6b195045429e7aa2ac0b541fe358.jpg",
  },
  {
    id: 7,
    name: "Perrie Edwards",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores cupiditate deleniti dolore, ullam pariatur distinctio ducimus dolorem quos voluptatem eveniet quod minima molestiae, cum tempora ex harum est animi voluptatum blanditiis consequatur illum! Error hic recusandae veritatis, consectetur culpa quisquam, cupiditate corrupti architecto quidem velit repudiandae adipisci maxime quam officiis repellendus impedit, laborum nulla nemo earum ut cum in.",
    about_:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores cupiditate deleniti dolore, ullam pariatur distinctio ducimus dolorem quos voluptatem eveniet quod minima molestiae, cum tempora ex harum est animi voluptatum blanditiis consequatur illum! Error hic recusandae veritatis, consectetur culpa quisquam, cupiditate corrupti architecto quidem velit repudiandae adipisci maxime quam officiis repellendus impedit, laborum nulla nemo earum ut cum in.",

    img_src:
      "https://i.pinimg.com/originals/31/3d/d7/313dd76caa926a8e9b3cace0d828d355.jpg",
    profile_img:
      "https://pbs.twimg.com/profile_images/713881431144079362/yEU2DXv3.jpg",
  },
  {
    id: 8,
    name: "Sandra Bullock",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores cupiditate deleniti dolore, ullam pariatur distinctio ducimus dolorem quos voluptatem eveniet quod minima molestiae, cum tempora ex harum est animi voluptatum blanditiis consequatur illum! Error hic recusandae veritatis, consectetur culpa quisquam, cupiditate corrupti architecto quidem velit repudiandae adipisci maxime quam officiis repellendus impedit, laborum nulla nemo earum ut cum in.",
    about_:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores cupiditate deleniti dolore, ullam pariatur distinctio ducimus dolorem quos voluptatem eveniet quod minima molestiae, cum tempora ex harum est animi voluptatum blanditiis consequatur illum! Error hic recusandae veritatis, consectetur culpa quisquam, cupiditate corrupti architecto quidem velit repudiandae adipisci maxime quam officiis repellendus impedit, laborum nulla nemo earum ut cum in.",
    img_src:
      "https://i.pinimg.com/originals/77/38/97/77389745d0542438ac442892236a834d.jpg",
    profile_img:
      "https://i.pinimg.com/474x/12/4d/e6/124de66cf7eed6183fc094c394811f78.jpg",
  },
];

export default CELEBS;
