local map = require("core.utils").map

map("n", "<C-i>", ':lua require("FTerm").toggle() <CR>')
map("t", "<C-i>", ':lua require("FTerm").toggle() <CR>')

vim.g.noswapfile = true
local custom_mappings = require "custom.mappings"
local M = {
   mappings = custom_mappings,
}

M.options = {
   mapleader = ",",
}

local nvimtree = require "custom.plugins.configs.nvimtree"
local userPlugins = require "custom.plugins"

M.plugins = {
   status = {
      colorizer = true,
   },

   options = {
      lspconfig = {
         setup_lspconf = "custom.plugins.lspconfig",
      },
   },

   default_plugin_config_replace = {
      nvim_tree = nvimtree,
   },

   install = userPlugins,
}

M.ui = {
   theme = "chadracula",
}

return M
