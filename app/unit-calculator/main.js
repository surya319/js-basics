var UnitEconomicsForm = document.getElementById("unit-economics-form"),
    sellingPriceInput = document.getElementById("selling-price"),
    cogsInput = document.getElementById("cogs"),
    grossMarginInput = document.getElementById("gross-margin"),
    salesMarketingInput = document.getElementById("sales-marketing"),
    operationInput = document.getElementById("operation"),
    netMarginInput = document.getElementById("net-margin"),
    sellingPriceValue,cogsValue,grossMarginValue,salesMarketingValue,
    operationValue,netMarginValue
    ;

function calculate(e){
    e.preventDefault();
    
    //  calculate Gross margin //
    sellingPriceValue = sellingPriceInput.value;
    cogsValue = cogsInput.value;
    grossMarginValue = sellingPriceValue - cogsValue;
    grossMarginInput.value = grossMarginValue;
    // Calculate Net margin //
    salesMarketingValue = salesMarketingInput.value;
    operationValue = operationInput.value;
    netMarginValue = grossMarginValue - salesMarketingValue -
     operationValue;
    netMarginInput.value = netMarginValue;



}

UnitEconomicsForm.addEventListener('submit',calculate);