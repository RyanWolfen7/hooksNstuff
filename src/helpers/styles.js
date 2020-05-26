export const gridRepeat = (defaultSize, inputSize, gridSize) => {
    let x = defaultSize
    let y = '1fr'
    if (inputSize) x = inputSize
    if (gridSize) y = gridSize
    return `repeat( ${x}, minmax(0, ${y}))`
}