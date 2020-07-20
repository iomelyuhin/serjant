document.addEventListener(`DOMContentLoaded`, function () {
  //!=====================================================================
  //!========================OPEN POPUP FORM==============================
  //!=====================================================================
  const body = document.querySelector("body");
  const popup = document.querySelector(".js__popup");
  const callbackBtn = document.querySelector(".js__callbackButton");
  const heroBtn = document.querySelector(".js__heroButton");
  const callEngeneerBtn = document.querySelector(".js__callEngeneerButton");
  const closePopupBtn = document.querySelector(".js__closePopup");

  function isOpenedPopup() {
    if (popup.classList.contains("active")) {
      return true;
    } else {
      return false;
    }
  }

  function clickOnPopupBtn(btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (!isOpenedPopup()) {
        openPopup();
      }
    });
  }

  function openPopup() {
    popup.classList.add("active");
    body.style.overflow = "hidden";
    body.style.paddingRight = "14px";
  }

  function closePopup() {
    popup.classList.remove("active");
    body.style.overflow = "initial";
    body.style.paddingRight = "initial";
  }

	clickOnPopupBtn(callbackBtn);
	if (heroBtn) {
		clickOnPopupBtn(heroBtn);
	}
  clickOnPopupBtn(callEngeneerBtn);
  closePopupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closePopup();
  });
  popup.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("js__popup")) {
      closePopup();
    }
  });

  //!=====================================================================
  //!========================STICK MENU===================================
	//!=====================================================================
	const headMenu = document.querySelector(".js__headerMenu")
	const headPhone = document.querySelector(".js__headPhone")

	document.addEventListener("scroll", e => {
		// e.preventDefault();
		if (pageYOffset>=234) {
			headMenu.classList.add("stick")
			headPhone.style.fontSize = "24px"
			callbackBtn.style.fontSize = "14px"
		} else {
			headMenu.classList.remove("stick")
			headPhone.style.fontSize = "28px"
			callbackBtn.style.fontSize = "20px"

		}
		
	})
	//!=====================================================================
  //!========================BURGER MENU===================================
	//!=====================================================================
	const burgerBtn = document.querySelector(".js_hamburger");
	const burgerMenu = document.querySelector(".js_hamburger-menu");
	
	burgerBtn.addEventListener('click', e => {
		e.preventDefault();
		burgerBtn.classList.toggle('is-active');
		burgerMenu.classList.toggle('active');
		if (burgerBtn.classList.contains('is-active')) {
			body.style.overflow = 'hidden'
		} else {
			body.style.overflow = 'initial'
		}
	})
});
