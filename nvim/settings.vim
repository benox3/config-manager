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
set tabstop=2 smarttab shiftwidth=2 expandtab tabstop=2

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Close Buffer
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
nnoremap <leader>bd :bd

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
  set colorcolumn=80
else
  au BufWinEnter * let w:m2=matchadd('ErrorMsg', '\%>80v.\+', -1)
endif


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Remove Trailing Whitespace on save
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
autocmd BufWritePre * :%s/\s\+$//e
