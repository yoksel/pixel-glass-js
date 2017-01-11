var doc = document;
var stickyContainer = doc.querySelector('.sticky-container');

if ( !localStorage['pg-released'] ) {
  searchControlsPanel();
}

function searchControlsPanel() {
  controlsPanel = doc.querySelector('.controls-panel');

  if ( !controlsPanel ) {
    setTimeout(searchControlsPanel, 500);
  }
  else {
    stickyContainer.classList.add('sticky-container--filled');

    controlsPanel.addEventListener('click', takeOutPanel);
  }
}

//---------------------------------------------

function takeOutPanel () {
  var offsetTop = controlsPanel.offsetTop - window.scrollY;
  var offsetLeft = controlsPanel.offsetLeft - window.scrollX;

  controlsPanel.style.position = 'fixed';
  controlsPanel.style.top = offsetTop + 'px';
  controlsPanel.style.left = offsetLeft + 'px';
  controlsPanel.style.right = 'auto';
  controlsPanel.style.bottom = 'auto';
  adjustPosition();

  doc.documentElement.appendChild( controlsPanel );

  stickyContainer.classList.add('sticky-container--collapse');

  controlsPanel.removeEventListener('click', takeOutPanel);
  localStorage['pg-released'] = 'yes';
}

//---------------------------------------------

function adjustPosition() {
  var styles = getComputedStyle(controlsPanel);
  var left = +styles.left.replace(/px/,'');
  var right = +styles.right.replace(/px/,'');
  var top = +styles.top.replace(/px/,'');
  var bottom = +styles.bottom.replace(/px/,'');

  if ( left > right ) {
    controlsPanel.style.right = styles.right;
    controlsPanel.style.left = 'auto';
  }

  if ( top > bottom ) {
    controlsPanel.style.bottom = styles.bottom;
    controlsPanel.style.top = 'auto';
  }
}
