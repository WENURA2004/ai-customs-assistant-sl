let searchCounter = 0;

const products = [
{name:"Laptop",hs:"8471.30",category:"Electronics"},
{name:"Mobile Phone",hs:"8517.13",category:"Electronics"},
{name:"Printer",hs:"8443.32",category:"Electronics"},
{name:"Bluetooth Speaker",hs:"8518.22",category:"Audio"},
{name:"Refrigerator",hs:"8418.10",category:"Home Appliances"},
{name:"Washing Machine",hs:"8450.11",category:"Home Appliances"},
{name:"Television",hs:"8528.72",category:"Electronics"},
{name:"Air Conditioner",hs:"8415.10",category:"Home Appliances"},
{name:"Microwave Oven",hs:"8516.50",category:"Home Appliances"},
{name:"Camera",hs:"8525.80",category:"Electronics"},
{name:"Keyboard",hs:"8471.60",category:"Computer Accessories"},
{name:"Mouse",hs:"8471.60",category:"Computer Accessories"},
{name:"Monitor",hs:"8528.52",category:"Electronics"},
{name:"Router",hs:"8517.62",category:"Networking"},
{name:"Headphones",hs:"8518.30",category:"Audio"},
{name:"Smart Watch",hs:"8517.62",category:"Wearables"},
{name:"Tablet",hs:"8471.30",category:"Electronics"},
{name:"Projector",hs:"8528.62",category:"Electronics"},
{name:"Scanner",hs:"8471.60",category:"Office Equipment"},
{name:"External Hard Drive",hs:"8471.70",category:"Storage"},

{name:"Electric Fan",hs:"8414.51",category:"Home Appliances"},
{name:"Vacuum Cleaner",hs:"8508.11",category:"Home Appliances"},
{name:"Rice Cooker",hs:"8516.60",category:"Home Appliances"},
{name:"Electric Kettle",hs:"8516.79",category:"Home Appliances"},
{name:"Toaster",hs:"8516.72",category:"Home Appliances"},
{name:"Coffee Maker",hs:"8516.71",category:"Home Appliances"},
{name:"Water Dispenser",hs:"8516.10",category:"Home Appliances"},
{name:"Dishwasher",hs:"8422.11",category:"Home Appliances"},
{name:"Deep Freezer",hs:"8418.30",category:"Home Appliances"},
{name:"Air Purifier",hs:"8421.39",category:"Home Appliances"},

{name:"Steel Pipe",hs:"7306.30",category:"Industrial"},
{name:"Water Pump",hs:"8413.70",category:"Industrial"},
{name:"Generator",hs:"8502.11",category:"Industrial"},
{name:"Electric Motor",hs:"8501.52",category:"Industrial"},
{name:"Compressor",hs:"8414.80",category:"Industrial"},
{name:"Bearing",hs:"8482.10",category:"Industrial"},
{name:"Hydraulic Jack",hs:"8425.42",category:"Industrial"},
{name:"Welding Machine",hs:"8515.39",category:"Industrial"},
{name:"Drill Machine",hs:"8467.21",category:"Industrial"},
{name:"Grinding Machine",hs:"8460.29",category:"Industrial"},

{name:"Car Battery",hs:"8507.10",category:"Vehicle Parts"},
{name:"Tyre",hs:"4011.10",category:"Vehicle Parts"},
{name:"Brake Pad",hs:"8708.30",category:"Vehicle Parts"},
{name:"Engine Oil",hs:"2710.19",category:"Vehicle Parts"},
{name:"Shock Absorber",hs:"8708.80",category:"Vehicle Parts"},
{name:"Radiator",hs:"8708.91",category:"Vehicle Parts"},
{name:"Car Mirror",hs:"7009.10",category:"Vehicle Parts"},
{name:"Fuel Pump",hs:"8413.30",category:"Vehicle Parts"},
{name:"Clutch Kit",hs:"8708.93",category:"Vehicle Parts"},
{name:"Spark Plug",hs:"8511.10",category:"Vehicle Parts"},

{name:"Cardboard Box",hs:"4819.10",category:"Packaging"},
{name:"Plastic Container",hs:"3923.10",category:"Packaging"},
{name:"Wooden Pallet",hs:"4415.20",category:"Packaging"},
{name:"Stretch Film",hs:"3920.10",category:"Packaging"},
{name:"Packing Tape",hs:"3919.10",category:"Packaging"},
{name:"Bubble Wrap",hs:"3923.21",category:"Packaging"},
{name:"Cargo Net",hs:"5608.19",category:"Logistics"},
{name:"Shipping Label",hs:"4821.10",category:"Logistics"},
{name:"Plastic Crate",hs:"3923.10",category:"Logistics"},
{name:"Metal Drum",hs:"7310.10",category:"Packaging"},

{name:"Solar Panel",hs:"8541.43",category:"Energy"},
{name:"Inverter",hs:"8504.40",category:"Energy"},
{name:"LED Bulb",hs:"8539.50",category:"Lighting"},
{name:"Street Light",hs:"9405.40",category:"Lighting"},
{name:"Power Bank",hs:"8507.60",category:"Electronics"},
{name:"USB Cable",hs:"8544.42",category:"Electronics"},
{name:"Memory Card",hs:"8523.51",category:"Storage"},
{name:"SSD Drive",hs:"8471.70",category:"Storage"},
{name:"Server",hs:"8471.50",category:"IT Equipment"},
{name:"Network Switch",hs:"8517.62",category:"Networking"},

{name:"Office Chair",hs:"9401.30",category:"Furniture"},
{name:"Office Desk",hs:"9403.30",category:"Furniture"},
{name:"Bookshelf",hs:"9403.60",category:"Furniture"},
{name:"Filing Cabinet",hs:"9403.10",category:"Furniture"},
{name:"Whiteboard",hs:"9610.00",category:"Office Equipment"},
{name:"Paper Shredder",hs:"8472.90",category:"Office Equipment"},
{name:"Photocopier",hs:"8443.31",category:"Office Equipment"},
{name:"Barcode Scanner",hs:"8471.60",category:"Logistics"},
{name:"Label Printer",hs:"8443.32",category:"Logistics"},
{name:"Handheld Terminal",hs:"8471.41",category:"Logistics"},

{name:"Safety Helmet",hs:"6506.10",category:"Safety"},
{name:"Safety Gloves",hs:"6116.10",category:"Safety"},
{name:"Reflective Vest",hs:"6211.43",category:"Safety"},
{name:"Safety Boots",hs:"6403.40",category:"Safety"},
{name:"Fire Extinguisher",hs:"8424.10",category:"Safety"},
{name:"CCTV Camera",hs:"8525.80",category:"Security"},
{name:"Access Control System",hs:"8537.10",category:"Security"},
{name:"Alarm System",hs:"8531.10",category:"Security"},
{name:"GPS Tracker",hs:"8526.91",category:"Logistics"},
{name:"RFID Reader",hs:"8471.90",category:"Logistics"},

{name:"Forklift",hs:"8427.20",category:"Logistics Equipment"},
{name:"Hand Pallet Truck",hs:"8427.90",category:"Logistics Equipment"},
{name:"Container Seal",hs:"8309.90",category:"Logistics"},
{name:"Shipping Container",hs:"8609.00",category:"Logistics"},
{name:"Cargo Trolley",hs:"8716.80",category:"Logistics Equipment"},
{name:"Warehouse Rack",hs:"7308.90",category:"Warehouse"},
{name:"Pallet Jack",hs:"8427.90",category:"Warehouse"},
{name:"Conveyor Belt",hs:"4010.12",category:"Warehouse"},
{name:"Industrial Scale",hs:"8423.82",category:"Warehouse"},
{name:"Dock Leveler",hs:"8428.90",category:"Warehouse"}
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
window.onload = function() {
    const countElement = document.getElementById("productCount");

    if (countElement) {
        countElement.innerText = products.length;
    }
};
