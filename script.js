let searchCounter = 0;

const products = [
    { name: "Laptop", hs: "8471.30", category: "Electronics" },
    { name: "Mobile Phone", hs: "8517.13", category: "Electronics" },
    { name: "Printer", hs: "8443.32", category: "Electronics" },
    { name: "Bluetooth Speaker", hs: "8518.22", category: "Audio Equipment" },
    { name: "Refrigerator", hs: "8418.10", category: "Home Appliances" },
    { name: "Washing Machine", hs: "8450.11", category: "Home Appliances" }
];

function findHS() {
    
    let input = document.getElementById("searchBox").value.toLowerCase();

    let result = products.find(p =>
        p.name.toLowerCase().includes(input)
    );

    if(result){
        document.getElementById("result").innerHTML =
        `
        <div style="margin-top:20px;">
            <h3>Product: ${result.name}</h3>
            <p><b>HS Code:</b> ${result.hs}</p>
            <p><b>Category:</b> ${result.category}</p>
        </div>
        `;
    } else {
        document.getElementById("result").innerHTML =
        "<p style='color:red;'>No product found</p>";
    }
}

function calculate() {
    let value = Number(document.getElementById("value").value);
    let freight = Number(document.getElementById("freight").value);
    let insurance = Number(document.getElementById("insurance").value);

    let cif = value + freight + insurance;

    let duty = cif * 0.15;   // 15% import duty (example)
    let vat = cif * 0.18;    // 18% VAT (example)

    let total = cif + duty + vat;

    document.getElementById("output").innerHTML =
    `
    <p><b>CIF Value:</b> $${cif}</p>
    <p><b>Import Duty (15%):</b> $${duty}</p>
    <p><b>VAT (18%):</b> $${vat}</p>
    <h3>Total Cost: $${total}</h3>
    `;
}

function getDocuments() {
    let product = document.getElementById("productInput").value.toLowerCase();

    let documents = "";

    if(product.includes("laptop") || product.includes("mobile") || product.includes("printer")){
        documents = `
        <h3>Required Documents</h3>
        <ul>
            <li>Commercial Invoice</li>
            <li>Packing List</li>
            <li>Bill of Lading</li>
            <li>Insurance Certificate</li>
        </ul>
        `;
    }
    else if(product.includes("car") || product.includes("vehicle")){
        documents = `
        <h3>Required Documents</h3>
        <ul>
            <li>Vehicle Import Permit</li>
            <li>Registration Documents</li>
            <li>Commercial Invoice</li>
            <li>Shipping Documents</li>
        </ul>
        `;
    }
    else{
        documents = "<p>No document data found for this product</p>";
    }

    document.getElementById("docResult").innerHTML = documents;
}
function askAI() {

    let q = document.getElementById("userQuestion").value.toLowerCase();
    let answer = "";

    if(q.includes("drone")){
        answer = "Importing drones requires special permits from Civil Aviation Authority of Sri Lanka.";
    }
    else if(q.includes("laptop")){
        answer = "Laptops are classified under HS Code 8471.30 and require standard import documents.";
    }
    else if(q.includes("duty")){
        answer = "Import duty depends on CIF value. Usually 10% - 25% depending on product type.";
    }
    else if(q.includes("document")){
        answer = "Common documents: Invoice, Packing List, Bill of Lading, Insurance Certificate.";
    }
    else{
        answer = "Sorry, I don't have enough data for this query.";
    }

    document.getElementById("chatResult").innerHTML =
    `<p><b>AI:</b> ${answer}</p>`;
}