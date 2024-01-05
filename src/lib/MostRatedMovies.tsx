export async function MostRatedMovies(token:string, page:number) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token} `
        }
    };

    const res = await fetch(`https://api.themoviedb.org/3/account/20896444/rated/movies?language=en-US&page=${page}`, options)
    return res.json();
}