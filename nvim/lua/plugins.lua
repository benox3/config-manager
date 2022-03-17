local execute = vim.api.nvim_command
local not_vscode = [[not vim.g.vscode]]
local fn = vim.fn
vim.o.background = 'light'
local install_path = fn.stdpath('data')..'/site/pack/packer/start/packer.nvim'

if fn.empty(fn.glob(install_path)) > 0 then
  fn.system({'git', 'clone', 'https://github.com/wbthomason/packer.nvim', install_path})
  execute 'packadd packer.nvim'
end

vim.cmd [[packadd packer.nvim]]
return require('packer').startup(function()

  use 'Shougo/neosnippet.vim'
  use 'Shougo/echodoc.vim'
  use 'Shougo/neopairs.vim'
  use 'Shougo/neosnippet-snippets'
  use 'wokalski/autocomplete-flow'
  use 'chrisbra/Colorizer'
  use 'christoomey/vim-tmux-navigator'
  use 'mhinz/vim-signify'
  use 'tpope/vim-fugitive'
  use 'tpope/vim-commentary'
  use 'junegunn/goyo.vim'
  use 'tpope/vim-surround'
  use 'editorconfig/editorconfig-vim'
  use {'Shougo/vimproc.vim', run=':silent! !make'}
  -- " call dein#add('prettier/vim-prettier')
  use 'pangloss/vim-javascript'
  use 'mxw/vim-jsx'
  use 'eugen0329/vim-esearch'
  use {
    'neoclide/coc.nvim',
    branch ='release',
    cond = not_vscode,
  }
  use 'peitalin/vim-jsx-typescript'
  use 'HerringtonDarkholme/yats.vim'
  use 'janko/vim-test'
  use { 'Yggdroot/LeaderF', run = ':LeaderfInstallCExtension' }
  -- use { 'fatih/vim-go', run = ':GoUpdateBinaries' }
  -- " call dein#add('fatih/vim-go', {'build': ':GoUpdateBinaries' })
  -- Post-install/update hook with neovim command
  use {
    'nvim-treesitter/nvim-treesitter',
    run = ':TSUpdate',
    cond = not_vscode,
  }
  -- " call dein#add('justinmk/vim-sneak')
  use 'antoinemadec/FixCursorHold.nvim'
  use 'lambdalisue/fern.vim'
  -- " call dein#add('lambdalisue/fern-git-status.vim')
  use 'lambdalisue/glyph-palette.vim'
  use 'lambdalisue/nerdfont.vim'
  use 'lambdalisue/fern-renderer-nerdfont.vim'
  use 'lambdalisue/fern-hijack.vim'
  use 'junegunn/limelight.vim'
  -- You can alias plugin names
  use {'dracula/vim', as = 'dracula'}
  -- " call dein#add('vim-test/vim-test')

  use 'vimwiki/vimwiki'
  use 'reasonml-editor/vim-reason-plus'
  use 'vim-airline/vim-airline'
  use 'roxma/nvim-yarp'
  use 'roxma/vim-hug-neovim-rpc'
  use 'fatih/vim-hclfmt'
  -- Packer can manage itself
  use 'wbthomason/packer.nvim'
end)
