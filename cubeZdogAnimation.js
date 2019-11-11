let illo = new Zdog.Illustration({
  element: '.illo',
  rotate: { x: -Zdog.TAU/10, y: Zdog.TAU/8 },
  dragRotate: true,
})

let smallGroup = new Zdog.Group({ addTo: illo })
let bigGroup = new Zdog.Group({ addTo: illo })

let smallCube = new Zdog.Box({
  addTo: smallGroup,
  width: 60,
  height: 60,
  depth: 60,
  storke: false,
  fill: true,
  color: '#175d96'
})
smallCube.copy({
  addTo: smallGroup,
  stroke: 1,
  fill: false,
  color: '#fff'
})

let bigCube = new Zdog.Box({
  addTo: illo,
  width: 120,
  height: 120,
  depth: 120,
  stroke: false,
  fill: true,
  color: 'rgba(141, 214, 249, 0.5)'
})
bigCube.copy({
  addTo: bigCube,
  stroke: 3,
  fill: false,
  color: '#FFF'
})

function animate() {
  smallGroup.rotate.y += 0.01
  bigCube.rotate.y -= 0.01
  // Fun rotation
  // illo.rotate.z += 0.01
  illo.updateRenderGraph()
  requestAnimationFrame(animate)
}

animate()

let illo2 = new Zdog.Illustration({
    element: '.illo2',
    rotate: { x: -Zdog.TAU/10, y: Zdog.TAU/8 },
    dragRotate: true,
  })
  
  let smallGroup2 = new Zdog.Group({ addTo: illo2 })
  let bigGroup2 = new Zdog.Group({ addTo: illo2 })
  
  let smallCube2 = new Zdog.Box({
    addTo: smallGroup2,
    width: 60,
    height: 60,
    depth: 60,
    storke: false,
    fill: true,
    color: '#175d96'
  })
  smallCube2.copy({
    addTo: smallGroup2,
    stroke: 1,
    fill: false,
    color: '#fff'
  })
  
  let bigCube2 = new Zdog.Box({
    addTo: illo2,
    width: 120,
    height: 120,
    depth: 120,
    stroke: false,
    fill: true,
    color: 'rgba(141, 214, 249, 0.5)'
  })
  bigCube2.copy({
    addTo: bigCube2,
    stroke: 3,
    fill: false,
    color: '#FFF'
  })
  
  function animateBis() {
    smallGroup2.rotate.y += 0.01
    bigCube2.rotate.y -= 0.01
    // Fun rotation
    // illo.rotate.z += 0.01
    illo2.updateRenderGraph()
    requestAnimationFrame(animateBis)
  }
  
  animateBis()