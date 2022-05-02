return {
   { "williamboman/nvim-lsp-installer" },
   {
      "jose-elias-alvarez/null-ls.nvim",
      after = "nvim-lspconfig",
      config = function()
         require("custom.plugins.null-ls").setup()
      end,
   },
   { "numToStr/FTerm.nvim" },
   {
      "ahmedkhalf/project.nvim",
      config = function()
         require("custom.plugins.project").setup()
      end,
   },
   { "weirongxu/plantuml-previewer.vim" },
   { "tyru/open-browser.vim" },
}
