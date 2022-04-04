local map = require("core.utils").map

map("n", "<leader>m", ":Telescope projects <CR>")
map("n", "<C-i>", ":lua require('FTerm').toggle() <CR>")
map("t", "<C-i>", ":lua require('FTerm').toggle() <CR>")
