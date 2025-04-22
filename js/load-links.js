document.addEventListener('DOMContentLoaded', () => {
    // Fetch the JSON data
    var links = [
    {
      "name": "bagsync",
      "url": "https://www.curseforge.com/wow/addons/bagsync/download"
    }, {
      "name": "battle-pet-battle-ui-tweaks",
      "url": "https://www.curseforge.com/wow/addons/battle-pet-battle-ui-tweaks/download"
    }, {
      "name": "big-wigs",
      "url": "https://www.curseforge.com/wow/addons/big-wigs/download"
    }, {
      "name": "little-wigs",
      "url": "https://www.curseforge.com/wow/addons/little-wigs/download"
    }, {
      "name": "bug-grabber",
      "url": "https://www.curseforge.com/wow/addons/bug-grabber/download"
    }, {
      "name": "bugsack",
      "url": "https://www.curseforge.com/wow/addons/bugsack/download"
    }, {
      "name": "details",
      "url": "https://www.curseforge.com/wow/addons/details/download"
    }];
    displayLinks(links);
    // fetch('links.json')
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         displayLinks(data.links);
    //     })
    //     .catch(error => {
    //         console.error('Error loading links:', error);
    //         document.getElementById('links-container').innerHTML = 
    //             '<li>Sorry, could not load links. Please try again later.</li>';
    //     });
});

function displayLinks(links) {
    const container = document.getElementById('links-container');
    
    // Clear the "Loading links..." message
    container.innerHTML = '';
    
    // Create list items for each link
    links.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        
        anchor.href = link.url;
        anchor.textContent = link.name;
        anchor.target = "_blank";
        
        listItem.appendChild(anchor);
        container.appendChild(listItem);
    });
}