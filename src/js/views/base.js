export const elements = {
    bodyContent: document.querySelector('.body_content'),
    locationDiv : document.querySelector('.location'),
    moreInfo: document.querySelector('.more_info'),
    footer: document.querySelector('.footer')
}

export const clearLoader = () => {
   const loader =  document.querySelector('.loader')
    if(loader) loader.parentElement.removeChild(loader)
}

export const clearContent = () => {
    elements.moreInfo.textContent = '';

}

export const clearHeading = () => {
    elements
}

export const renderLoader = parent => {
    const markup = `
        <div class="loader">
            
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', markup);
}


export const renderBody = location => {
    const markup = `
          <div class="card-body">
            <h3 class="card-title">${location.country_name}</h3>
            <h4>${location.city}</h4>
            
          </div>
    `;
    
    elements.locationDiv.insertAdjacentHTML('afterbegin', markup); 

}


const ApiKey = `AIzaSyDI8Bv36KfwupSlC9jzrLSBE8mCtKKnN0M`;