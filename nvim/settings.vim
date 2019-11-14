"tags
set tags=./tags,tags;$HOME

tnoremap <Esc> <C-\><C-n>

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Performance Seettings
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set lazyredraw
set synmaxcol=128
syntax sync minlines=256

"Use 24-bit (true-color) mode in Vim/Neovim when outside tmux.
"If you're using tmux version 2.2 or later, you can remove the outermost $TMUX check and use tmux's 24-bit color support
"(see < http://sunaku.github.io/tmux-24bit-color.html#usage > for more information.)
if (empty($TMUX))
  if (has("nvim"))
    "For Neovim 0.1.3 and 0.1.4 < https://github.com/neovim/neovim/pull/2198 >
    let $NVIM_TUI_ENABLE_TRUE_COLOR=1
  endif
  "For Neovim > 0.1.5 and Vim > patch 7.4.1799 < https://github.com/vim/vim/commit/61be73bb0f965a895bfb064ea3e55476ac175162 >
  "Based on Vim patch 7.4.1770 (`guicolors` option) < https://github.com/vim/vim/commit/8a633e3427b47286869aa4b96f2bfc1fe65b25cd >
  " < https://github.com/neovim/neovim/wiki/Following-HEAD#20160511 >
  if (has("termguicolors"))
    set termguicolors
  endif
endif

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Cursor Highlight
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
augroup BgHighlight
  autocmd!
  autocmd WinEnter * set cul
  autocmd WinLeave * set nocul
augroup END
set cursorline

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Leader
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let mapleader = ","

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => System Clipboard
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set clipboard+=unnamedplus
vnoremap y "+y

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => .vimrc shortcut and reloading
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
nnoremap <leader>e :e ~/config-manager/nvim/settings.vim<CR>
"Auto reload vimrc on save
augroup myvimrc
  au!
  au BufWritePost ~/config-manager/nvim/init.vim nested source ~/config-manager/nvim/init.vim
  au BufWritePost ~/config-manager/nvim/settings.vim nested source ~/config-manager/nvim/init.vim
  au BufWritePost ~/config-manager/nvim/plugins.vim nested source ~/config-manager/nvim/init.vim
  au BufWritePost ~/config-manager/nvim/plugins_config.vim nested source ~/config-manager/nvim/init.vim
augroup END
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Numbers
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set number relativenumber

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Indent
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set nocompatible              " be iMproved, required
filetype off                  " required
set tabstop=2 smarttab shiftwidth=2 expandtab tabstop=2

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Close Buffer
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
nnoremap <leader>bd :bd!<cr>

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Close All Buffers
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
nnoremap <leader>ba :%bd\|e#<cr>

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Close All Buffers
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
nnoremap <leader>w :w<cr>

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Close All Buffers
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
nnoremap <leader>s ::s/\s\+/\r/g \|'[,sort \| :,']j<cr>

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Turn persistent undo on
"    means that you can undo even when you close a buffer/VIM
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
try
    set undodir=~/config-manager/nvim/temp_dirs/undodir
    set undofile
catch
endtry

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => 80 Line rule
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
if exists('+colorcolumn')
  highlight ColorColumn ctermbg=235 guibg=#2c2d27
  let &colorcolumn=join(range(81,999),",")
else
  au BufWinEnter * let w:m2=matchadd('ErrorMsg', '\%>80v.\+', -1)
endif

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Remove Trailing Whitespace on save
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
autocmd BufWritePre * :%s/\s\+$//e

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Mouse support
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set mouse=a


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Matchit
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
filetype plugin on
runtime macros/matchit.vim

set noswapfile
set splitbelow

nnoremap <leader>t :belowright split \| resize 20 \| term<cr>

autocmd BufNewFile,BufRead *.tsx,*.jsx set filetype=typescript.tsx



" smartcase
set smartcase
set ignorecase


let g:tagbar_type_r = {
    \ 'ctagstype' : 'r',
    \ 'kinds'     : [
        \ 'f:Functions',
        \ 'g:GlobalVariables',
        \ 'v:FunctionVariables',
    \ ]
\ }


" linux
set backupcopy=yes

" Automatically re-read file if a change was detected outside of vim
set autoread
