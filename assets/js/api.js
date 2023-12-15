
const BASE_URL_API = 'http://carip.goyeneche.test/api/';
const getGeneralInformation = async () => {
    const response = await fetch(`${BASE_URL_API}general-information`);
    const data = await response.json();

    //a todas las img con la clase logo_web le agrego el src de la api
    const logoWeb = document.querySelectorAll('.logo_web');
    logoWeb.forEach((logo) => {
        logo.src = data.logo;
    });


    return data;
}

getGeneralInformation();