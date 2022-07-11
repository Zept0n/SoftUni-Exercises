window.addEventListener("load", solve);

function solve() {
  const make = document.getElementById('make');
  const model = document.getElementById('model');
  const year = document.getElementById('year');
  const fuel = document.getElementById('fuel');
  const originalCost = document.getElementById('original-cost');
  const sellingPrice = document.getElementById('selling-price');

  const publishButton = document.getElementById('publish');

  const tableBody = document.getElementById('table-body');
  const soldCars = document.getElementById('cars-list');

  const totalProfit = document.getElementById('profit');

  publishButton.addEventListener('click', onPublish);

  console.log(make, model, year, fuel, originalCost, sellingPrice, publishButton, tableBody, soldCars, totalProfit);

  function onPublish(ev) {
    ev.preventDefault();

    const makeValue = make.value;
    const modelValue = model.value;
    const yearValue = year.value;
    const fuelValue = fuel.value;
    const originalCostValue = originalCost.value;
    const sellingPriceValue = sellingPrice.value;

    if ([makeValue, modelValue, yearValue, fuelValue, originalCostValue, sellingPriceValue].some((element) => element == '')) {
      return;
    }
    if (originalCostValue > sellingPriceValue) {
      return;
    }

    make.value = '';
    model.value = '';
    year.value = '';
    fuel.value = '';
    originalCost.value = '';
    sellingPrice.value = '';


    //creating tr elements
    const tr = createEl('tr', undefined, 'row');
    tr.appendChild(createEl('td', `${makeValue}`))
    tr.appendChild(createEl('td', `${modelValue}`))
    tr.appendChild(createEl('td', `${yearValue}`))
    tr.appendChild(createEl('td', `${fuelValue}`))
    tr.appendChild(createEl('td', `${originalCostValue}`))
    tr.appendChild(createEl('td', `${sellingPriceValue}`))
    const td = createEl('td');
    const editBtn = createEl('button', 'Edit', 'action-btn');
    editBtn.classList.add('edit');
    const sellBtn = createEl('button', 'Sell', 'action-btn');
    sellBtn.classList.add('sell');

    td.appendChild(editBtn);
    td.appendChild(sellBtn);
    tr.appendChild(td);

    tableBody.appendChild(tr);

    editBtn.addEventListener('click', onEdit);
    sellBtn.addEventListener('click', onSell);

    function onEdit() {
      make.value = makeValue;
      model.value = modelValue;
      year.value = yearValue;
      fuel.value = fuelValue;
      originalCost.value = originalCostValue;
      sellingPrice.value = sellingPriceValue;

      tr.remove();
    }

    function onSell() {
      tr.remove();
      const li=createEl('li',undefined,'each-list');
      li.appendChild(createEl('span',`${makeValue} ${modelValue}`))
      li.appendChild(createEl('span',`${yearValue}`))
      const difference=Number(sellingPriceValue)-Number(originalCostValue);
      li.appendChild(createEl('span',`${difference}`))
      soldCars.appendChild(li);

      const newProfit=Number(totalProfit.textContent)+Number(difference)
      totalProfit.textContent=`${newProfit.toFixed(2)}`;
    }

  }


  function createEl(type, textContent, classType) {
    const element = document.createElement(type);
    if (textContent != undefined) {
      element.textContent = textContent
    }
    if (classType != undefined) {
      element.classList.add(classType);
    }
    return element;
  }
}
