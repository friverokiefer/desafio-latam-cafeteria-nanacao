1) npm install

RESULTADO

➜  Cafeteria-Nanacao npm run test

> desafio@1.0.0 test
> jest --forceExit

  console.log
    SERVER ON

    at Object.log (index.js:6:26)

 PASS  tests/server.spec.js
  Operaciones CRUD
    ✓ GET /cafes obteniendo status 200 y un array con al menos un (1) objeto (13 ms)
    ✓ DELETE /cafes/:id devolve un status 404 si el id no existe (3 ms)
    ✓ POST /cafes se suma un nuevo café y devolver un status 201 (9 ms)
    ✓ PUT /cafes/:id devuelve un status 400 si los IDs no coinciden (3 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.345 s, estimated 1 s
Ran all test suites.
Force exiting Jest: Have you considered using `--detectOpenHandles` to detect async operations that kept running after all tests finished?
➜  Cafeteria-Nanacao
