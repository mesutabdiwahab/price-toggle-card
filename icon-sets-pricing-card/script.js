//grab tabs, btn-tab;
const tabs = document.querySelector('.tabs');
const btnTabs = tabs.querySelectorAll('[role="tablist"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleBtnTab(e) {
  //make all btn-tabs unselected;
  btnTabs.forEach(btnTab => {
    btnTab.ariaSelected = false;
  });

  //make all tabPanel hidden;
  tabPanels.forEach(tabPanel => {
    tabPanel.hidden = true
  });

  //make the clicked tab selected;
  const tab = e.currentTarget;
  tab.ariaSelected = true;

  //show clicked tab associated tabpanel;
  const id = tab.dataset.id;
  const tabpanel = tabs.querySelector(`#${id}`);
  tabpanel.hidden = false;
}


//listen btn-tab click;
btnTabs.forEach(btnTab => {
 btnTab.addEventListener('click', handleBtnTab)
});

//show success message
const addToCart = tabs.querySelector('.btn-primary');
const successMsgContainer = document.querySelector('.success-message');
const goBack = successMsgContainer.querySelector('.btn-secondary');

function handleClick() {
  successMsgContainer.classList.add('show-message');

}

//listen when user clicks add to cart button;
addToCart.addEventListener('click', handleClick);

//listen when user clicks go back button;
goBack.addEventListener('click', function () {
  successMsgContainer.classList.remove('show-message')
});