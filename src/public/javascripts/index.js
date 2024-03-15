/** DIALOG */

function openModal(event, id, img, caption) {
  $(".carousselImg").attr("src", img);
  $(".carousselCaption").text(caption);
  setTimeout(() => {
    $(`.${id}`)[0].showModal();
  }, 200);

  //console.log("openModal", event);
  //$(`.${id}`)[0].addEventListener("scroll", onScroll);

  document.addEventListener("click", onClick);
  function onClick(event) {
    if (event.target.nodeName === "DIALOG") {
      $(`.${id}`)[0].close();
      document.removeEventListener("click", onClick);
    }
  }
}

// console.log("index.js loaded");
// window.addEventListener("deviceorientation", handleOrientation, true);

// function handleOrientation(event) {
//   console.log(event);
//   if (event.alpha == 90) {
//     console.log("alpha is 90");
//     let typer = document.getElementById("intro");
//     typer.setAttribute(
//       "style",
//       "font-size:" + 2 + "vw" + "!important; color: rgb(156, 125, 47);"
//     );
//   }
// }
// function onScroll(event) {
//   console.log("scrolling");
//   if (event.type == "scroll") {
//     console.log("scrolling");
//   }
// }

/** MENU SECTION */

let burgerMenuOpen = false;

function open_menu(event) {
  $(".mobile-panel").removeClass("slide-out");
  $(".mobile-panel").addClass("slide-in");
}

function closePanel(event) {
  $(".mobile-panel").removeClass("slide-in");
  $(".mobile-panel").addClass("slide-out");

  setTimeout(() => {
    $(".mobile-panel").removeClass("slide-out");
  }, 1000);
}

function toggleSubMenu(event) {
  if (burgerMenuOpen) {
    closeSubMenu(event);
  } else {
    openSubMenu(event);
  }
}

function openSubMenu(event) {
  console.log("openSubMenu");
  burgerMenuOpen = true;
  $(".mobile-sub").removeClass("collapse");
  $(".mobile-sub").addClass("extend");
  $(".plusicon").attr("visibility", "hidden");
  $(".minusicon").attr("visibility", "visible");
}

function closeSubMenu(event) {
  burgerMenuOpen = false;
  $(".mobile-sub").removeClass("extend");
  $(".mobile-sub").addClass("collapse");
  $(".plusicon").attr("visibility", "visible");
  $(".minusicon").attr("visibility", "hidden");

  setTimeout(() => {
    $(".mobile-sub").removeClass("collapse");
  }, 1000);
}

/** TOGGLER SECTION */
let theme_toggler = document.querySelector("#theme_toggler");
let homeImage = document.querySelector("#wl-img");
let carrousel = document.querySelector("#carousselImages");

theme_toggler.addEventListener("click", function () {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    if (homeImage) {
      homeImage.classList.remove("welcome-image-dk");
      homeImage.classList.add("welcome-image");
    }
    if (carrousel) {
      carrousel.classList.remove("carousel-dark");
    }
    localStorage.setItem("website_theme", "dark-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
    if (carrousel) {
      carrousel.classList.add("carousel-dark");
    }
    if (homeImage) {
      homeImage.classList.remove("welcome-image");
      homeImage.classList.add("welcome-image-dk");
    }
    localStorage.setItem("website_theme", "light-mode");
  }
});

function retrieve_theme() {
  var theme = localStorage.getItem("website_theme");
  if (theme != null) {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(theme);
  }

  if (theme == "dark-mode" && homeImage) {
    homeImage.classList.remove("welcome-image-dk");
    homeImage.classList.add("welcome-image");
    if (carrousel) {
      carrousel.classList.add("carousel-dark");
    }
  } else if (homeImage) {
    homeImage.classList.remove("welcome-image");
    homeImage.classList.add("welcome-image-dk");
    if (carrousel) {
      carrousel.classList.remove("carousel-dark");
    }
  }
}

/** SCROLL TO TOP */
let scrollBtn = document.querySelector("#top_scroller");
scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/**CAROUSSEL SECTION */
function leftCarrousselBtnPressed(imgList, captionList) {
  if (
    imgList instanceof Array &&
    $(".carousselImg").attr("ongoing") == "false"
  ) {
    let currIndex = imgList.indexOf($(".carousselImg").attr("src"));

    if (currIndex == -1) {
      currIndex = 0;
    }
    if (currIndex == 0) {
      currIndex = imgList.length;
    }
    currIndex = currIndex - 1;
    $(".carousselImg").addClass("slide-left");
    $(".carousselImg").attr("ongoing", "true");
    setTimeout(() => {
      $(".carousselImg").attr("src", imgList[currIndex]);
      $(".carousselCaption").text(captionList[currIndex]);
      setTimeout(() => {
        $(".carousselImg").removeClass("slide-left");
        $(".carousselImg").attr("ongoing", "false");
      }, 800);
    }, 200);
  }
}

function rightCarrousselBtnPressed(imgList, captionList) {
  if (
    imgList instanceof Array &&
    $(".carousselImg").attr("ongoing") == "false"
  ) {
    let currIndex = imgList.indexOf($(".carousselImg").attr("src"));
    if (currIndex == imgList.length - 1) {
      currIndex = -1;
    }
    currIndex = currIndex + 1;
    $(".carousselImg").addClass("slide-right");
    $(".carousselImg").attr("ongoing", "true");
    setTimeout(() => {
      $(".carousselImg").attr("src", imgList[currIndex]);
      $(".carousselCaption").text(captionList[currIndex]);
      setTimeout(() => {
        $(".carousselImg").removeClass("slide-right");
        $(".carousselImg").attr("ongoing", "false");
      }, 800);
    }, 200);
  }
}

/** THEME SECTION */
retrieve_theme();

window.addEventListener(
  "storage",
  function () {
    retrieve_theme();
  },
  false
);
