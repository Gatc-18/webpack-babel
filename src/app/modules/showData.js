export const ShowData = (data, cont) => {
     
    data.forEach(({name, image, species}) => {

        cont.innerHTML +=    `
            <h1>Personajes Rick and Morty</h1>
            <div className="card">
                <img className="card-img-top" src=${image} alt="" />
                <div className="card-body">
                    <h5 className="card-title">${name}</h5>
                    <p className="card-text">${species}</p>
                    <a href="/" className="btn btn-primary">...Más</a>
                </div>
            </div>
            `
     });
}