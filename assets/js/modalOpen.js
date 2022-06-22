const companySelect = document.getElementById("selectionCompany");

const companySearch = document.getElementById("selection-company");

const changePayerWrapper = document.getElementById("modal1-wrapper");

const searchInput = document.getElementById("selection-search-keyword");

const selection_List = document.getElementById("selection-list");

const modals = document.getElementsByClassName("modal-checkbox");

function checkModal() {
  for (let i = 0; i < modals.length; i++) {
    modals[i].addEventListener("change", () => {
      if (modals[i].checked) {
        // document.body.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.classList.add('body-overflow');
      } else {
        // document.body.style.display = "initial";
        document.body.style.overflow = "visible";
        document.body.classList.remove('body-overflow');
      }
    });
  }
}

companySelect.addEventListener("click", (event) => {
  event.stopPropagation();
  companySearch.classList.toggle("selection-search--active");
});

searchInput.addEventListener("click", (e2) => {
  e2.stopPropagation();
});

changePayerWrapper.addEventListener("click", (e) => {
  e.stopPropagation();
  companySearch.classList.remove("selection-search--active");
});

selection_List.addEventListener("click", (e3) => {
  e3.stopPropagation();
});
