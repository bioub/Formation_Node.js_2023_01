import fs from 'node:fs';

try {
  const buffer = fs.readFileSync('.prettierrc');
  fs.writeFileSync('.prettierrc.copy', buffer);
  console.log('Copy done');
} catch (err) {
  console.log('Erreur : ' + err.message);
}

// pile d'appel
// de fonction
// ^
// |
// |
// |try/catch { [readFileSync         ] - [writeFileSync        ] - log }
// +-----------------------------------------------------------------------------------------> temps
//                                                                  Copy done

// callback hell / pyramid of doom :
// arrive lorsque que le code enchaine les opérations async
// - forme une pyramide
// - on peut pas centraliser les erreurs
fs.readFile('.prettierrc', (err, buffer) => {
  if (err) {
    console.log('Erreur : ' + err.message);
  } else {
    fs.writeFile('.prettierrc.copy', buffer, (err) => {
      if (err) {
        console.log('Erreur : ' + err.message);
      } else {
        console.log('Copy done');
      }
    });
  }
});

// pile d'appel
// de fonction
// ^
// |
// |
// |readFile ..⟳..        writeFile ..⟳..          log
// +-----------------------------------------------------------------------------------------> temps
//                                                 Copy done
