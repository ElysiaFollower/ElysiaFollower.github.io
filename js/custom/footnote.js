
(function (){
  'use strict'
  const lastClickedRef = {};
  // remerember source when a footnote in the post is clicked and navigate to the reference list
  function rememberSource(footnoteIndex, sourceId) {
    lastClickedRef[footnoteIndex] = sourceId;
  }
  //jump to reference list
  function jumpToAnchor(targetId){
    const targetElement = document.getElementById(targetId);
    if(targetElement){
      targetElement.scrollIntoView({ block: 'center' });
    }
  }

  // how to return to source when one of the footnotes in reference list is clicked
  function returnToSource(footnoteIndex) {
    targetId = lastClickedRef[footnoteIndex];
    if (targetId) {
      targetId = 'fnref:'+targetId;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // if the target element is visible, scroll to it
        targetElement.scrollIntoView({ block: 'center' });
        return;
      }
    }
  
    // fallback: if the target element is not found, scroll to the first reference (fnref:INDEX_0)
    const fallbackId = `fnref:${footnoteIndex}_0`;
    const fallbackElement = document.getElementById(fallbackId);
    if (fallbackElement) {
      fallbackElement.scrollIntoView({ block: 'center' });
    }
  }

  window.footnote_rememberSource = rememberSource;
  window.footnote_returnToSource = returnToSource;
  window.footnote_jumpToAnchor = jumpToAnchor;
})();





