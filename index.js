const btnSignIn = document.getElementById("btn-signin")
const btnSignUp = document.getElementById("btn-signup")
const banner = document.getElementById("banner")
const banner2 = document.getElementById("banner2")
const slider = document.getElementById("slider")
const slider2 = document.getElementById("slider2")



const handelBanner = () => {

    slider.style.transform = `translateX(${-700}px)`
    slider2.style.transform = `translateX(${-1300}px)`
    banner.style.transform = `translateX(${700}px)`
    banner2.style.transform = `translateX(${-335}px)`


}





const handelBannerReverse = () => {


    slider.style.transform = `translateX(0px)`
    slider2.style.transform = `translateX(0px)`
    banner.style.transform = `translateX(0px)`
    banner2.style.transform = `translateX(0px)`
}

btnSignUp.addEventListener("click", () => handelBannerReverse())
btnSignIn.addEventListener("click", () => handelBanner())






async function asteroidOrbit(year, orbitclass) {
    const apiUrl = "https://jsonmock.hackerrank.com/api/asteroids/search";
    let page = 1;
    const designationList = [];


    while (true) {
        try {
            const response = await fetch(`${apiUrl}?page=${page}&year=${year}&orbitclass=${orbitclass}`);
            const data = await response.json();
            console.log(data);


            const asteroidData = data.data;
            if (!asteroidData.length) {
                break;
            }

            const filteredAsteroids = asteroidData.filter(asteroid => asteroid["period_yr"] && asteroid["orbit_class"].toLowerCase().includes(orbitclass.toLowerCase()));
            const sortedAsteroids = filteredAsteroids.sort((a, b) => {
                if (parseFloat(a["period_yr"]) !== parseFloat(b["period_yr"])) {
                    return parseFloat(a["period_yr"]) - parseFloat(b["period_yr"]);
                } else {
                    return a["designation"].localeCompare(b["designation"]);
                }
            });

            sortedAsteroids.forEach(asteroid => {
                designationList.push(asteroid["designation"]);
            });




            page++;
        } catch (error) {
            console.error("Error fetching data:", error);
            break;
        }
    }

    return designationList;
}


async function fetchDataAndPrint() {
    const result = await asteroidOrbit(2010, "aten");
    console.log(result);
}
fetchDataAndPrint()

