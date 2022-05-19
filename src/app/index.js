import { GetData } from './helpers/getData';
import { ShowData } from './modules/showData'
const container = document.getElementById('container');


document.addEventListener('DOMContentLoaded', async () => {
    let { results } = await GetData("https://rickandmortyapi.com/api/character");



    ShowData(results, container);



})