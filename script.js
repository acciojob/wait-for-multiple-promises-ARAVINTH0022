function createPromise(id) {
  const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, time });
    }, time * 1000);
  });
}

const startTime = performance.now();

const p1 = createPromise(1);
const p2 = createPromise(2);
const p3 = createPromise(3);

Promise.all([p1, p2, p3]).then((results) => {
  const endTime = performance.now();
  const totalTime = (endTime - startTime) / 1000;

  const outputBody = document.getElementById('output');
  outputBody.innerHTML = '';

  results.forEach((res) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>Promise ${res.id}</td><td>${res.time.toFixed(3)}</td>`;
    outputBody.appendChild(row);
  });

  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
  outputBody.appendChild(totalRow);
});