let internval_id;

function remember() {
  internval_id = setInterval(() => {
    console.log("Just a little reminder to tell you that you are amazing!");
  }, 60000);
}

export function start() {
  remember();
}

export function stop() {
  if (internval_id) clearInterval(internval_id);
}

