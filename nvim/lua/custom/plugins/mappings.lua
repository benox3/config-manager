local M = {
   nvimtree = {
      toggle = "<leader>nn",
      focus = "<leader>nf",
      vsplit = "s",
   },
   telescope = {
      buffers = "<leader>fb",
      find_files = { "<leader>ff", "<C-f>" },
      live_grep = { "<leader>fw", "<leader>g" },
      find_hiddenfiles = "<leader>fa",
      git_commits = "<leader>cm",
      git_status = "<leader>gt",
      help_tags = "<leader>fh",
      oldfiles = "<leader>fo",
      themes = "<leader>th", -- NvChad theme picker
      -- projects = "<leader>te",
   },
   lspconfig = {
      code_action = "<leader>f",
   },
}

return M
