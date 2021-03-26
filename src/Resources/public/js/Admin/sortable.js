$(function () {
  const container = document.querySelector('.js-sortable');
  if (!container && !container.length) {
    return;
  }
  const draggables = document.querySelectorAll('.js-draggable');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    })

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
      const payload = getPaymentMethodPositions();
      console.log(payload);
    });
  })

  container.addEventListener('dragover', (event) => {
    event.preventDefault();
    const afterElement = getDragAfterElement(container, event.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  })

  function getPaymentMethodPositions () {
    const draggables = [...container.querySelectorAll('.js-draggable')];
    const updatedPositions = [];

    draggables.map((item, index) => {
      const { paymentMethod } = item.dataset;
      updatedPositions.push({ id: index, name: paymentMethod })
    });

    return updatedPositions;
  }

  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.js-draggable:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest;
      }

    }, { offset: Number.NEGATIVE_INFINITY }).element
  }

  // const tour = new Shepherd.Tour({
  //   defaultStepOptions: {
  //     classes: 'shadow-md bg-purple-dark',
  //     scrollTo: true
  //   }
  // });
  //
  // tour.addStep({
  //   id: 'mollie-payment-form',
  //   text: 'This step is attached to the bottom of the <code>.example-css-selector</code> element.',
  //   attachTo: {
  //     element: '.example-css-selector',
  //     on: 'bottom'
  //   },
  //   classes: 'example-step-extra-class',
  //   buttons: [
  //     {
  //       text: 'Next',
  //       action: tour.next
  //     }
  //   ]
  // });
  // tour.start();
});
