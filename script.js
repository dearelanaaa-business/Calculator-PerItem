function calculatePrices() {
    let costPrice = parseFloat(document.getElementById('costPrice').value) || 0;
    let quantity = parseFloat(document.getElementById('quantity').value) || 1;
    
    let taxedPrice = Math.round(costPrice * 1.1 * 100) / 100; // Adding 10% tax and rounding to 2 decimal places
    let costPerItem = Math.round((costPrice / quantity) * 100) / 100;
    let retailPrice = Math.ceil((costPerItem * 1.8) * 10) / 10; // 80% markup, rounded up to nearest 0.10
    let profitPerItem = Math.round((retailPrice - costPerItem) * 100) / 100;
    
    document.getElementById('taxedPrice').value = `MYR ${taxedPrice.toFixed(2)}`;
    document.getElementById('costPerItem').value = `MYR ${costPerItem.toFixed(2)}`;
    document.getElementById('retailPrice').value = `MYR ${retailPrice.toFixed(2)}`;
    document.getElementById('profitPerItem').value = `MYR ${profitPerItem.toFixed(2)}`;
}

document.getElementById('costPrice').addEventListener('input', calculatePrices);
document.getElementById('quantity').addEventListener('input', calculatePrices);
