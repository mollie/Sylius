$(function () {
  const sortableContainer = $('.js-sortable');
  if (!sortableContainer.length) {
    return;
  }
  sortableContainer.sortable();
  sortableContainer.disableSelection();
});
