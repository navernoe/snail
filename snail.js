const snail = (rowsCount, columnsCount) => {
  let result = [];
  for (let i = 0; i < rowsCount; i++) {
    result.push([]);
  }
  
  let state = 'row';
  let invert = false;
  let n = 1;
  let x = { from: 0, to: rowsCount - 1, row: null };
  let y = { from: 0, to: columnsCount - 1, col: x.from };

  while (n <= rowsCount * columnsCount) {
    switch (state) {
      case 'row':
        for (let i = y.from; invert ? i >= y.to : i <= y.to; invert ? i-- : i++) {
          result[y.col][i] = n++;
        }
        x.row = y.to;
        [y.from, y.to] = [y.to, y.from];
        if (invert) {
          y.from++; x.from--;
        } else {
          y.from--; x.from++;
        } 
        state = 'column';
        break;

      case 'column':        
        for (let i = x.from; invert ? i >= x.to : i <= x.to; invert ? i-- : i++) {
          result[i][x.row] = n++;
        }
        y.col = x.to;        
        invert = !invert;
        [x.from, x.to] = [x.to, x.from];  
        state = 'row';
        break;
    }
  }
  return result;
};

 // console.log('snail(4, 7):\n', snail(4, 7));
  /*
    snail(4, 7):
    [ [ 1, 2, 3, 4, 5, 6, 7 ],
    [ 18, 19, 20, 21, 22, 23, 8 ],
    [ 17, 28, 27, 26, 25, 24, 9 ],
    [ 16, 15, 14, 13, 12, 11, 10 ] ]
  */



