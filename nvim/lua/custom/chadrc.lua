local map = require("core.utils").map

local M = {}

map("n", "<C-i>", ':lua require("FTerm").toggle() <CR>')
map("t", "<C-i>", ':lua require("FTerm").toggle() <CR>')

vim.g.noswapfile = true

M.options = {
   user = function()
      vim.g.mapleader = ','
   end,
}

local userPlugins = require "custom.plugins"

M.plugins = {
   options = {
      lspconfig = {
         setup_lspconf = "custom.plugins.lspconfig",
      },
      status = {
        -- colorizer = true,
      },

   },
   user = userPlugins,
}

M.ui = {
   theme = "chadracula",
}

return M
