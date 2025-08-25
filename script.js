const packages = [
    {id:1,name:"Himalayan Adventure",type:"Adventure",duration:"7 Days",price:45000,discount:10,rating:4.5,description:"Trek in the Himalayas, explore valleys and rivers.",image:"https://tse3.mm.bing.net/th/id/OIP.JbIRa0R9argg0FhYcs9eeQHaEK?pid=Api&P=0&h=180"},
    {id:2,name:"Beach Leisure Goa",type:"Leisure",duration:"5 Days",price:35000,discount:0,rating:4.2,description:"Relax on Goa beaches, enjoy water sports and nightlife.",image:"https://tse2.mm.bing.net/th/id/OIP.qcncbl5cNl2cPp2rtH5SDwHaEJ?pid=Api&P=0&h=180"},
    {id:3,name:"Cultural Rajasthan",type:"Cultural",duration:"6 Days",price:38000,discount:5,rating:4.7,description:"Explore forts, palaces, and traditional Rajasthani culture.",image:"https://tse2.mm.bing.net/th/id/OIP._z7QQAy6qMG2tN8H5yOshAHaE7?pid=Api&P=0&h=180"},
    {id:4,name:"Kerala Backwaters",type:"Leisure",duration:"6 Days",price:40000,discount:8,rating:4.6,description:"Enjoy houseboats, coconut groves, and scenic backwaters.",image:"https://tse3.mm.bing.net/th/id/OIP._Z-6UwHv0a9MunO7AJdDZgHaE8?pid=Api&P=0&h=180"},
    {id:5,name:"Rishikesh Adventure",type:"Adventure",duration:"4 Days",price:37000,discount:12,rating:4.8,description:"White water rafting, yoga retreats, and camping in Rishikesh.",image:"https://tse2.mm.bing.net/th/id/OIP.icgVlXjvfyy0Hl4_XzjKnQHaEK?pid=Api&P=0&h=180"},
    {id:6,name:"Varanasi Cultural Tour",type:"Cultural",duration:"3 Days",price:39000,discount:0,rating:4.3,description:"Explore the ghats of Varanasi, experience traditional rituals and local cuisine.",image:"https://tse4.mm.bing.net/th/id/OIP.9_R0TQNDu0s2iPrjn7P91QHaEK?pid=Api&P=0&h=180"},
    {id:7,name:"Andaman Island Adventure",type:"Adventure",duration:"5 Days",price:48000,discount:15,rating:4.7,description:"Scuba diving, snorkeling, and beach exploration in Andaman Islands.",image:"https://tse3.mm.bing.net/th/id/OIP.O_RywOMwGDLjT2UWJsvPrgHaDW?pid=Api&P=0&h=180"},
    {id:8,name:"Udaipur Cultural Escape",type:"Cultural",duration:"4 Days",price:36000,discount:5,rating:4.6,description:"Visit City Palace, lakes, and experience traditional Rajasthani arts.",image:"https://tse1.mm.bing.net/th/id/OIP._8bvTjnR8c7cPkKvYsH-mQHaEK?pid=Api&P=0&h=180"}
];

const packagesContainer = document.getElementById("packagesContainer");
const typeFilter = document.getElementById("typeFilter");
const sortFilter = document.getElementById("sortFilter");
const searchInput = document.getElementById("searchInput");

function displayPackages(packagesList) {
    packagesContainer.innerHTML = "";
    packagesList.forEach(pkg => {
        const card = document.createElement("div");
        card.className = "package-card";
        card.innerHTML = `
            <img src="${pkg.image}" alt="${pkg.name}">
            <div class="badge ${pkg.type}">${pkg.type}</div>
            <h3>${pkg.name}</h3>
            <p>Duration: ${pkg.duration}</p>
            <p class="price">
                ₹${(pkg.price * (1 - (pkg.discount || 0)/100)).toLocaleString('en-IN')}
                ${pkg.discount ? `<span>₹${pkg.price.toLocaleString('en-IN')}</span>` : ''}
            </p>
            <p class="rating">${pkg.rating ? '⭐'.repeat(Math.floor(pkg.rating)) : ''} (${pkg.rating || 'N/A'})</p>
            <p>${pkg.description}</p>
            <button onclick="bookPackage('${pkg.name}')">Book Now</button>
        `;
        packagesContainer.appendChild(card);
    });
}

function bookPackage(name) {
    alert(`Thank you! You booked the package: ${name}`);
}

function filterAndSort() {
    let filtered = packages;
    const type = typeFilter.value;
    if(type !== "All") filtered = filtered.filter(pkg => pkg.type === type);

    const search = searchInput.value.toLowerCase();
    if(search) filtered = filtered.filter(pkg => pkg.name.toLowerCase().includes(search));

    const sort = sortFilter.value;
    if(sort === "priceAsc") filtered.sort((a,b) => a.price - b.price);
    else if(sort === "priceDesc") filtered.sort((a,b) => b.price - a.price);

    displayPackages(filtered);
}

typeFilter.addEventListener("change", filterAndSort);
sortFilter.addEventListener("change", filterAndSort);
searchInput.addEventListener("input", filterAndSort);

displayPackages(packages);
