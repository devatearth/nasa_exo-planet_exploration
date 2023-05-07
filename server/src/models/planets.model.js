const path = require('path');
const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanet = [];

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36
        && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}
const loadPlanetsData = new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '..', 'data', 'Kepler_data.csv'))
        .pipe(parse({
            comment: '#',
            columns: true,
        }))
        .on('data', (data) => {
            if (isHabitablePlanet(data))
                habitablePlanet.push(data);
        })
        .on('end', () => {
            console.log(`${habitablePlanet.length} habitable planets found!`);
            resolve();
        });
});


module.exports = { planets: habitablePlanet, loadPlanetsData };