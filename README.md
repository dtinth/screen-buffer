ScreenBuffer
============
A ScreenBuffer represents a visible portion of a terminal in a screen.
A ScreenBuffer contains a lot of cells.
Each cell contains a character and attributes,
such as color and boldness.
It also keeps track of cursor position.

## Cell Attributes

Currently the attributes is a 21-bit integer. From MSB:

 * 1 bit - inverse video flag
 * 1 bit - underline flag
 * 1 bit - bold flag
 * 9 bits - foreground color (according to xterm-256)
 * 9 bits - background color (according to xterm-256)

There are two special values for colors:

 * 257 - default foreground color
 * 256 - default background color
 
## API

### update(y, [ [attr, char], [attr, char], ... ]) 

Set one line of data in the ScreenBuffer.
y is the row in the screen and data array looks like this:
    [ [attribute, character], ... ]

### toString()

Returns the string in the display buffer.

### setCursor(x, y)

Sets the cursor position.

### getRows()

Returns the number of rows in the buffer.

### getCols(row)

Returns the number of characters in this row.

### setRows(rows)

Resizes the number of rows.

### setCols(row, cols)

Resizes the number of columns in the specified row.

### getCell(row, col)

Returns the cell at (row, col).
Returned value is in form of [ attributes, ch ].

### setCell(row, col, cell)

Sets the cell at (row, col). A cell is in form of [ attributes, ch ].

