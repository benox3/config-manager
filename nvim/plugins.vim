if &compatible
  set nocompatible
endif
" Required:
set runtimepath+=~/.cache/dein/repos/github.com/Shougo/dein.vim
" Required:
if dein#load_state(expand('~/.cache/dein'))
  call dein#begin(expand('~/.cache/dein'))
  " Let dein manage dein
  " Required:
  call dein#add(expand('~/.cache/dein/repos/github.com/Shougo/dein.vim'))
  " Plugins:
  call dein#add('Shougo/neosnippet.vim')
  call dein#add('Shougo/echodoc.vim')
  call dein#add('Shougo/neopairs.vim')
  call dein#add('Shougo/neosnippet-snippets')
  call dein#add('wokalski/autocomplete-flow')
  call dein#add('chrisbra/Colorizer')
  call dein#add('benox3/vim-monokai-tasty')
  " call dein#add('morhetz/gruvbox')
  call dein#add('christoomey/vim-tmux-navigator')
  call dein#add('Shougo/denite.nvim')
  call dein#add('scrooloose/nerdtree')
  call dein#add('Shougo/deoplete.nvim')
  " call dein#add('vim-airline/vim-airline')
  call dein#add('rbong/vim-crystalline')
  call dein#add('tpope/vim-fugitive')
  call dein#add('tpope/vim-commentary')
  call dein#add('w0rp/ale')
  call dein#add('junegunn/goyo.vim')
  call dein#add('tpope/vim-surround')
  call dein#add('editorconfig/editorconfig-vim')
  call dein#add('Shougo/vimproc.vim', {'build' : 'make'})
  " call dein#add('Quramy/tsuquyomi.git')
  call dein#add('prettier/vim-prettier')
  call dein#add('pangloss/vim-javascript')
  call dein#add('mxw/vim-jsx')
  call dein#add('eugen0329/vim-esearch')
  " call dein#add('leafgarland/typescript-vim')
  call dein#add('peitalin/vim-jsx-typescript')
  call dein#add('HerringtonDarkholme/yats.vim')
  call dein#add('mhartington/nvim-typescript', {'build': './install.sh'})

  call dein#add('vimwiki/vimwiki')
  call dein#add('reasonml-editor/vim-reason-plus')
  if !has('nvim')
    call dein#add('roxma/nvim-yarp')
    call dein#add('roxma/vim-hug-neovim-rpc')
  endif
  " Required:
  call dein#end()
  call dein#save_state()
endif
" Required:
filetype plugin indent on
syntax enable
"  Install not installed plugins on startup.
if dein#check_install()
  call dein#install()
endif
