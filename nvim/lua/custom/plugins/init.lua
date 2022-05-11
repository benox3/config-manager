return {
    ["williamboman/nvim-lsp-installer"] = {},
    ["jose-elias-alvarez/null-ls.nvim"] = {
        after = "nvim-lspconfig",
        config = function()
            require("custom.plugins.null-ls").setup()
        end
    },
    ["numToStr/FTerm.nvim"] = {},
    -- ["ahmedkhalf/project.nvim"] = {
    --   after ="telescope",
    --    config = function()
    --       require("custom.plugins.project").setup()
    --    end,
    -- },
    ["weirongxu/plantuml-previewer.vim"] = {},
    ["tyru/open-browser.vim"] = {},

    -- updated mappings
    ["nvim-telescope/telescope.nvim"] = {
        setup = function()
            -- load default mappings first
            require("core.mappings").telescope()
            -- then load your mappings
            local map = require("core.utils").map
            map("n", "<leader>fw", "<cmd> :Telescope live_grep <CR>")
            map("n", "<leader>ff", "<cmd> :Telescope find_files <CR>")
        end
    },
    ["kyazdani42/nvim-tree.lua"] = {
        setup = function()
            -- load default mappings first
            require("core.mappings").nvimtree()
            local map = require("core.utils").map
            map("n", "<leader>nn", "<cmd> :NvimTreeToggle <CR>")
            map("n", "<leader>nf", "<cmd> :NvimTreeFocus <CR>")
        end
    }
}
