window.addEventListener("load", solve);

function solve() {
  const productType = document.getElementById('type-product');
  const description = document.getElementById('description');
  const clientName = document.getElementById('client-name');
  const clientPhone = document.getElementById('client-phone');
  const sendOrderBtn = document.querySelector('button');
  const clearBtn = document.querySelector('button.clear-btn');
  const receivedOrders = document.getElementById('received-orders')
  const completedOrders = document.getElementById('completed-orders')
  const inputFields = [description, clientName, clientPhone];

  sendOrderBtn.addEventListener('click',sendOrder);
  clearBtn.addEventListener('click',clearOrder);

  function sendOrder(ev){
    ev.preventDefault()
    if (description.value !== "" && clientName.value !== "" && clientPhone.value !== ""){
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');
    const startRepairBtn = document.createElement('button');
    const endRepairBtn = document.createElement('button');

    h2.textContent = `Product type for repair: ${productType.value}`;
    h3.textContent = `Client information: ${clientName.value},  ${clientPhone.value}`;
    h4.textContent = `Description of the problem: ${description.value}`;

    startRepairBtn.textContent = 'Start repair';
    startRepairBtn.classList.add('start-btn');
    startRepairBtn.addEventListener('click', startRepairF)

    endRepairBtn.textContent = 'End repair';
    endRepairBtn.classList.add('finish-btn');
    endRepairBtn.setAttribute('disabled', true)
    endRepairBtn.addEventListener('click', endRepairF);

    div.classList.add('container');
    div.appendChild(h2)
    div.appendChild(h3)
    div.appendChild(h4)
    div.appendChild(startRepairBtn)
    div.appendChild(endRepairBtn)
    receivedOrders.appendChild(div)

    inputFields.forEach(i => i.value = '')

    function startRepairF(ev) {
      ev.target.setAttribute('disabled', true);
      endRepairBtn.removeAttribute('disabled');
    }

    function endRepairF(ev){
      completedOrders.appendChild(div)
      startRepairBtn.remove()
      endRepairBtn.remove()
    }

    }
     
  }

 function clearOrder() {
   const listOfCompletedOrders = document.querySelectorAll('section#completed-orders div')
   
   Array.from(listOfCompletedOrders).forEach(e => e.remove())
  }
}
