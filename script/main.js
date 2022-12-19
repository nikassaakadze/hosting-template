
//after the page loads
window.onload = function(){

  //hide preloader after the page loads
  document.querySelector(".preloader").style.display = "none";

  //call responsive function
  responsive()

  //lazy load images
  const images = document.querySelectorAll("[data-src]");
    function preloadImage(e) {
        const r = e.getAttribute("data-src");
        r && (e.src = r);
    }
    const imgOptions = {},
    imgObserver = new IntersectionObserver((e, r) => {
        e.forEach((e) => {
            e.isIntersecting && (preloadImage(e.target), r.unobserve(e.target));
        });
    }, imgOptions);
    images.forEach((e) => {
        imgObserver.observe(e);
    });

}

//hide some elements on a specific screen size
$(".responsive-nav-burger").hide()
$(".responsive-navigation").hide()

//declare responsive function
function responsive(){
  if (window.matchMedia('(max-width: 900px)').matches) {
    $(".responsive-navigation").append($(".main-navigation-list"), $(".main-navigation-trial-widget"))
    $(".responsive-nav-burger").show()
  }else{
    $(".main-navigation-list").insertAfter( $( ".main-navigation-logo" ))
    $(".main-navigation-trial-widget").insertAfter( $( ".main-navigation-list" ))
    $(".responsive-nav-burger").hide()
    $(".responsive-navigation").hide()
  }
}

  $(window).resize(function() {
    responsive()
  });

  //show and hide navigation acordion
$(".responsive-nav-burger").on("click", () => {
  $(".responsive-navigation").slideToggle( " ")
})

$(document).ready(function(){

  //acordions logic
  $('.question-item').on('click', '.question-item-headline', function() {
		$('.question-item-content').slideUp().removeClass('flipInX');
		if($(this).next().is(':hidden')) {
			$(this).next().slideDown();
		} else {
			$(this).next().slideUp();
		}
	});

  //decltae slider function
  $('.slider-area').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

    //switch logic
    //althought change plans
    $(".switch").click(() => {
      $(".switch-circle").toggleClass("slide-moove")
      $(".price-monthly").toggleClass("display-none")
      $(".price-yearly").toggleClass("display-visible")
      $(".get-yearly").toggleClass("display-btn-visible")
      $(".get-monthly").toggleClass("display-none")
    })

})

  //import dom wrappers
  var slider_wrapper = document.querySelector(".slider-content")
  var plan_cards_wrapper = document.querySelector(".hosting-plan-cards")
  var rate_cards_wrapper = document.querySelector(".owl-carousel")
  var domain_cards_wrapper = document.querySelector(".domain-cards")

  //check wrappers
  if(slider_wrapper){
    getslider(slider_wrapper);
  }
  if(plan_cards_wrapper){
    getPlans(plan_cards_wrapper);
  } 
  if(rate_cards_wrapper){
    getReviews(rate_cards_wrapper);
  } 
  if(domain_cards_wrapper){
    getDomains(domain_cards_wrapper);
  }

// ----------------- local states and calls

function getslider(slider_wrapper){
  var slider_wrapper_state = [
    {
      slide_hero: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
    },
    {
      slide_hero: "https://embersoftware.com.au/wp-content/uploads/2020/07/firebase-logo.png"
    },
    {
      slide_hero: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Google_Drive_text_logo_grey.png"
    },
    {
      slide_hero: "https://dealsparkcoupon.com/wp-content/uploads/2021/01/icedrive-logo.png"
    },
    {
      slide_hero: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/OneDrive_logo_and_wordmark.svg/2560px-OneDrive_logo_and_wordmark.svg.png"
    },
    {
      slide_hero: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Yandex_logo.svg/1280px-Yandex_logo.svg.png"
    },
    {
      slide_hero: "https://blog.pcloud.com/wp-content/uploads/2016/07/pcloud-horizontal.svg"
    }
  ]
  slider_wrapper_state.map(slide => {
    slider_wrapper.innerHTML += `
    <div class="sl-item">
      <img data-src=${slide.slide_hero} alt="">
    </div>
  `
})
}


function getPlans(plan_cards_wrapper){
  var plan_cards_state = [
    {
      plan_status: 'Starter Pack',
      price_montly: 3.59,
      price_yearly: 4.59,
    },
    {
      plan_status: 'Plus Pack',
      price_montly: 6.59,
      price_yearly: 7.59,
    },
    {
      plan_status: 'Deluxe pack',
      price_montly: 12.59,
      price_yearly: 13.59,
    },
    {
      plan_status: 'Ultimate Pack',
      price_montly: 24.59,
      price_yearly: 14.59,
    },
  ]
  
    plan_cards_state.map(card => {
      plan_cards_wrapper.innerHTML += `
      <div class="plan-card">
        <h2 class="card-headline">${card.plan_status}</h2>
        <h6 class="card-desc-sm">Ideal solution for beginners.</h6>
        <div class="card-pricing">
          <h1 class="price-monthly">
            $<span class="price_val">${card.price_montly}</span>
            <sub> / mo</sub>
          </h1>
          <h1 class="price-yearly">
            $<span class="price_val">${card.price_yearly}</span>
            <sub> / mo</sub>
          </h1>
          <span class="price-before">Normally <span class="price-before-value">$9.99</span></span>
          <a href="./index.html" class="get-monthly">
            <h5>Get Monthly Plan</h5>
          </a>
          <a href="./index.html" class="get-yearly">
            <h5>Get Yearly Plan</h5>
          </a>
        </div>
        <div class="plan-fts-list">
          <h5>Top Features</h5>
          <ul class="d-flex-fdc">
            <li><i class="bi bi-capsule"></i> 1 Website</li>
            <li><i class="bi bi-capsule"></i>10 GB SSD Storage</li>
            <li><i class="bi bi-capsule"></i>Custom Themes</li>
            <li><i class="bi bi-capsule"></i>24/7 Customer Support</li>
          </ul>
        </div>
        <div class="plan-fts-list">
          <h5>Also Includes</h5>
          <ul class="d-flex-fdc">
            <li><i class="bi bi-gift"></i>Free Domain - 1 year</li>
            <li><i class="bi bi-gift"></i>Free CDN Included</li>
            <li><i class="bi bi-gift"></i>Free SSL for the 1st year</li>
          </ul>
        </div>
      </div>
      `
  })
}

function getDomains(domain_cards_wrapper){
  var domain_cards_state = [
    {
      card_price: 6.99,
      card_hero: "https://madebydesignesia.com/themes/hostco/images/domains/dot-com.png"
    },
    {
      card_price: 7.99,
      card_hero: "https://madebydesignesia.com/themes/hostco/images/domains/dot-net.png"
    },
    {
      card_price: 8.99,
      card_hero: "https://madebydesignesia.com/themes/hostco/images/domains/dot-org.png"
    },
    {
      card_price: 9.99,
      card_hero: "https://madebydesignesia.com/themes/hostco/images/domains/dot-live.png"
    },
    {
      card_price: 9.99,
      card_hero: "https://madebydesignesia.com/themes/hostco/images/domains/dot-live.png"
    },
    {
      card_price: 9.99,
      card_hero: "https://madebydesignesia.com/themes/hostco/images/domains/dot-live.png"
    },
    {
      card_price: 10.99,
      card_hero: "https://madebydesignesia.com/themes/hostco/images/domains/dot-store.png"
    },
    {
      card_price: 11.99,
      card_hero: "https://madebydesignesia.com/themes/hostco/images/domains/dot-online.png"
    },
    {
      card_price: 10.99,
      card_hero: "https://madebydesignesia.com/themes/hostco/images/domains/dot-store.png"
    },
    {
      card_price: 11.99,
      card_hero: "https://madebydesignesia.com/themes/hostco/images/domains/dot-online.png"
    },
    {
      card_price: 12.99,
      card_hero: "https://madebydesignesia.com/themes/hostco/images/domains/dot-name.png"
    },
    {
      card_price: 13.99,
      card_hero: "https://madebydesignesia.com/themes/hostco/images/domains/dot-site.png"
    },
  ]

  domain_cards_state.map(card => {
    domain_cards_wrapper.innerHTML += `
      <div class="m-p-domain-card">
      <div class="m-p-domain-card-hln">
        <img data-src=${card.card_hero} alt="">
      </div>
      <h1>$${card.card_price}</h1>
      <div class="rg-domain-btn d-flex-aic_jcc">
        <span>Register</span>
      </div>
    </div>
  `
})
}

function getReviews(rate_cards_wrapper){
  var reviews = [
    {
      user_avatar: "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwNTA2MzMyMTU4MjM5ODMy/gettyimages-648731684.jpg",
      user_name: "Name Lastname",
      rate_comment: "It is known to fans of iconic blockbuster entertainment as  the Name Lastname moment. You know? A dramatic highpoint, the action stops, the "
    },
    {
      user_avatar: "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwNTA2MzMyMTU4MjM5ODMy/gettyimages-648731684.jpg",
      user_name: "Name Lastname",
      rate_comment: "It is known to fans of iconic blockbuster entertainment as  the Name Lastname moment. You know? A dramatic highpoint, the action stops, the "
    },
    {
      user_avatar: "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwNTA2MzMyMTU4MjM5ODMy/gettyimages-648731684.jpg",
      user_name: "Name Lastname",
      rate_comment: "It is known to fans of iconic blockbuster entertainment as  the Name Lastname moment. You know? A dramatic highpoint, the action stops, the "
    },
    {
      user_avatar: "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwNTA2MzMyMTU4MjM5ODMy/gettyimages-648731684.jpg",
      user_name: "Name Lastname",
      rate_comment: "It is known to fans of iconic blockbuster entertainment as  the Name Lastname moment. You know? A dramatic highpoint, the action stops, the "
    },
    {
      user_avatar: "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwNTA2MzMyMTU4MjM5ODMy/gettyimages-648731684.jpg",
      user_name: "Name Lastname",
      rate_comment: "It is known to fans of iconic blockbuster entertainment as  the Name Lastname moment. You know? A dramatic highpoint, the action stops, the "
    },
    {
      user_avatar: "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwNTA2MzMyMTU4MjM5ODMy/gettyimages-648731684.jpg",
      user_name: "Name Lastname",
      rate_comment: "It is known to fans of iconic blockbuster entertainment as  the Name Lastname moment. You know? A dramatic highpoint, the action stops, the "
    },
  ]

  reviews.map(review => {
    rate_cards_wrapper.innerHTML += `
      <div class="item">
      <div class="owl-item-content">
        <div class="rate-card-avatar">
          <img data-src=${review.user_avatar} alt="">
        </div>
        <div class="rate-card-footer">
            <h1>${review.user_name}</h1>
            <div class="line">
              <svg width="33" height="1" viewBox="0 0 33 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="33" y2="0.5" stroke="black"/>
              </svg>     
            </div>                 
            <p class="card-user-comment">${review.rate_comment}</p>
        </div>
      </div>
    </div>
  `
})
}