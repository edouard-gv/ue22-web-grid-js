document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();

  // Hey! Pssst! In here ...

  counters = {
    original: 30,
    clicked: 0,
    hovered: 0,
    total: 30,
  }

  synchCounters(counters);

  document.getElementById("btn-add-line").addEventListener("click", () => {
    for (let i=0; i<10; i++) {
      square = document.createElement("div")
      addBehavior(square, counters)
      document.getElementById("grid").appendChild(square)
      counters.total++
      counters.original++
      synchCounters(counters)
    }
  })


  document.querySelectorAll("div#grid div").forEach(square => addBehavior(square, counters))

});

function synchCounters(counters) {
  for (key in counters) {
    document.getElementById(key).textContent = counters[key]
  }
}

function addBehavior(square, counters) {
  square.addEventListener("click", (event) => {
    event.target.style.backgroundColor="green"
    counters.clicked++
    if (event.target.classList.contains("painted")) {
      counters.hovered--
    }
    else {
      counters.original--
    }
    synchCounters(counters)
  })

  square.addEventListener("mouseenter", (event) => {
    if (!event.target.classList.contains("painted"))
    {    
      event.target.classList.add("painted");
      counters.hovered++
      counters.original--
      synchCounters(counters)
    }  
  })
}

/**
 * Cleans up the document so that the exercise is easier.
 *
 * There are some text and comment nodes that are in the initial DOM, it's nice
 * to clean them up beforehand.
 */
function initialCleanup() {
  const nodesToRemove = [];
  document.getElementById("grid").childNodes.forEach((node, key) => {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      nodesToRemove.push(node);
    }
  });
  for (const node of nodesToRemove) {
    node.remove();
  }
}
