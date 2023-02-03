console.log("test");

/* 

Frage

Array von Bildern
    image_1.jpg     ...  image_100.jpg

    let retArray =[]

    mit for-Schleife
        und .push()
*/

let retArray =[];

let runden = 0;

for (runden = 1; runden < 101 ; runden = runden + 1) {
    retArray.push(`image_${runden}.jpg`);
    console.log(retArray);
    console.table(retArray);
}

