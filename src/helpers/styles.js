export const gridRepeat = (defaultSize, inputSize, gridSize) => {
    let x = defaultSize
    let y = '1fr'
    if (inputSize) x = inputSize
    if (gridSize) y = gridSize
    return `repeat( ${x}, minmax(0, ${y}))`
}

export const gridArea = ( row, column, rowSpan, colSpan) => {
    let defaultRow, defaultColumn, defaultRowSpan, defaultColSpan 
    defaultRow = defaultColumn = defaultRowSpan = defaultColSpan = 1 // sets default to 1
    if(row) defaultRow = row // if there is a row make it that number
    if(column) defaultColumn = column // if there is a column make it that
    if(rowSpan) defaultRowSpan = rowSpan // sets the span
    if(colSpan) defaultColSpan = colSpan // ect
    return `${defaultRow} / ${defaultColumn} / span ${defaultRowSpan} / span ${defaultColSpan}`
}