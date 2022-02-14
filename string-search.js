const products = [
    'Dell hardcore Laptop',
    'iphone camera flashlight Phone',
    'yellow camera laptop ',
    'htc low price Phone',
    'Dell lenovo Laptop',
    'Dell purple color with phone'
];
const searching = 'phone';


const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
};
console.log(output);

// start with
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
};
console.log(output);

for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
};
console.log(output);