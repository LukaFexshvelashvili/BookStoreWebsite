// Made By Luka Fexshvelashvili :)
import $ from "jquery";

export const M_Random = () => {
  return (
    "M_R" +
    String(
      Math.floor(
        ((Math.random() * 40000) / 4) * 3 +
          Math.floor(Math.random() * 400) +
          Math.floor(Math.random() * 100)
      )
    )
  );
};

// SCROLL ONLY =====================================================================================================================================
// SCROLL ONLY =====================================================================================================================================
// SCROLL ONLY =====================================================================================================================================
// SCROLL ONLY =====================================================================================================================================
// SCROLL ONLY =====================================================================================================================================

export function M_Scroll(div, elem, delaytime, classremove) {
  var elemis = $(div);
  if (elemis.length) {
    var elemtop = $(div).offset().top;
    if (window.scrollY >= elemtop - window.innerHeight / 1.5) {
      setTimeout(() => {
        $(elem).removeClass(classremove);
      }, delaytime);
    }
  }

  window.addEventListener("scroll", function () {
    var elemis = $(div);
    if (elemis.length) {
      var elemtop = $(div).offset().top;

      if (window.scrollY >= elemtop - window.innerHeight / 1.5) {
        setTimeout(() => {
          $(elem).removeClass(classremove);
        }, delaytime);
      }
    }
  });
}

export function ML_Scroll(div, elem, delaytime, classremove) {
  var elemis = $(div);
  if (elemis.length) {
    var elemtop = $(div).offset().top;
    if (window.scrollY >= elemtop - window.innerHeight / 1) {
      setTimeout(() => {
        $(elem).removeClass(classremove);
      }, delaytime);
    }
  }

  window.addEventListener("scroll", function () {
    var elemis = $(div);
    if (elemis.length) {
      var elemtop = $(div).offset().top;

      if (window.scrollY >= elemtop - window.innerHeight / 1) {
        setTimeout(() => {
          $(elem).removeClass(classremove);
        }, delaytime);
      }
    }
  });
}
// export function M_ScrollList(div, elem, delaytime, ...classremove) {
//   window.addEventListener("scroll", function () {
//     if (window.scrollY >= div.offset().top - window.innerHeight / 1.5) {
//       setTimeout(() => {
//         classremove.forEach((classnames) => {
//           elem.removeClass(classnames);
//         });
//       }, delaytime);
//     }
//   });
// }

export function M_ScrollDelay(div, elem, delaytime, delaylist, classremove) {
  if (window.scrollY > $(div).offset().top - window.innerHeight / 1.5) {
    setTimeout(() => {
      let time = delaylist;
      $(elem).each(function () {
        setTimeout(() => {
          $(this).removeClass(classremove);
        }, time);
        time += delaylist;
      });
    }, delaytime);
  }
  window.addEventListener("scroll", function () {
    if (window.scrollY > $(div).offset().top - window.innerHeight / 1.5) {
      setTimeout(() => {
        let time = delaylist;
        $(elem).each(function () {
          setTimeout(() => {
            $(this).removeClass(classremove);
          }, time);
          time += delaylist;
        });
      }, delaytime);
    }
  });
}

export function M_LoadDelay(elem, delaytime, delaylist, classremove) {
  window.addEventListener("load", function () {
    setTimeout(() => {
      let time = delaylist;
      $(elem).each(function () {
        setTimeout(() => {
          $(this).removeClass(classremove);
        }, time);
        time += delaylist;
      });
    }, delaytime);
  });
}
// // SMALL SCROLL ONLY =====================================================================================================================================
// // SMALL SCROLL ONLY =====================================================================================================================================
// // SMALL SCROLL ONLY =====================================================================================================================================
// // SMALL SCROLL ONLY =====================================================================================================================================
// // SMALL SCROLL ONLY =====================================================================================================================================

export function MS_Scroll(div, elem, delaytime, classremove) {
  if (window.scrollY >= $(div).offset().top - window.innerHeight / 1.2) {
    setTimeout(() => {
      $(elem).removeClass(classremove);
    }, delaytime);
  }
  window.addEventListener("scroll", function () {
    if (window.scrollY >= $(div).offset().top - window.innerHeight / 1.2) {
      setTimeout(() => {
        $(elem).removeClass(classremove);
      }, delaytime);
    }
  });
}
// export function MSm_ScrollList(div, elem, delaytime, ...classremove) {
//   window.addEventListener("scroll", function () {
//     if (window.scrollY >= div.offset().top - window.innerHeight / 1.2) {
//       setTimeout(() => {
//         classremove.forEach((classnames) => {
//           elem.removeClass(classnames);
//         });
//       }, delaytime);
//     }
//   });
// }

// export function MSm_ScrollDelay(div, elem, delaytime, delaylist, classremove) {
//   window.addEventListener("scroll", function () {
//     if (window.scrollY >= div.offset().top - window.innerHeight / 1.2) {
//       setTimeout(() => {
//         time = delaylist;
//         $(elem).each(function () {
//           setTimeout(() => {
//             $(this).removeClass(classremove);
//           }, time);
//           time += delaylist;
//         });
//       }, delaytime);
//     }
//   });
// }

// LOAD ONLY =====================================================================================================================================
// LOAD ONLY =====================================================================================================================================
// LOAD ONLY =====================================================================================================================================
// LOAD ONLY =====================================================================================================================================
// LOAD ONLY =====================================================================================================================================

export function M_ScrollLoad(elem, delaytime, classremove) {
  setTimeout(() => {
    $(elem).removeClass(classremove);
  }, delaytime);
}

// export function M_ScrollListLoad(elem, delaytime, ...classremove) {
//   setTimeout(() => {
//     classremove.forEach((classnames) => {
//       elem.removeClass(classnames);
//     });
//   }, delaytime);
// }

// Made By Luka Fexshvelashvili :)
