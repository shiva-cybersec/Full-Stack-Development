const reels = [
    {
        isMuted: true,
        video: "../../videos/video1.mp4",
        userProfile: "../../photos/image1.jpg",
        isFollowed: true,
        isLiked: false,
        likeCount: 1200,
        commentCount: 45,
        shareCount: 20,
        userName: "alex_01",
        title: "Beautiful sunset view 🌅"
    },

    {
        isMuted: true,
        video: "../../videos/video2.mp4",
        userProfile: "../../photos/image2.jpg",
        isFollowed: false,
        isLiked: true,
        likeCount: 3400,
        commentCount: 120,
        shareCount: 60,
        userName: "john_doe",
        title: "Amazing travel adventure ✈️"
    },

    {
        isMuted: true,
        video: "../../videos/video3.mp4",
        userProfile: "../../photos/image3.jpg",
        isFollowed: true,
        isLiked: true,
        likeCount: 5600,
        commentCount: 230,
        shareCount: 100,
        userName: "sarah_07",
        title: "My daily workout routine 💪"
    },

    {
        isMuted: true,
        video: "../../videos/video4.mp4",
        userProfile: "../../photos/image4.jpg",
        isFollowed: false,
        isLiked: false,
        likeCount: 890,
        commentCount: 34,
        shareCount: 12,
        userName: "mike_99",
        title: "Coding late night session 💻"
    },

    {
        isMuted: true,
        video: "../../videos/video5.mp4",
        userProfile: "../../photos/image5.jpg",
        isFollowed: true,
        isLiked: false,
        likeCount: 7200,
        commentCount: 450,
        shareCount: 210,
        userName: "emma_creates",
        title: "Creative art process 🎨"
    },

    {
        isMuted: true,
        video: "../../videos/video6.mp4",
        userProfile: "../../photos/image6.jpg",
        isFollowed: false,
        isLiked: true,
        likeCount: 4300,
        commentCount: 180,
        shareCount: 75,
        userName: "gaming_zone",
        title: "Best gaming moments 🎮"
    },

    {
        isMuted: true,
        video: "../../videos/video7.mp4",
        userProfile: "../../photos/image7.jpg",
        isFollowed: true,
        isLiked: true,
        likeCount: 9500,
        commentCount: 670,
        shareCount: 300,
        userName: "nature_world",
        title: "Exploring beautiful nature 🌲"
    },

    {
        isMuted: true,
        video: "../../videos/video8.mp4",
        userProfile: "../../photos/image8.jpg",
        isFollowed: false,
        isLiked: false,
        likeCount: 1500,
        commentCount: 70,
        shareCount: 25,
        userName: "food_lovers",
        title: "Delicious food recipe 🍕"
    },

    {
        isMuted: true,
        video: "../../videos/video9.mp4",
        userProfile: "../../photos/image9.jpg",
        isFollowed: true,
        isLiked: false,
        likeCount: 6100,
        commentCount: 310,
        shareCount: 140,
        userName: "travel_diary",
        title: "Hidden places around the world 🌍"
    },

    {
        isMuted: true,
        video: "../../videos/video10.mp4",
        userProfile: "../../photos/image10.jpg",
        isFollowed: false,
        isLiked: true,
        likeCount: 7800,
        commentCount: 520,
        shareCount: 250,
        userName: "daily_vibes",
        title: "Motivation for your day 🚀"
    }
];



var allReels = document.querySelector('.all-reels')
var isMuted = true
function appData(){
    var sum = ''
    reels.forEach(function (elem,idx) {
    sum = sum + `<div class="reel">
          <video autoplay loop ${elem.ismuted?"muted":""} src="${elem.video}"></video>
           <div class="mute" id="${idx}">
           ${elem.ismuted?'<i class="ri-volume-up-line"></i>': '<i class="ri-volume-mute-line"></i>'}
           </div>
          <div class="bottom">
            <div class="user">
              <img
                src="${elem.userProfile}"
                alt="">
              <h ismuted:true,4>${elem.userName}</h4> 
              <button id="${idx}" class="follow">${elem.isFollowed?'Unfollow':'Follow'}</button>
            </div>
            <h3>${elem.title}</h3>
          </div>
          <div class="right">
            <div id="${idx}" class="like">
              <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="menu">
              <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
            </div>
          </div>
        </div>`
})

allReels.innerHTML = sum

}
appData()
allReels.addEventListener("click",function(dets){
   if(dets.target.className === "like"){
     if(!reels[dets.target.id].isLiked){
        reels[dets.target.id].likeCount++;
        reels[dets.target.id].isLiked = true
    }
    else{
        reels[dets.target.id].likeCount--
        reels[dets.target.id].isLiked = false;
    }

    appData()
   }
    if(dets.target.className==="follow"){
        if(!reels[dets.target.id].isFollowed){
            reels[dets.target.id].isFollowed = true;
        }
        else{
            reels[dets.target.id].isFollowed = false;
        }
    appData()

    }

     if(dets.target.className==="mute"){
        if(!reels[dets.target.id].ismuted){
            reels[dets.target.id].ismuted = true;
        }
        else{
            reels[dets.target.id].ismuted = false;
        }
    appData()

    }


   
})

 