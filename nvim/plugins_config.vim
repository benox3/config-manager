"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Denite settings
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
if executable('ag')
	" The Silver Searcher

call denite#custom#var('file/rec', 'command',
      \ ['ag', '--follow', '--nocolor', '--nogroup', '-g', ''])

	" Setup ignore patterns in your .agignore file!
	" https://github.com/ggreer/the_silver_searcher/wiki/Advanced-Usage

	call denite#custom#var('grep', 'command', ['ag'])
	call denite#custom#var('grep', 'recursive_opts', [])
	call denite#custom#var('grep', 'pattern_opt', [])
	call denite#custom#var('grep', 'separator', ['--'])
	call denite#custom#var('grep', 'final_opts', [])
	call denite#custom#var('grep', 'default_opts',
        \ [ '--skip-vcs-ignores', '--vimgrep', '--smart-case', '--hidden',
        \ '--path-to-ignore', $AGIGNORE ])

	call denite#custom#map(
	      \ 'normal',
	      \ 's',
	      \ '<denite:do_action:vsplit>',
	      \ 'noremap'
	      \)
endif
nnoremap <C-f> :<C-u>Denite file/rec<CR>

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Esearch
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
call esearch#map('<leader>g', 'esearch')

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => NERDTree
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:nerdtree_tabs_focus_on_files = 1
let g:nerdtree_tabs_open_on_gui_startup = 0
nnoremap <leader>nf :NERDTreeFind<cr>
nnoremap <leader>nn :NERDTreeToggle<cr>

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Async Completion on startup
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:neosnippet#enable_completed_snippet = 1
let g:deoplete#enable_at_startup = 1
inoremap <silent><expr><tab> pumvisible() ? "\<c-n>" : "\<tab>"
inoremap <silent><expr><s-tab> pumvisible() ? "\<c-p>" : "\<s-tab>"

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Airline *NOT BEING USED*
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:airline_powerline_fonts = 1

let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#show_buffers = 1
let g:airline#extensions#tabline#show_splits = 1
let g:airline#extensions#tabline#show_tabs = 0
let g:airline#extensions#tabline#fnamemod = ':t'
let g:airline_theme='gruvbox'

"
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Crystalline
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
function! StatusLine(current, width)
  let l:s = ''

  if a:current
    let l:s .= crystalline#mode() . crystalline#right_mode_sep('')
  else
    let l:s .= '%#CrystallineInactive#'
    '
  endif
  let l:s .= ' %t%h%w%m%r '
  if a:current
    let l:s .= crystalline#right_sep('', 'Fill')
  endif

  let l:s .= '%='
  if a:current
    let l:s .= crystalline#left_sep('', 'Fill') . ' %{&paste ?"PASTE ":""}%{&spell?"SPELL ":""}'
    let l:s .= crystalline#left_mode_sep('')
  endif
  if a:width > 80
    let l:s .= ' %{&ft}[%{&enc}][%{&ffs}] %l/%L %c%V %P '
  else
    let l:s .= ' '
  endif

  return l:s
endfunction

function! TabLine()
  let l:vimlabel = has('nvim') ?  ' NVIM ' : ' VIM '
  let l:s = ' %t%h%w%m%r '
  let l:s .= crystalline#bufferline(2, len(l:vimlabel), 1) . '%=%#CrystallineTab# ' . l:vimlabel
  return l:s
endfunction

let g:crystalline_enable_sep = 1
let g:crystalline_statusline_fn = 'StatusLine'
let g:crystalline_tabline_fn = 'TabLine'
let g:crystalline_theme = 'molokai'

set showtabline=2
set guioptions-=e
set laststatus=2


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Gruvbox
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set termguicolors
" let g:gruvbox_contrast_dark='hard'
" set background=dark
let g:vim_monokai_tasty_italic = 1
colorscheme vim-monokai-tasty

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => ALE
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:ale_linters = {
\   'javascript': ['eslint', 'flow'],
\   'typescript': ['tslint'],
\}

let g:ale_fixers = { 'typescript': ['tslint']}
let g:ale_completion_enabled = 0
let g:ale_fix_on_save = 1
"
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Goyo
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
nnoremap <leader>z :Goyo<cr>
let g:goyo_linenr = 1

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => vim-jsx
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:jsx_ext_required = 0



""" vimwiki
set nocompatible
filetype plugin on
syntax on


"" vim language server settings
let g:LanguageClient_serverCommands = {
    \ 'reason': ['~/rls-macos/reason-language-server'],
    \ }
