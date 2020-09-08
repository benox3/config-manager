let g:dein#auto_recache = 1

if &compatible
  set nocompatible
endif
" Add the dein installation directory into runtimepath
set runtimepath+=~/.cache/dein/repos/github.com/Shougo/dein.vim

if dein#load_state('~/.cache/dein')
  call dein#begin('~/.cache/dein')

  call dein#add('~/.cache/dein/repos/github.com/Shougo/dein.vim')
  call dein#add('Shougo/deoplete.nvim')

  " PLUGINS "
  call dein#add('Shougo/neosnippet.vim')
  call dein#add('Shougo/echodoc.vim')
  call dein#add('Shougo/neopairs.vim')
  call dein#add('Shougo/neosnippet-snippets')
  call dein#add('wokalski/autocomplete-flow')
  call dein#add('chrisbra/Colorizer')
  call dein#add('benox3/vim-monokai-tasty')
  call dein#add('christoomey/vim-tmux-navigator')
  call dein#add('preservim/nerdtree')
  call dein#add('Shougo/deoplete.nvim')
  call dein#add('mhinz/vim-signify')
  call dein#add('tpope/vim-fugitive')
  call dein#add('tpope/vim-commentary')
  call dein#add('junegunn/goyo.vim')
  call dein#add('tpope/vim-surround')
  call dein#add('editorconfig/editorconfig-vim')
  call dein#add('Shougo/vimproc.vim', {'build' : 'make'})
  call dein#add('prettier/vim-prettier')
  call dein#add('pangloss/vim-javascript')
  call dein#add('mxw/vim-jsx')
  call dein#add('eugen0329/vim-esearch')
  call dein#add('neoclide/coc.nvim', {'merge':0, 'rev': 'release'})
  call dein#add('peitalin/vim-jsx-typescript')
  call dein#add('HerringtonDarkholme/yats.vim')
  call dein#add('ryanoasis/vim-devicons')
  call dein#add('tiagofumo/vim-nerdtree-syntax-highlight')
  call dein#add('janko/vim-test')
  call dein#add('Yggdroot/LeaderF', {'build': './install.sh' })
  call dein#add('justinmk/vim-sneak')

  call dein#add('vimwiki/vimwiki')
  call dein#add('reasonml-editor/vim-reason-plus')
  if !has('nvim')
    call dein#add('roxma/nvim-yarp')
    call dein#add('roxma/vim-hug-neovim-rpc')
  endif

  call dein#end()
  call dein#save_state()
endif

filetype plugin indent on
syntax enable
