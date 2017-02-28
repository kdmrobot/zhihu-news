/**
 * Created by wb.huanghuaqing on 2017/2/24.
 */
const fs = require('fs');
const path = require('path')
/* fs.readdirSync(__dirname).reduce((entries, dir) => {
    const fullDir = path.join(__dirname, dir)
    const entry = path.join(fullDir, 'app.js')
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
        entries[dir] = ['webpack-hot-middleware/client', entry]
    }
    return entries
}, {}) */

const express = require('express')